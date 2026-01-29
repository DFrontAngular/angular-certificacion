import { Injectable, computed, signal } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { User } from './user.model';
import { toObservable } from '@angular/core/rxjs-interop';
@Injectable({ providedIn: 'root' })
export class UsersService {
  private readonly _users = signal<User[]>([
    { id: 1, name: 'Rafa Nuñez', email: 'rafa@gmail.com', role: 'Admin' },
    { id: 2, name: 'María Flores',  email: 'maria@gmail.com',  role: 'Editor' }
  ]);
  /** Readonly signal for components.
   *  Usage: this.users() or @for (u of users(); ...)
   */
  readonly users = this._users.asReadonly();

  /** Optional: derived data for demos/evaluations */
  readonly total = computed(() => this._users().length);

  /** Optional: Observable bridge (useful if you want to show RxJS interop) */
  readonly users$ = toObservable(this._users);

  /** Simulated API fetch (RxJS). */
  getUsers(): Observable<User[]> {
    return of(this._users()).pipe(delay(50));
  }

  /** Signal-first mutation (sync). */
  addUser(user: Omit<User, 'id'>): User {
    const next: User = { ...user, id: Date.now() };
    this._users.update((list) => [...list, next]);
    return next;
  }

  /** Elimina usuario por id (signal-first). */
  deleteUser(id: number): void {
    this._users.update((list) => list.filter((u) => u.id !== id));
  }

  /** Actualiza usuario por id (signal-first). */
  updateUser(updated: User): void {
    this._users.update((list) =>
      list.map((u) => (u.id === updated.id ? { ...u, ...updated } : u))
    );
  }
}
