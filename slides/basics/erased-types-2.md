
Note dos cosas aquí:

1. Nuestros parámetros `persona` y `fecha` ya no tienen anotaciones de tipo.
2. Nuestra "cadena de plantilla", esa cadena que usaba acentos graves (el carácter `` ` ``), se convirtió en cadenas simples con concatenaciones (`+`).

Más sobre ese segundo punto más adelante, pero centrémonos ahora en el primer punto.
Las anotaciones de tipo no son parte de JavaScript (o ECMAScript para ser pedante), por lo que realmente no hay navegadores u otros tiempos de ejecución que puedan ejecutar TypeScript sin modificar.
Es por eso que TypeScript necesita un compilador en primer lugar: necesita alguna forma de eliminar o transformar cualquier código específico de TypeScript para que pueda ejecutarlo.
La mayoría del código específico de TypeScript se borra y, del mismo modo, aquí nuestras anotaciones de tipo se borraron por completo.

> **Recuerde**: Las anotaciones de tipo nunca cambian el comportamiento del tiempo de ejecución de su programa.