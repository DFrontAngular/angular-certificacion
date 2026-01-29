import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { QuizQuestionComponent } from './quiz-question/quiz-question.component';
import { QuizResultComponent } from './quiz-result/quiz-result.component';
import { QuizTimerComponent } from './quiz-timer/quiz-timer.component';
import { Question } from './question.model';
import { QUESTIONS } from './questions.data';
@Component({
  selector: 'app-quiz',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [QuizQuestionComponent, QuizResultComponent, QuizTimerComponent],
  templateUrl: './quiz.component.html'
})
export class QuizComponent {
  private destroyRef = inject(DestroyRef);
  readonly questions = signal<Question[]>(QUESTIONS);
  readonly answers = signal<Record<number, number>>({});
  readonly timeLeft = signal(180);
  readonly finished = signal(false);

  readonly answeredCount = computed(() => Object.keys(this.answers()).length);
  readonly total = computed(() => this.questions().length);
  readonly score = computed(() => {
    const q = this.questions();
    const a = this.answers();
    let s = 0;
    for (let i = 0; i < q.length; i++) {
      if (a[i] === q[i].correctIndex) s++;
    }
    return s;
  });

  constructor() {
    const id = setInterval(() => {
      if (this.finished()) return;
      this.timeLeft.update((t) => t - 1);
    }, 1000);
    this.destroyRef.onDestroy(() => clearInterval(id));

    // Auto-finish when time runs out.
    effect(() => {
      if (!this.finished() && this.timeLeft() <= 0) {
        this.finish();
      }
    });
  }
  onAnswer(index: number, selected: number) {
    this.answers.set({ ...this.answers(), [index]: selected });
  }
  finish() {
    if (this.finished()) return;
    this.finished.set(true);
  }
  trackByIndex = (i: number) => i;
}
