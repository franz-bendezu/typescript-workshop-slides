## Tipos explícitos
Por ejemplo...

```ts twoslash
// @errors: 2345
function saludar(persona: string, fecha: Date) {
  console.log(`Hola ${persona}, hoy es ${date.toDateString()}!`);
}
saludar("Maddison", Date());
```

¿Eh?
TypeScript informó un error en nuestro segundo argumento, pero ¿por qué?

Quizás sorprendentemente, llamar a `Date()` en JavaScript devuelve una `cadena`.
Por otro lado, construir una `Fecha` con `nueva Fecha()` en realidad nos da lo que esperábamos.