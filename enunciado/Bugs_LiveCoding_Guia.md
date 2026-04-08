# Live Coding – Guía de bugs (para entrevistador)

> Este documento **no es para el candidato**. Resume qué ocurre en cada ejercicio y una solución típica.

---

## Ejercicio 1 – Lista no se actualiza tras modificar un elemento (mutación)

### Qué ocurre
Al pulsar **“Renombrar primero”** se modifica el nombre del primer elemento, pero el listado que se muestra en el componente hijo no se refresca (o lo hace de forma inconsistente).

### Causa típica
Se está **mutando** un objeto/array existente en lugar de **reemplazar la referencia**.
En escenarios habituales (p. ej. `ChangeDetectionStrategy.OnPush`, `@Input()` o signals), Angular no detecta cambios si no cambia la referencia.

### Cómo se soluciona
Aplicar actualización **inmutable**:
- Reemplazar el array completo con `map`/spread.
- Reemplazar el elemento con `{ ...u, name: '...' }`.

Ejemplo:
```ts
this.users.update(list =>
  list.map((u, i) => i === 0 ? { ...u, name: 'María' } : u)
);
```

---

## Ejercicio 2 – Fuga por suscripción (se acumulan ticks / llamadas)

### Qué ocurre
El contador o “ticks” se incrementa y, al navegar fuera y volver a entrar en la vista, el incremento se vuelve más rápido (hay múltiples “sources” activos).

### Causa típica
Se crea una suscripción (o un `setInterval`) y **no se limpia** al destruir el componente.
En un proyecto real esto provoca fugas de memoria y efectos duplicados.

### Cómo se soluciona
Limpiar recursos en `ngOnDestroy` o usar patrones de cancelación:
- `takeUntilDestroyed(inject(DestroyRef))`
- o guardar la `Subscription` y hacer `unsubscribe()`.

Ejemplo:
```ts
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DestroyRef, inject } from '@angular/core';

private destroyRef = inject(DestroyRef);

this.service.stream$
  .pipe(takeUntilDestroyed(this.destroyRef))
  .subscribe(...);
```

---

## Ejercicio 3 – Error en template por dato asíncrono (undefined)

### Qué ocurre
Se intenta acceder a una propiedad en template (p. ej. `user.name`) antes de que el dato exista, provocando un error del tipo:
`Cannot read properties of undefined`.

### Causa típica
El template se renderiza antes de que llegue el dato asíncrono, o una propiedad no se inicializa correctamente.

### Cómo se soluciona
Proteger el acceso:
- Control de flujo (`@if (user) { ... }`)
- Operador seguro `?.`
- Inicialización por defecto

Ejemplos:
```html
@if (user) {
  <p>{{ user.name }}</p>
}
```

```html
<p>{{ user?.name }}</p>
```
