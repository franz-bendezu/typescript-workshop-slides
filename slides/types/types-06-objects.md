
## Tipos de objetos

Aparte de los primitivos, el tipo de tipo más común que encontrará es un _tipo de objeto_.
Esto se refiere a cualquier valor de JavaScript con propiedades, ¡que son casi todas!
Para definir un tipo de objeto, simplemente enumeramos sus propiedades y sus tipos.

Por ejemplo, aquí hay una función que toma un objeto similar a un punto:

```ts
// The parameter's type annotation is an object type
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });
```
Aquí, anotamos el parámetro con un tipo con dos propiedades, `x` e `y`, que son ambas del tipo `number`.
Puede usar `,` o `;` para separar las propiedades, y el último separador es opcional de cualquier manera.

La parte tipo de cada propiedad también es opcional.
Si no especifica un tipo, se asumirá que es `any`.

