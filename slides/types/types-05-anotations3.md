
## Funciones anónimas

Las funciones anónimas son un poco diferentes de las declaraciones de funciones.
Cuando aparece una función en un lugar donde TypeScript puede determinar cómo se va a llamar, los parámetros de esa función reciben automáticamente tipos.

Aquí hay un ejemplo:

```ts twoslash
// @errors: 2551
// No hay anotaciones de tipo aquí, pero TypeScript puede detectar el error
const names = ["Alice", "Bob", "Eve"];
 
// Contextual typing for function
names.forEach(function (s) {
  console.log(s.toUppercase());
//Property 'toUppercase' does not exist on type 'string'. Did you mean 'toUpperCase'?
});

// Contextual typing also applies to arrow functions
names.forEach((s) => {
  console.log(s.toUppercase());
//Property 'toUppercase' does not exist on type 'string'. Did you mean 'toUpperCase'?
});
```
Aunque el parámetro `s` no tenía una anotación de tipo, TypeScript usó los tipos de la función `forEach`, junto con el tipo inferido de la matriz, para determinar el tipo que tendrá `s`.

