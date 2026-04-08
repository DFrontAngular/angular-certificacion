import { Injectable, signal } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class Bugfix2LeakService {
  readonly ticks = signal(0);

  tick$(): Observable<number> {
    // Emite 1 cada segundo. El bug se produce si alguien se subscribe y no se desuscribe.
    return interval(1000);
  }

  bump() {
    this.ticks.update(v => v + 1);
  }
}
