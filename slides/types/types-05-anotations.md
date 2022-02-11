
## Type Annotations on Variables

Cuando declaras una variable usando `const`, `var` o `let`, puedes agregar opcionalmente una anotación de tipo para especificar explícitamente el tipo de la variable:

```ts twoslash
let myName: string = "Alice";
//        ^^^^^^^^ Type annotation
```

> TypeScript no usa declaraciones de estilo "tipos a la izquierda" como `int x = 0;`

> Las anotaciones de tipo siempre irán _después_ de lo que se está escribiendo.


En la mayoría de los casos, sin embargo, esto no es necesario.
Siempre que sea posible, TypeScript intenta _inferir_ automáticamente los tipos en su código.
Por ejemplo, el tipo de una variable se infiere en función del tipo de su inicializador:

```ts twoslash
// No type annotation needed -- 'myName' inferred as type 'string'
let myName = "Alice";
```


En su mayor parte, no necesita aprender explícitamente las reglas de inferencia.
Si está comenzando, intente usar menos anotaciones de tipo de las que cree; se sorprenderá de la cantidad de anotaciones que necesita para que TypeScript comprenda completamente lo que está sucediendo.
