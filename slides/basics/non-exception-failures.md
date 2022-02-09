## Fallos no excepcionales

Hasta ahora hemos discutido ciertas cosas como errores de tiempo de ejecución, casos en los que el tiempo de ejecución de JavaScript nos dice que piensa que algo no tiene sentido.
Esos casos surgen porque [la especificación ECMAScript](https://tc39.github.io/ecma262/) tiene instrucciones explícitas sobre cómo debe comportarse el lenguaje cuando se encuentra con algo inesperado.

Por ejemplo, la especificación dice que intentar llamar a algo que no se puede llamar debería arrojar un error.
Tal vez eso suene como "comportamiento obvio", pero podría imaginar que acceder a una propiedad que no existe en un objeto también debería arrojar un error.
En cambio, JavaScript nos da diferentes comportamiento y devuelve el valor `indefinido`:

```js
const usuario = {
  nombre: "Daniel",
  edad: 26,
};
usuario.ubicación; // devuelve indefinido
```

En última instancia, un sistema de tipo estático tiene que hacer la llamada sobre qué código debe marcarse como un error en su sistema, incluso si es JavaScript "válido" que no generará un error de inmediato.
En TypeScript, el siguiente código genera un error sobre la no definición de `ubicación`:

```ts twoslash
// @errors: 2339
const usuario = {
  nombre: "Daniel",
  edad: 26,
};
usuario.ubicación;
```

Si bien a veces eso implica una compensación en lo que puede expresar, la intención es detectar errores legítimos en nuestros programas.
Y TypeScript detecta _muchos_ errores legítimos.

Por ejemplo: errores tipográficos,

```ts twoslash
// @sin errores
const anuncio = "¡Hola mundo!";
// ¿Qué tan rápido puedes detectar los errores tipográficos?
anuncio.toLocaleLowercase();
anuncio.toLocalLowerCase();
// Probablemente quisimos escribir esto...
anuncio.toLocaleLowerCase();
```

funciones no llamadas,

```ts twoslash
// @noUnusedLocals
// @errors: 2365
function flipCoin() {
  // Pretende ser Math.random()
  return Math.random <0.5;
}
```

o errores lógicos básicos.

```ts twoslash
// @errors: 2367
const valor  = Math.random() < 0.5 ? "a" : "b";
if (valor !== "a") {
  // ...
} else if (valor === "b") {
  // Ups, inalcanzable
}
```
