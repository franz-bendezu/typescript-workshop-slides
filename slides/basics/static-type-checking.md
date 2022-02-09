
## Comprobación estática de tipos

_A la mayoría de las personas_ no les gusta recibir ningún tipo de error al ejecutar su código, ¡esos se consideran errores!
Y cuando escribimos código nuevo, hacemos todo lo posible para evitar la introducción de nuevos errores.


Idealmente, podríamos tener una herramienta que nos ayude a encontrar estos errores _antes_ de que se ejecute nuestro código.
Eso es lo que hace un verificador de tipo estático como TypeScript.
_Sistemas de tipos estáticos_ describen las formas y comportamientos de cuáles serán nuestros valores cuando ejecutemos nuestros programas.
Un verificador de tipos como TypeScript usa esa información y nos dice cuándo las cosas pueden salirse de los rieles.

```ts twoslash
// @errors: 2349
const mensaje = "¡hola!";
mensaje();
```

Ejecutar esa última muestra con TypeScript nos dará un mensaje de error antes de ejecutar el código en primer lugar.

<!--
Piense en ese `TypeError` que obtuvimos antes al intentar llamar a una `cadena` como una función.
_A la mayoría de las personas_ no les gusta recibir ningún tipo de error al ejecutar su código, ¡esos se consideran errores!
Y cuando escribimos código nuevo, hacemos todo lo posible para evitar la introducción de nuevos errores.

Si agregamos solo un poco de código, guardamos nuestro archivo, volvemos a ejecutar el código e inmediatamente vemos el error, podríamos aislar el problema rápidamente; pero no siempre es así.
¡Es posible que no hayamos probado la función lo suficientemente a fondo, por lo que es posible que nunca nos encontremos con un error potencial que se produzca!
O si tuviéramos la suerte de presenciar el error, podríamos haber terminado haciendo grandes refactorizaciones y agregando una gran cantidad de código diferente que nos vemos obligados a revisar.
-->
