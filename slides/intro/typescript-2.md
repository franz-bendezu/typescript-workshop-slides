---
background: https://sli.dev/foo.png
---
## Un superconjunto tipado de JavaScript

Sin embargo, ¿cómo se relaciona TypeScript con JavaScript?

### Sintaxis

TypeScript es un lenguaje que es un _superconjunto_ de JavaScript: por lo tanto, la sintaxis JS es TS válida.


Por ejemplo, este código tiene un error de _syntax_ porque le falta un `)`:

```ts twoslash
// @errors: 1005
let a = (4
```

<!-- 
La sintaxis se refiere a la forma en que escribimos un texto para formar un programa.

TypeScript no considera ningún código JavaScript como un error debido a su sintaxis.
Esto significa que puede tomar cualquier código JavaScript que funcione y ponerlo en un archivo TypeScript sin preocuparse por cómo está escrito exactamente. -->
