
Las respuestas a estas preguntas suelen ser cosas que mantenemos en nuestras cabezas cuando escribimos JavaScript, y tenemos que esperar que tengamos todos los detalles correctos.

Digamos que 'mensaje' se definió de la siguiente manera.

```js
const mensaje = "¡Hola mundo!";
```

Como probablemente puedas adivinar, si intentamos ejecutar `message.toLowerCase()`, obtendremos la misma cadena solo en minúsculas.

¿Qué pasa con esa segunda línea de código?
Si está familiarizado con JavaScript, sabrá que esto falla con una excepción:

```txt
TypeError: el mensaje no es una función
```

Cuando ejecutamos nuestro código, la forma en que nuestro tiempo de ejecución de JavaScript elige qué hacer es averiguar el _tipo_ del valor: qué tipo de comportamientos y capacidades tiene.
Eso es parte de lo que `TypeError` está aludiendo: dice que la cadena `"Hello World!"` no se puede llamar como una función.
