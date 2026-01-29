import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuizQuestionComponent } from './quiz-question.component';
import { Question } from '../question.model';
import { By } from '@angular/platform-browser';

describe('QuizQuestionComponent', () => {
  let component: QuizQuestionComponent;
  let fixture: ComponentFixture<QuizQuestionComponent>;

  const mock: Question = {
    q: '¿Pregunta de test?',
    answers: ['Opción A', 'Opción B', 'Opción C'],
    correctIndex: 1
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizQuestionComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(QuizQuestionComponent);
    component = fixture.componentInstance;
    component.question = mock;
    component.index = 0;
    fixture.detectChanges();
  });

  it('debería mostrar el texto de la pregunta', () => {
    const header = fixture.nativeElement.querySelector('strong');
    expect(header.textContent).toContain(mock.q);
  });

  it('debería mostrar todas las opciones', () => {
    const labels = fixture.nativeElement.querySelectorAll('label.quiz-answer-label');
    expect(labels.length).toBe(3);
    expect(labels[0].textContent).toContain('Opción A');
    expect(labels[1].textContent).toContain('Opción B');
    expect(labels[2].textContent).toContain('Opción C');
  });

  it('debería emitir el valor seleccionado al hacer clic', () => {
    spyOn(component.answered, 'emit');
    const radios = fixture.debugElement.queryAll(By.css('input[type="radio"]'));
    radios[2].nativeElement.click();
    expect(component.answered.emit).toHaveBeenCalledWith(2);
  });
});
