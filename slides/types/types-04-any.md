## `any`

TypeScript también tiene un tipo especial, `any`, que puede usar siempre que no desee que un valor en particular cause errores de verificación de tipos.

Cuando un valor es de tipo `any`, puede acceder a cualquier propiedad del mismo (que a su vez será de tipo `any`), llamarlo como una función, asignarlo a (o desde) un valor de cualquier tipo, o prácticamente cualquier otra cosa que sea sintácticamente válida:

```ts twoslash
let obj: any = { x: 0 };
// Ninguna de las siguientes líneas de código generará errores de compilación.
// El uso de `any` deshabilita toda verificación de tipo adicional, y se asume
// conoces el entorno mejor que TypeScript.
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;
```
El tipo `any` es útil cuando no desea escribir un tipo largo solo para convencer a TypeScript de que una línea de código en particular está bien.