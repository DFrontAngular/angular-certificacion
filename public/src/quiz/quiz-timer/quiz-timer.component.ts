import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
@Component({
  selector: 'app-quiz-timer',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './quiz-timer.component.html'
})
export class QuizTimerComponent {
  @Input() timeLeft = 0;
}