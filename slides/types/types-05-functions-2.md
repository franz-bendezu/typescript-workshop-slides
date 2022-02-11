
# Funciones

Cuando un parámetro tiene una anotación de tipo, se comprobarán los argumentos de esa función:

```ts twoslash
// @errors: 2345
declare function greet(name: string): void;
// ---cut---
// Would be a runtime error if executed!
greet(42);
```

> Incluso si no tiene anotaciones de tipo en sus parámetros, TypeScript aún verificará que haya pasado la cantidad correcta de argumentos.
