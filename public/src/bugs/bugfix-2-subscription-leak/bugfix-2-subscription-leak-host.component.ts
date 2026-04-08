import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Bugfix2SubscriptionLeakComponent } from './bugfix-2-subscription-leak.component';

@Component({
  selector: 'app-bugfix2-subscription-leak-host',
  standalone: true,
  imports: [CommonModule, Bugfix2SubscriptionLeakComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './bugfix-2-subscription-leak-host.component.html',
  styleUrls: ['./bugfix-2-subscription-leak-host.component.scss']
})
export class Bugfix2SubscriptionLeakHostComponent {
  show = signal(true);

  toggle() {
    this.show.update(v => !v);
  }
}
