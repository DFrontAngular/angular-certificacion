import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiniUser } from './bugfix-1-types';

@Component({
  selector: 'app-bugfix1-mutation-list',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './bugfix-1-list.component.html'
})
export class Bugfix1MutationListComponent {
  @Input({ required: true }) users: MiniUser[] = [];

  trackById = (_: number, u: MiniUser) => u.id;
}
