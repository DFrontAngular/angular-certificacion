import { Question } from './question.model';
export const QUESTIONS: Question[] = [
  { q: '¿Qué decorador se usa para declarar un componente?', answers: ['@Directive()', '@Injectable()', '@Component()', '@Pipe()'], correctIndex: 2 },
  { q: '¿Qué hace @Input() en un componente hijo?', answers: ['Emite eventos al padre', 'Recibe datos desde el padre', 'Inyecta servicios', 'Declara una ruta'], correctIndex: 1 },
  { q: 'Standalone + HTTP en Angular 20 se habilita con…', answers: ['HttpClientModule', 'provideHttpClient()', 'import HttpModule', 'HttpClient.forRoot()'], correctIndex: 1 },
  { q: '¿Cómo emite un hijo un evento al padre?', answers: ['@Output() clicked = new EventEmitter(); clicked.emit(v)', '@Input() clicked = new EventEmitter(); clicked.emit(v)', 'Llamando a un método del padre', 'Con un Service Worker'], correctIndex: 0 },
  { q: 'Nueva sintaxis de control de flujo condicional es…', answers: ['*ngIf', '@if (cond) { ... }', 'v-if', '*ngShow'], correctIndex: 1 }
];