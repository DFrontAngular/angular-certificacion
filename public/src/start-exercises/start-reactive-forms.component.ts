import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-start-reactive-forms',
  standalone: true,
  // ⚠️ Intencionado para el ejercicio: falta ReactiveFormsModule en imports.
  imports: [CommonModule],
  templateUrl: './start-reactive-forms.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StartReactiveFormsComponent {
  form = new FormGroup({
    name: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(3)] }),
    email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
  });

  submit() {
    if (this.form.invalid) return;
    console.log('submit', this.form.getRawValue());
  }
}
