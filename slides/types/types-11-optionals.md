
# `null` e `undefined`

## 
JavaScript tiene dos valores primitivos que se utilizan para señalar un valor ausente o no inicializado: `null` e `undefined`.

TypeScript tiene dos _tipos_ correspondientes con los mismos nombres. El comportamiento de estos tipos depende de si tiene activada la opción [`strictNullChecks`](/tsconfig#strictNullChecks).

## `strictNullChecks` off

Con [`strictNullChecks`](/tsconfig#strictNullChecks) _off_, los valores que podrían ser `null` o `undefined` todavía se pueden acceder normalmente, y los valores `null` e `undefined` se pueden asignar a una propiedad de cualquier tipo .

Esto es similar a cómo se comportan los lenguajes sin comprobaciones nulas (por ejemplo, C#, Java).

La falta de verificación de estos valores tiende a ser una fuente importante de errores; Siempre recomendamos que las personas activen [`strictNullChecks`](/tsconfig#strictNullChecks) si es práctico hacerlo en su base de código.

