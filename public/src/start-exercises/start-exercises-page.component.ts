import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-start-exercises-page',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './start-exercises-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StartExercisesPageComponent {}
