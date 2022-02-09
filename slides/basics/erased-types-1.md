## Borrado de tipos

Echemos un vistazo a lo que sucede cuando compilamos la función anterior `saludar` con `tsc` para generar JavaScript:

```ts twoslash
// @showEmit
// @target: es5
function  saludar(persona: string, fecha: Date) {
  console.log(`Hola ${persona}, hoy es ${fecha.toDateString()}!`);
}
saludar("Maddison", new Date());
```
