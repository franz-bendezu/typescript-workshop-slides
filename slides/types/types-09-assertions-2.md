
## Aserciones de tipo
TypeScript solo permite aserciones de tipo que se convierten en una versión _más específica_ o _menos específica_ de un tipo.
Esta regla previene coacciones "imposibles" como:

```ts twoslash
// @errors: 2352
const x = "hello" as number;
```

A veces, esta regla puede ser demasiado conservadora y no permitirá coacciones más complejas que podrían ser válidas.
Si esto sucede, puede usar dos aserciones, primero para `any` (o `unknow`, que presentaremos más adelante), luego para el tipo deseado:
```ts twoslash
declare const expr: any;
type T = { a: 1; b: 2; c: 3 };
// ---cut---
const a = (expr as any) as T;
```

