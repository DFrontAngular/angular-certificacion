import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
@Component({
  selector: 'app-quiz-result',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './quiz-result.component.html'
})
export class QuizResultComponent {
  @Input() score = 0;
  @Input() total = 0;
}