
# Funciones

Las funciones son el medio principal para pasar datos en JavaScript.
TypeScript le permite especificar los tipos de los valores de entrada y salida de las funciones.


## Anotaciones de tipo de parámetro

Cuando declara una función, puede agregar anotaciones de tipo después de cada parámetro para declarar qué tipos de parámetros acepta la función.
Las anotaciones de tipo de parámetro van después del nombre del parámetro:

```ts twoslash
// @errors: 2345
// Parameter type annotation
function greet(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}
// Would be a runtime error if executed!
greet(42);
```

