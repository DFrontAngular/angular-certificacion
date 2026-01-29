import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { UsersService } from './users.service';
import { User } from './user.model';

@Component({
  selector: 'app-users-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']  // AÑADIDO para que cargue el SCSS 
})
export class UsersPageComponent {
  private api = inject(UsersService);
  private fb = inject(NonNullableFormBuilder);
  readonly users = this.api.users;

  form = this.fb.group({
    name: this.fb.control('', {
      validators: [Validators.required, Validators.minLength(3)],
    }),
    email: this.fb.control('', {
      validators: [Validators.required, Validators.email],
    }),
    role: this.fb.control<'Admin' | 'Editor' | 'Viewer'>('Viewer', {
      validators: [Validators.required],
    }),
  });

  idEnEdicion: number | null = null;
  modalAbierto = false;
  usuarioAEliminar: User | null = null;

  // Alta o edición
  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const { name, email, role } = this.form.getRawValue();
    if (this.idEnEdicion != null) {
      // Edición
      this.api.updateUser({ id: this.idEnEdicion, name, email, role });
      this.idEnEdicion = null;
    } else {
      // Alta
      this.api.addUser({ name, email, role });
    }
    this.form.reset({ name: '', email: '', role: 'Viewer' });
  }

  startEdit(user: User) {
    this.idEnEdicion = user.id;
    this.form.setValue({
      name: user.name,
      email: user.email,
      role: user.role as 'Admin' | 'Editor' | 'Viewer',
    });
  }

  cancelEdit() {
    this.idEnEdicion = null;
    this.form.reset({ name: '', email: '', role: 'Viewer' });
  }

  // Modal de confirmación al eliminar
  pedirEliminacion(user: User) {
    this.usuarioAEliminar = user;
    this.modalAbierto = true;
  }
  cancelarEliminacion() {
    this.modalAbierto = false;
    this.usuarioAEliminar = null;
  }
  confirmarEliminacion() {
    if (this.usuarioAEliminar) {
      this.api.deleteUser(this.usuarioAEliminar.id);
      // Si estaba editando este, salir de edición
      if (this.idEnEdicion === this.usuarioAEliminar.id) {
        this.cancelEdit();
      }
    }
    this.modalAbierto = false;
    this.usuarioAEliminar = null;
  }

  trackById = (i: number, u: User) => u.id;
}
