import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

type Profile = {
  name: string;
  email: string;
};

@Component({
  selector: 'app-bugfix3-async-template',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './bugfix-3-async-template.component.html',
  styleUrls: ['./bugfix-3-async-template.component.scss']
})
export class Bugfix3AsyncTemplateComponent {
  // BUG: se marca con ! para pasar el tipado, pero en runtime empieza como undefined.
  profile!: Profile;

  constructor() {
    // Simula carga asíncrona (HTTP)
    setTimeout(() => {
      this.profile = { name: 'Carlos', email: 'carlos@example.com' };
    }, 800);
  }
}
