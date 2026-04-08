import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Bugfix2LeakService } from './bugfix-2-leak.service';

@Component({
  selector: 'app-bugfix2-subscription-leak',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './bugfix-2-subscription-leak.component.html'
})
export class Bugfix2SubscriptionLeakComponent implements OnInit {
  private svc = inject(Bugfix2LeakService);

  ticks = this.svc.ticks;

  ngOnInit(): void {
    // BUG: suscripción sin cleanup -> al destruir/crear el componente se acumulan subs.
    this.svc.tick$().subscribe(() => {
      this.svc.bump();
      // console.log('tick'); // útil para observar duplicados
    });
  }
}
