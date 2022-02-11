
## Tipos  unión

El sistema de tipos de TypeScript le permite crear nuevos tipos a partir de los existentes utilizando una gran variedad de operadores.
Ahora que sabemos cómo escribir algunos tipos, es hora de comenzar a _combinarlos_ de maneras interesantes.

### Definición de Union Type

La primera forma de combinar tipos que puede ver es un  _union_ type.
Un tipo de unión es un tipo formado por dos o más tipos, que representan valores que pueden ser _cualquiera_ de esos tipos.
Nos referimos a cada uno de estos tipos como _miembros_ del Union Type .

Escribamos una función que pueda operar en cadenas o números:

```ts twoslash
// @errors: 2345
function printId(id: number | string) {
  console.log("Your ID is: " + id);
}
// OK
printId(101);
// OK
printId("202");
// Error
printId({ myID: 22342 });
```

