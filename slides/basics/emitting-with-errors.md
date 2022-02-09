
## Emitiendo con errores

En el último ejemplo se vió que `hello.js` cambió nuevamente.
Al abrir archivo, veremos que el contenido sigue siendo básicamente el mismo que nuestro archivo de entrada.
Eso puede ser un poco sorprendente dado el hecho de que `tsc` informó un error sobre nuestro código, pero esto se basa en uno de los valores fundamentales de TypeScript: la mayor parte del tiempo, _usted_ sabrá mejor que TypeScript.

El código de verificación de tipo limita las clases de programas que puede ejecutar, por lo que hay una compensación sobre qué tipo de cosas encuentra aceptable un verificador de tipo.
La mayoría de las veces está bien, pero hay escenarios en los que esos controles se interponen.
Por ejemplo, si se migra código JavaScript a TypeScript e introduciendo errores de verificación de tipos.
Eventualmente, podrá limpiar las cosas para el verificador de tipos, ¡pero ese código JavaScript original ya estaba funcionando!
¿Por qué debería convertirlo a TypeScript en un impedimento para ejecutarlo?

Entonces TypeScript no se interpone en tu camino.
Por supuesto, con el tiempo, es posible que desee estar un poco más a la defensiva contra los errores y hacer que TypeScript actúe un poco más estrictamente.
En ese caso, puede usar la opción del compilador [`noEmitOnError`](/tsconfig#noEmitOnError).
Intente cambiar su archivo `hello.ts` y ejecutar `tsc` con esa bandera:

```sh
tsc --noEmitOnError hola.ts
```

Notarás que `hello.js` nunca se actualiza.
