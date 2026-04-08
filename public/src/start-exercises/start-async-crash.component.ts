import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

type Profile = { name: string; company: string };

@Component({
  selector: 'app-start-async-crash',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './start-async-crash.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StartAsyncCrashComponent implements OnInit {
  // ⚠️ Intencionado para el ejercicio: empieza como undefined, se asigna después.
  profile!: Profile;

  ngOnInit(): void {
    setTimeout(() => {
      this.profile = { name: 'María', company: 'ACME' };
    }, 800);
  }
}
