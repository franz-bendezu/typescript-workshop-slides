
## Operador de aserción no nulo (!)
TypeScript también tiene una sintaxis especial para eliminar `null` e `undefined` de un tipo sin realizar ninguna verificación explícita.

Escribir `!` después de cualquier expresión es efectivamente una afirmación de tipo de que el valor no es `null` o `undefined`:
```ts
function liveDangerously(x?: number | null) {
  // No error
  console.log(x!.toFixed());
}
```
Al igual que otras aserciones de tipo, esto no cambia el comportamiento de tiempo de ejecución de su código, por lo que es importante usar solo `!` cuando sepa que el valor _no_ puede ser `null` o `undefined`.

