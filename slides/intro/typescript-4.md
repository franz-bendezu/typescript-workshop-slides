---
background: https://sli.dev/foo.png
---
### Comportamiento en tiempo de ejecución

TypeScript conserva **comportamiento en tiempo de ejecución** de JavaScript.


## Ejemplo:

Dividir por cero en JavaScript produce "Infinito" en lugar de lanzar una excepción de tiempo de ejecución.
TypeScript **nunca** cambia el comportamiento en tiempo de ejecución del código JavaScript.

<!-- 
Esto significa que si mueve el código de JavaScript a TypeScript, está **garantizado** que se ejecutará de la misma manera, incluso si TypeScript cree que el código tiene errores de tipo.

Mantener el mismo comportamiento de tiempo de ejecución que JavaScript es una promesa fundamental de TypeScript porque significa que puede cambiar fácilmente entre los dos idiomas sin preocuparse por las diferencias sutiles que podrían hacer que su programa deje de funcionar. -->
