
## Alias para tipos

Hemos estado usando object types and union types escribiéndolos directamente en anotaciones de tipo.
Esto es conveniente, pero es común querer usar el mismo tipo más de una vez y referirse a él por un solo nombre.

Un _type alias_ es exactamente eso: un _nombre_ para cualquier _tipo_.
La sintaxis para un alias de tipo es:
```ts
type Point = {
  x: number;
  y: number;
};
 
// Exactly the same as the earlier example
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
 
printCoord({ x: 100, y: 100 });
```
Un _type alias_ es exactamente eso: un _nombre_ para cualquier _tipo_.
La sintaxis para un alias de tipo es:
```ts
type ID = number | string;
```

