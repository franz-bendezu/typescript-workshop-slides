## `tsc`, el compilador de TypeScript


Y si revisamos el contenido, veremos qué escupe TypeScript después de procesar un archivo `.ts`:

```js
// Saluda al mundo.
consola.log("¡Hola mundo!");
```

En este caso, TypeScript tenía muy poco que transformar, por lo que se ve idéntico a lo que escribimos.
El compilador intenta emitir un código limpio y legible que se parece a algo que escribiría una persona.
Si bien eso no siempre es tan fácil, TypeScript sangra constantemente, tiene en cuenta cuándo nuestro código se extiende a través de diferentes líneas de código e intenta mantener los comentarios.
