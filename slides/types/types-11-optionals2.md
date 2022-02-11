
## `strictNullChecks` on

Con [`strictNullChecks`](/tsconfig#strictNullChecks) _on_, cuando un valor es `null` o `undefined`, deberá probar esos valores antes de usar métodos o propiedades en ese valor.

Al igual que verificar `undefined` antes de usar una propiedad opcional, podemos usar _narrowing_ para verificar valores que podrían ser `null`:


```ts twoslash
// @errors: 2345
function doSomething(x: string | null) {
  if (x === null) {
    // do nothing
  } else {
    console.log("Hello, " + x.toUpperCase());
  }
}
```

