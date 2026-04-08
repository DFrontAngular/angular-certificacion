# Guía interna (entrevistador) — Ejercicios de arranque (Ej. 4 y 5)

> **No entregar al candidato** (o dejar en carpeta interna).
> El candidato debe ejecutar `npm start`, leer el error, explicar qué significa y proponer/implementar la solución.

---
## Ejercicio 4 — La aplicación no arranca al usar formularios reactivos

### Síntoma esperado (compilación)
Al ejecutar `npm start`, Angular fallará con un error similar a:
- `NG0303: Can't bind to 'formGroup' since it isn't a known property of 'form'.`

### Causa
El componente `StartReactiveFormsComponent` usa `[formGroup]` / `formControlName` pero **no** tiene importado `ReactiveFormsModule` en `imports` (standalone).

### Solución (mínima)
En `public/src/start-exercises/start-reactive-forms.component.ts`:
- Añadir `ReactiveFormsModule` a `imports`.

Ejemplo:
```ts
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  // ...
  imports: [CommonModule, ReactiveFormsModule],
})
```

---
## Ejercicio 5 — La vista rompe al cargar datos asíncronos

### Síntoma esperado (runtime)
La app arranca (una vez arreglado el ejercicio 4), pero al navegar a:
- `/arranque/2`
se verá un error en consola similar a:
- `Cannot read properties of undefined (reading 'name')`

### Causa
El template accede a `profile.name` y `profile.company` antes de que `profile` exista (se asigna tras un `setTimeout`).

### Soluciones válidas
- Uso de control de flujo en template (`@if`) para renderizar solo cuando exista.
- Safe navigation (`profile?.name`) y/o valores por defecto.
- Inicializar `profile` con un valor inicial.

Ejemplo con `@if`:
```html
@if (profile) {
  <h3>{{ profile.name }}</h3>
  <p>Empresa: {{ profile.company }}</p>
} @else {
  <p>Cargando...</p>
}
```

---
## Tiempo estimado (junior)
- Ejercicio 4: 5–10 min
- Ejercicio 5: 5–10 min
- Total: 10–20 min
