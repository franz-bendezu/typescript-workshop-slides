
## Propiedades opcionales

Los tipos de objetos también pueden especificar que algunas o todas sus propiedades sean _opcionales_.
Para hacer esto, agregue un `?` después del nombre de la propiedad:

```ts
function printName(obj: { first: string; last?: string }) {
  // ...
}
// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });
```
En JavaScript, si accede a una propiedad que no existe, obtendrá el valor "undefined" en lugar de un error de tiempo de ejecución.
Debido a esto, cuando _lees_ de una propiedad opcional, tendrás que buscar `undefined` antes de usarla.
```ts
function printName(obj: { first: string; last?: string }) {
  // Error - might crash if 'obj.last' wasn't provided!
  console.log(obj.last.toUpperCase());
Object is possibly 'undefined'.
  if (obj.last !== undefined) {
    // OK
    console.log(obj.last.toUpperCase());
  }
 
  // A safe alternative using modern JavaScript syntax:
  console.log(obj.last?.toUpperCase());
}
```

