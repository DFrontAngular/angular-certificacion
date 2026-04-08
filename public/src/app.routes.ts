import { Routes } from '@angular/router';
export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'users' },
  { path: 'users', loadComponent: () => import('./users/users-page.component').then(m => m.UsersPageComponent) },
  { path: 'quiz', loadComponent: () => import('./quiz/quiz.component').then(m => m.QuizComponent) },
  { path: 'bugs', loadComponent: () => import('./bugs/bugs-page.component').then(m => m.BugsPageComponent) },
  {
  path: 'arranque',
  loadComponent: () =>
    import('./start-exercises/start-exercises-page.component').then(m => m.StartExercisesPageComponent),
  children: [
    {
      path: '1',
      loadComponent: () =>
        import('./start-exercises/start-reactive-forms.component').then(m => m.StartReactiveFormsComponent),
    },
    {
      path: '2',
      loadComponent: () =>
        import('./start-exercises/start-async-crash.component').then(m => m.StartAsyncCrashComponent),
    },
    { path: '', pathMatch: 'full', redirectTo: '1' },
  ],
},
{ path: '**', redirectTo: 'users' }
];