## Tipos explícitos

De todos modos, podemos corregir rápidamente el error:

```ts twoslash {4}
function saludar(persona: string, fecha: Date) {
  console.log(`Hola ${persona}, hoy es ${fecha.toDateString()}!`);
}
saludar("Maddison", new Date());
```

Tenga en cuenta que no siempre tenemos que escribir anotaciones de tipo explícitas.
En muchos casos, TypeScript puede incluso _inferir_ (o "descifrar") los tipos por nosotros, incluso si los omitimos.

```ts twoslash
let msg = "¡Hola!"; 
```

Aunque no le dijimos a TypeScript que `msg` tenía el tipo `cadena`, fue capaz de averiguarlo.
Esa es una característica, y es mejor no agregar anotaciones cuando el sistema de tipos termine infiriendo el mismo tipo de todos modos.

> Nota: la burbuja de mensaje dentro del ejemplo de código anterior. Eso es lo que su editor mostraría si hubiera pasado el cursor sobre la palabra.