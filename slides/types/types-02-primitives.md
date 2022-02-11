## Los Primitivos: `string`, `number`, and `boolean`

JavaScript tiene tres [ primitivos ] muy comúnmente utilizadas (https://developer.mozilla.org/en-US/docs/Glossary/Primitive): `string` , `number` y `boolean` .
Cada uno tiene un tipo correspondiente en TypeScript.
Como era de esperar, estos son los mismos nombres que vería si usara el operador `typeof` de JavaScript en un valor de esos tipos:

-  `string` representa valores de cadena como `"Hola, mundo"`
-  `number` es para números como `42` . JavaScript no tiene un valor de tiempo de ejecución especial para números enteros, por lo que no hay un equivalente a `int` o `float` - todo es simplemente `number`
-  `boolean` es para los dos valores `true` y `false`


```ts twoslash
const greeting: string = "Hola, mundo";
const lifeAnswer: number = 42;
const doesSheLikesMe: boolean = false;
```