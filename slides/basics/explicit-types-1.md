## Tipos explícitos

Hasta ahora, no le hemos dicho a TypeScript qué son `persona` o `fecha`.
Editemos el código para decirle a TypeScript que `persona` es una `cadena` y que `fecha` debe ser un objeto `Fecha`.
También usaremos el método `toDateString()` en `date`.

```ts twoslash
function saludar(persona: string, fecha: Date) {
  console.log(`Hola ${persona}, hoy es ${fecha.toDateString()}!`);
}
```

Lo que hicimos fue agregar _anotaciones de tipo_ en `persona` y `fecha` para describir con qué tipos de valores se puede llamar a `saludar`.
Puede leer esa firma como "`saludo` toma una `persona` de tipo `cadena` y una `fecha` de tipo `Fecha`".

Con esto, TypeScript puede informarnos sobre otros casos en los que `saludar` podría haberse llamado incorrectamente.