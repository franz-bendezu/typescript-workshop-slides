## Matrices

Para especificar el tipo de una matriz como `[1, 2, 3]`, puede usar la sintaxis `number[]`; esta sintaxis funciona para cualquier tipo (p. ej., `string[]` es una matriz de cadenas, etc.).
También puede ver esto escrito como `Array<number>`, que significa lo mismo.

Aprenderemos más sobre la sintaxis `T<U>` cuando cubramos _generics_.


```ts twoslash
const arr: number[] = [1, 2, 3, 4, 3.14]
const names: string[] = [
    "Juan",
    "Pedro"
]
```
> Tenga en cuenta que `[number]` es una cosa diferente.
