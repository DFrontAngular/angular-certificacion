import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Bugfix1MutationListComponent } from './bugfix-1-list.component';
import { MiniUser } from './bugfix-1-types';

@Component({
  selector: 'app-bugfix1-mutation-host',
  standalone: true,
  imports: [CommonModule, Bugfix1MutationListComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './bugfix-1-host.component.html',
  styleUrls: ['./bugfix-1-host.component.scss']
})
export class Bugfix1MutationHostComponent {
  // El bug está en cómo se actualiza esta lista (mutación vs reemplazo).
  users: MiniUser[] = [
    { id: 1, name: 'Ana' },
    { id: 2, name: 'Luis' },
    { id: 3, name: 'Marta' }
  ];

  renameFirst() {
    // BUG: se muta un elemento sin cambiar la referencia del array.
    // En componentes OnPush que reciben el array por @Input, esto puede no refrescar la vista.
    this.users[0].name = 'María';
  }

  reset() {
    this.users = [
      { id: 1, name: 'Ana' },
      { id: 2, name: 'Luis' },
      { id: 3, name: 'Marta' }
    ];
  }
}
