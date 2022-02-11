
### Trabajar con tipos de unión


Es fácil _proporcionar_ un valor que coincida con un tipo de unión: simplemente proporcione un tipo que coincida con cualquiera de los miembros de la unión.
Si _tienes_ un valor de un tipo de unión, ¿cómo trabajas con él?

TypeScript solo permitirá una operación si es válida para _todos_ los miembros de la Union.
Por ejemplo, si tiene la Union `string | number`, no puede usar métodos que solo están disponibles en `string`:

```ts twoslash
// @errors: 2339
function printId(id: number | string) {
  console.log(id.toUpperCase());
}
```
La solución es _reducir_ la unión con código, igual que lo haría en JavaScript sin anotaciones de tipo.
_Narrowing_ ocurre cuando TypeScript puede deducir un tipo más específico para un valor basado en la estructura del código.

<!--
Another example is to use a function like `Array.isArray`:

```ts twoslash
function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    // Here: 'x' is 'string[]'
    console.log("Hello, " + x.join(" and "));
  } else {
    // Here: 'x' is 'string'
    console.log("Welcome lone traveler " + x);
  }
}
```
-->
