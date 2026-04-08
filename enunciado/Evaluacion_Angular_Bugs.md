# Prueba tecnica – Bug fixing (Live coding)

## Objetivo
Resolver 3 ejercicios de deteccion y correccion de bugs en Angular.

En cada ejercicio se espera:
- Reproducir el comportamiento actual.
- Identificar el bug.
- Aplicar una correccion.
- Verificar que el comportamiento final es el esperado.

---

## Ejercicio 1 – Actualizacion de listado

### Contexto
Existe un listado de usuarios y una accion para renombrar el primer elemento.

### Tarea
Conseguir que el listado se actualice correctamente al ejecutar la accion.

### Criterio de validacion
Al pulsar **"Renombrar primero"**, el nombre mostrado en pantalla debe reflejar el cambio de forma consistente.

---

## Ejercicio 2 – Gestion de suscripciones

### Contexto
Hay un contador de ticks y un componente que se monta y desmonta con **"Ocultar/Mostrar"**.

### Tarea
Evitar acumulaciones al alternar entre mostrar y ocultar el componente.

### Criterio de validacion
Tras ocultar y mostrar varias veces, el contador debe mantener un ritmo estable.

---

## Ejercicio 3 – Renderizado con datos asincronos

### Contexto
La plantilla muestra datos de perfil que se cargan de forma asincrona.

### Tarea
Asegurar que la vista renderiza correctamente mientras los datos no estan disponibles.

### Criterio de validacion
La pantalla no debe lanzar errores en runtime durante la carga inicial.

---

## Entregable esperado
- Codigo corregido en los 3 ejercicios.
- Explicacion breve de los cambios realizados en cada uno.

## Tiempo orientativo
30-45 minutos.
