
## Anotaciones para el retorno de tipos

También puede agregar anotaciones de tipo de retorno.

Las anotaciones de tipo de devolución aparecen después de la lista de parámetros:


```ts
function getFavoriteNumber(): number {
  return 26;
}
```

Al igual que las anotaciones de tipo de variable, normalmente no necesita una anotación de tipo de retorno porque TypeScript inferirá el tipo de retorno de la función en función de sus declaraciones `return`.
La anotación de tipo en el ejemplo anterior no cambia nada.
Algunas bases de código especificarán explícitamente un tipo de devolución con fines de documentación, para evitar cambios accidentales o simplemente por preferencia personal.

