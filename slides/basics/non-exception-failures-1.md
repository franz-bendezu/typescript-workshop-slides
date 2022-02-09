## Fallos no excepcionales

Hasta ahora hemos discutido ciertas cosas como errores de tiempo de ejecución, casos en los que el tiempo de ejecución de JavaScript nos dice que piensa que algo no tiene sentido.
Esos casos surgen porque [la especificación ECMAScript](https://tc39.github.io/ecma262/) tiene instrucciones explícitas sobre cómo debe comportarse el lenguaje cuando se encuentra con algo inesperado.

Por ejemplo, la especificación dice que intentar llamar a algo que no se puede llamar debería arrojar un error.
Tal vez eso suene como "comportamiento obvio", pero podría imaginar que acceder a una propiedad que no existe en un objeto también debería arrojar un error.
En cambio, JavaScript nos da diferentes comportamiento y devuelve el valor `undefined`:

```js
const usuario = {
  nombre: "Daniel",
  edad: 26,
};
usuario.ubicación; // devuelve undefined
```
