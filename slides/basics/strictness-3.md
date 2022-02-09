

## `strictNullChecks`

De forma predeterminada, los valores como `null` e `undefined` se pueden asignar a cualquier otro tipo.
Esto puede facilitar la escritura de código, pero olvidarse de manejar `null` e `undefined` es la causa de innumerables errores en el mundo; algunos lo consideran un [error de mil millones de dólares] (https://www.youtube.com/watch ?v=ybrQvs4x0Ps)!
El indicador [`strictNullChecks`](/tsconfig#strictNullChecks) hace que el manejo de `null` y `undefined` sea más explícito, y nos evita preocuparnos de si _olvidamos_ manejar `null` y `undefined`.