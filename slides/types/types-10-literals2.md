
## Tipos de literales

Por sí mismos, los tipos literales no son muy valiosos:
```ts twoslash
// @errors: 2322
let x: "hello" = "hello";
// OK
x = "hello";
// ...
x = "howdy";
```

¡No sirve de mucho tener una variable que solo puede tener un valor!

Pero al _combinar_ literales en uniones, puede expresar un concepto mucho más útil, por ejemplo, funciones que solo aceptan un cierto conjunto de valores conocidos:

```ts twoslash
// @errors: 2345
function printText(s: string, alignment: "left" | "right" | "center") {
  // ...
}
printText("Hello, world", "left");
printText("G'day, mate", "centre");
```

