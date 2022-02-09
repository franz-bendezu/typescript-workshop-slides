## `tsc`, el compilador de TypeScript



Tenga en cuenta que aquí no hay lujos; este programa "hola mundo" se ve idéntico a lo que escribirías para un programa "hola mundo" en JavaScript.
Y ahora vamos a verificar el tipo ejecutando el comando `tsc` que fue instalado para nosotros por el paquete `typescript`.

```sh
tsc hola.ts
```

¡Tada!

Espera, "tada" _qué_ exactamente?
¡Ejecutamos `tsc` y no pasó nada!
Bueno, no hubo errores de tipo, por lo que no obtuvimos ningún resultado en nuestra consola ya que no había nada que informar.

Pero verifique nuevamente: en su lugar, obtuvimos algunos resultados de _file_.
Si buscamos en nuestro directorio actual, veremos un archivo `hello.js` junto a `hello.ts`.
Esa es la salida de nuestro archivo `hello.ts` después de `tsc` _compila_ o _transforma_ en un archivo JavaScript simple.
