# Preguntas seleccionadas

## 1) Mutación en Signals

**¿Qué ocurre si mutas directamente un array dentro de una Signal sin usar `set()` o `update()`?**

A) Puede no dispararse la reactividad  
B) Se convierte automáticamente en immutable  
C) Angular detecta el cambio igualmente  
D) Lanza error en compilación

**Correcta:** A) Puede no dispararse la reactividad

## 2) Standalone Component

**¿Qué hace `standalone: true` en un componente?**

A) Lo hace global en toda la app  
B) Evita que tenga template  
C) Permite usarlo sin declararlo en un NgModule  
D) Lo convierte en lazy automáticamente

**Correcta:** C) Permite usarlo sin declararlo en un NgModule

## 3) Signal vs Observable (uso recomendado)

**¿En qué caso tiene más sentido usar una Signal en lugar de un Observable?**

A) Para escuchar eventos del servidor en tiempo real  
B) Para reemplazar el `HttpClient`  
C) Para hacer una petición HTTP  
D) Para manejar el estado local reactivo de un componente

**Correcta:** D) Para manejar el estado local reactivo de un componente

## 4) `track` en `@for`

**¿Cuál es el propósito del `track` en `@for`?**

A) Hacer lazy loading  
B) Detectar cambios profundos en objetos  
C) Evitar renders innecesarios identificando elementos únicos  
D) Ordenar los elementos

**Correcta:** C) Evitar renders innecesarios identificando elementos únicos

## 5) OnPush

**¿Qué problema evita OnPush como estrategia de change detection?**

A) Elimina la necesidad de Signals  
B) Reduce chequeos innecesarios del árbol de componentes  
C) Evita errores de tipado  
D) Evita completamente el renderizado

**Correcta:** B) Reduce chequeos innecesarios del árbol de componentes

## 6) Mutación incorrecta de Signal

```ts
items = signal<string[]>([]);

addItem(item: string) {
  this.items().push(item);
}
```

**¿Qué problema tiene este código?**

A) `push` no existe en arrays  
B) Se está mutando la signal sin usar `set()` o `update()`  
C) `signal` no acepta arrays  
D) Falta `async`

**Correcta:** B) Se está mutando la signal sin usar `set()` o `update()`

## 7) Lectura incorrecta de Signal en template

```ts
count = signal(0);
```

```html
<p>{{ count }}</p>
```

**¿Qué ocurre?**

A) Funciona correctamente  
B) Se muestra 0  
C) No muestra el valor porque falta llamar a `count()`  
D) Lanza error de compilación

**Correcta:** C) No muestra el valor porque falta llamar a `count()`

## 8) OnPush y mutación

```ts
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `{{ user.name }}`
})
export class ProfileComponent {
  @Input() user!: { name: string };

  changeName() {
    this.user.name = 'Nuevo';
  }
}
```

**¿Qué problema puede haber?**

A) OnPush no permite `@Input`  
B) Puede no actualizarse la vista al mutar el objeto  
C) `name` no es `string`  
D) Falta `async`

**Correcta:** B) Puede no actualizarse la vista al mutar el objeto

## 9) Observable sin async pipe

```ts
users$ = this.api.getUsers();
```

```html
@for (u of users$; track u.id) {
  <li>{{ u.name }}</li>
}
```

**¿Qué problema tiene?**

A) `users$` no puede usarse en template  
B) Falta `| async` para resolver el Observable  
C) `@for` no funciona con arrays  
D) `track` es obligatorio

**Correcta:** B) Falta `| async` para resolver el Observable

## 10) Uso incorrecto de computed

```ts
count = signal(0);

double = computed(() => {
  return this.count * 2;
});
```

**¿Qué está mal?**

A) `computed` no existe  
B) `count` debe llamarse como función `this.count()`  
C) Falta `async`  
D) `computed` solo funciona en servicios

**Correcta:** B) `count` debe llamarse como función `this.count()`
