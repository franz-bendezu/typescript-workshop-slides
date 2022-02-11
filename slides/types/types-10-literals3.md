
## Tipos de literales

Los tipos literales numéricos funcionan de la misma manera:


```ts twoslash
function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1;
}
```

Por supuesto, puede combinarlos con tipos no literales:


```ts twoslash
// @errors: 2345
interface Options {
  width: number;
}
function configure(x: Options | "auto") {
  // ...
}
configure({ width: 100 });
configure("auto");
configure("automatic");
```

Hay un tipo más de tipo literal: los literales booleanos.
Solo hay dos tipos de literales booleanos y, como puede suponer, son los tipos `true` y `falso`.

El tipo `boolean` en sí mismo es en realidad solo un alias para la unión `true | false`.

