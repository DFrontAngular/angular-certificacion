import { Routes } from '@angular/router';
export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'users' },
  { path: 'users', loadComponent: () => import('./users/users-page.component').then(m => m.UsersPageComponent) },
  { path: 'quiz', loadComponent: () => import('./quiz/quiz.component').then(m => m.QuizComponent) },
  { path: '**', redirectTo: 'users' }
];