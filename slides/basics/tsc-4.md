
## `tsc`, el compilador de TypeScript

¿Qué pasa si _introducimos_ un error de verificación de tipos?


Reescribamos `hola.ts`:

```ts twoslash
// @noErrors
// Esta es una función de bienvenida de propósito general de grado industrial:
function saludar(persona, fecha) {
  console.log(`Hola ${persona}, hoy es ${fecha}!`);
}
saludar("Brendan");
```

Si ejecutamos `tsc hello.ts` de nuevo, ¡observe que obtenemos un error en la línea de comando!

```txt
Expected 2 arguments, but got 1.

```

TypeScript nos dice que olvidamos pasar un argumento a la función `saludar`, y con razón.
Hasta ahora, solo hemos escrito JavaScript estándar y, sin embargo, la verificación de tipos aún pudo encontrar problemas con nuestro código.

Gracias TypeScript!

