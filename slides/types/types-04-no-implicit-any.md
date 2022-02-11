
## `noImplicitAny`

Cuando no especifica un tipo, y TypeScript no puede deducirlo del contexto, el compilador normalmente utilizará por defecto `any`.

Sin embargo, por lo general querrás evitar esto, porque `cualquiera` no tiene verificación de tipo.
Use el indicador del compilador [`noImplicitAny`](/tsconfig#noImplicitAny) para marcar cualquier `any` implícito como un error.



```json
{
  "compilerOptions": {
    ...
    "noImplicitAny": true,
    ...
  }
}
```
---------------


-------------

```ts twoslash
// @errors: 7006
function fn(s) {
  console.log(s.subtr(3));
}
```

