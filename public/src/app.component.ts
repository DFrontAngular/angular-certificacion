import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="topbar">
      <div class="topbar-inner">
        <div class="brand">Evaluación Angular</div>
        <nav class="nav">
          <a routerLink="/users" routerLinkActive="active">Usuarios</a>
          <a routerLink="/quiz" routerLinkActive="active">Quiz</a>
          <a routerLink="/bugs" routerLinkActive="active">Bugs</a>
        </nav>
      </div>
    </header>
    <main class="container">
      <router-outlet></router-outlet>
    </main>
  `
})
export class AppComponent {}