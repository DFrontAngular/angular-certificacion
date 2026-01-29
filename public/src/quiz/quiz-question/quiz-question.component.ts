import { Component, ChangeDetectionStrategy, EventEmitter, Input, Output } from '@angular/core';
import { Question } from '../question.model';
@Component({
  selector: 'app-quiz-question',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.scss']
})
export class QuizQuestionComponent {
  @Input({ required: true }) question!: Question;
  @Input({ required: true }) index!: number;
  @Input() disabled = false;
  @Output() answered = new EventEmitter<number>();
  idFor(j: number) { return `q${this.index}-a${j}`; }
}
