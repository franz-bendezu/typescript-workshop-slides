

# Conceptos básicos

Todos y cada uno de los valores en JavaScript tienen un conjunto de comportamientos que puede observar al ejecutar diferentes operaciones.
Eso suena abstracto, pero como un ejemplo rápido, considere algunas operaciones que podríamos ejecutar en una variable llamada "mensaje".

```js
// Accediendo a la propiedad 'toLowerCase'
// en 'mensaje' y luego llamándolo
mensaje.toLowerCase();
// Llamando a 'mensaje'
mensaje();
```

Si desglosamos esto, la primera línea de código ejecutable accede a una propiedad llamada `toLowerCase` y luego la llama el segundo intenta llamar a `message` directamente.

Pero asumiendo que no sabemos el valor de `mensaje` - y eso es bastante común - no podemos decir con certeza qué resultados obtendremos al intentar ejecutar este código.
El comportamiento de cada operación depende enteramente de qué valor teníamos en primer lugar.

- ¿Es "mensaje" invocable?
- ¿Tiene una propiedad llamada `toLowerCase`?
- Si es así, ¿se puede llamar a `toLowerCase`?
- Si ambos valores son invocables, ¿qué devuelven?

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

Sería genial si pudiéramos evitar errores como este.

Cuando ejecutamos nuestro código, la forma en que nuestro tiempo de ejecución de JavaScript elige qué hacer es averiguar el _tipo_ del valor: qué tipo de comportamientos y capacidades tiene.
Eso es parte de lo que `TypeError` está aludiendo: dice que la cadena `"Hello World!"` no se puede llamar como una función.

Para algunos valores, como las primitivas `cadena` y `número`, podemos identificar su tipo en tiempo de ejecución usando el operador `typeof`.
Pero para otras cosas como funciones, no existe un mecanismo de tiempo de ejecución correspondiente para identificar sus tipos.
Por ejemplo, considere esta función:

```js
función fn(x) {
  volver x.flip();
}
```

Podemos _observar_ al leer el código que esta función solo funcionará si se le da un objeto con una propiedad 'flip' invocable, pero JavaScript no muestra esta información de una manera que podamos verificar mientras se ejecuta el código.
La única forma en JavaScript puro de saber qué hace `fn` con un valor particular es llamarlo y ver qué sucede.
Este tipo de comportamiento hace que sea difícil predecir qué hará el código antes de que se ejecute, lo que significa que es más difícil saber qué hará el código mientras lo escribes.

Visto de esta manera, un _tipo_ es el concepto que describe qué valores se pueden pasar a `fn` y cuáles fallarán.
JavaScript solo proporciona verdaderamente escritura _dinámica_: ejecutar el código para ver qué sucede.

La alternativa es usar un sistema de tipo _estático_ para hacer predicciones sobre qué código se espera _antes_ de que se ejecute.

## Comprobación estática de tipos

Piense en ese `TypeError` que obtuvimos antes al intentar llamar a una `cadena` como una función.
_A la mayoría de las personas_ no les gusta recibir ningún tipo de error al ejecutar su código, ¡esos se consideran errores!
Y cuando escribimos código nuevo, hacemos todo lo posible para evitar la introducción de nuevos errores.

Si agregamos solo un poco de código, guardamos nuestro archivo, volvemos a ejecutar el código e inmediatamente vemos el error, podríamos aislar el problema rápidamente; pero no siempre es así.
¡Es posible que no hayamos probado la función lo suficientemente a fondo, por lo que es posible que nunca nos encontremos con un error potencial que se produzca!
O si tuviéramos la suerte de presenciar el error, podríamos haber terminado haciendo grandes refactorizaciones y agregando una gran cantidad de código diferente que nos vemos obligados a revisar.

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

## Fallos no excepcionales

Hasta ahora hemos discutido ciertas cosas como errores de tiempo de ejecución, casos en los que el tiempo de ejecución de JavaScript nos dice que piensa que algo no tiene sentido.
Esos casos surgen porque [la especificación ECMAScript](https://tc39.github.io/ecma262/) tiene instrucciones explícitas sobre cómo debe comportarse el lenguaje cuando se encuentra con algo inesperado.

Por ejemplo, la especificación dice que intentar llamar a algo que no se puede llamar debería arrojar un error.
Tal vez eso suene como "comportamiento obvio", pero podría imaginar que acceder a una propiedad que no existe en un objeto también debería arrojar un error.
En cambio, JavaScript nos da diferentes comportamiento y devuelve el valor `indefinido`:

```js
usuario constante = {
  nombre: "Daniel",
  edad: 26,
};
usuario.ubicación; // devuelve indefinido
```

En última instancia, un sistema de tipo estático tiene que hacer la llamada sobre qué código debe marcarse como un error en su sistema, incluso si es JavaScript "válido" que no generará un error de inmediato.
En TypeScript, el siguiente código genera un error sobre la no definición de `ubicación`:

```ts twoslash
// @errors: 2339
usuario constante = {
  nombre: "Daniel",
  edad: 26,
};
usuario.ubicación;
```

Si bien a veces eso implica una compensación en lo que puede expresar, la intención es detectar errores legítimos en nuestros programas.
Y TypeScript detecta _muchos_ errores legítimos.

Por ejemplo: errores tipográficos,

```ts twoslash
// @noErrors
const anuncio = "¡Hola mundo!";
// ¿Qué tan rápido puedes detectar los errores tipográficos?
anuncio.toLocaleLowercase();
anuncio.toLocalLowerCase();
// Probablemente quisimos escribir esto...
anuncio.toLocaleLowerCase();
```

funciones no llamadas,

```ts twoslash
// @noUnusedLocals
// @errors: 2365
función flipCoin() {
  // Pretende ser Math.random()
  devuelve Math.random <0.5;
}
```

o errores lógicos básicos.

```ts twoslash
// @errors: 2367
valor constante = Math.random() < 0.5 ? "a" : "b";
si (valor !== "a") {
  // ...
} más si (valor === "b") {
  // Ups, inalcanzable
}
```

## Tipos de herramientas

TypeScript puede detectar errores cuando cometemos errores en nuestro código.
Eso es genial, pero TypeScript puede _también_ evitar que cometamos esos errores en primer lugar.

El verificador de tipos tiene información para verificar cosas como si estamos accediendo a las propiedades correctas en variables y otras propiedades.
Una vez que tiene esa información, también puede comenzar a _sugerir_ qué propiedades podría querer usar.

Eso significa que TypeScript también se puede aprovechar para editar código, y el verificador de tipo central puede proporcionar mensajes de error y completar el código a medida que escribe en el editor.
Eso es parte de lo que la gente suele referirse cuando habla de herramientas en TypeScript.

<!-- más bonito-ignorar -->
```ts twoslash
// @noErrors
// @esModuleInterop
importar expreso de "expreso";
const aplicación = express();
app.get("/", función (requerido, res) {
  res.sen
// ^|
});
aplicación.escucha(3000);
```

TypeScript se toma muy en serio las herramientas, y eso va más allá de las terminaciones y los errores mientras escribe.
Un editor que admita TypeScript puede ofrecer "soluciones rápidas" para corregir errores automáticamente, refactorizaciones para reorganizar fácilmente el código y funciones de navegación útiles para saltar a las definiciones de una variable o encontrar todas las referencias a una variable determinada.
Todo esto se basa en el verificador de tipos y es totalmente multiplataforma, por lo que es probable que [su editor favorito tenga compatibilidad con TypeScript disponible](https://github.com/Microsoft/TypeScript/wiki/TypeScript-Editor -Apoyo).

## `tsc`, el compilador de TypeScript

Hemos estado hablando sobre la verificación de tipos, pero aún no hemos usado nuestro type-_checker_.
Conozcamos a nuestro nuevo amigo `tsc`, el compilador de TypeScript.
Primero tendremos que tomarlo a través de npm.

```sh
npm install -g mecanografiado
```

> Esto instala el Compilador de TypeScript `tsc` globalmente.
> Puedes usar `npx` o herramientas similares si prefieres ejecutar `tsc` desde un paquete `node_modules` local.
Ahora pasemos a una carpeta vacía e intentemos escribir nuestro primer programa TypeScript: `hello.ts`:

```ts twoslash
// Saluda al mundo.
consola.log("¡Hola mundo!");
```

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
Y si revisamos el contenido, veremos qué escupe TypeScript después de procesar un archivo `.ts`:

```js
// Saluda al mundo.
consola.log("¡Hola mundo!");
```

En este caso, TypeScript tenía muy poco que transformar, por lo que se ve idéntico a lo que escribimos.
El compilador intenta emitir un código limpio y legible que se parece a algo que escribiría una persona.
Si bien eso no siempre es tan fácil, TypeScript sangra constantemente, tiene en cuenta cuándo nuestro código se extiende a través de diferentes líneas de código e intenta mantener los comentarios.

¿Qué pasa si _introdujimos_ un error de verificación de tipos?
Reescribamos `hola.ts`:

```ts twoslash
// @noErrors
// Esta es una función de bienvenida de propósito general de grado industrial:
función saludar(persona, fecha) {
  console.log(`Hola ${persona}, hoy es ${fecha}!`);
}
saludar("Brendan");
```

Si ejecutamos `tsc hello.ts` de nuevo, ¡observe que obtenemos un error en la línea de comando!

```txt
Esperaba 2 argumentos, pero obtuve 1.

```

TypeScript nos dice que olvidamos pasar un argumento a la función `saludar`, y con razón.
Hasta ahora, solo hemos escrito JavaScript estándar y, sin embargo, la verificación de tipos aún pudo encontrar problemas con nuestro código.
Gracias mecanografiado!

## Emitiendo con errores

Una cosa que quizás no haya notado en el último ejemplo fue que nuestro archivo `hello.js` cambió nuevamente.
Si abrimos ese archivo, veremos que el contenido sigue siendo básicamente el mismo que nuestro archivo de entrada.
Eso puede ser un poco sorprendente dado el hecho de que `tsc` informó un error sobre nuestro código, pero esto se basa en uno de los valores fundamentales de TypeScript: la mayor parte del tiempo, _usted_ sabrá mejor que TypeScript.

Para reiterar lo anterior, el código de verificación de tipo limita los tipos de programas que puede ejecutar, por lo que hay una compensación sobre qué tipo de cosas encuentra aceptable un verificador de tipo.
La mayoría de las veces está bien, pero hay escenarios en los que esos controles se interponen.
Por ejemplo, imagínese migrando código JavaScript a TypeScript e introduciendo errores de verificación de tipos.
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

## Tipos explícitos

Hasta ahora, no le hemos dicho a TypeScript qué son `persona` o `fecha`.
Editemos el código para decirle a TypeScript que `persona` es una `cadena` y que `fecha` debe ser un objeto `Fecha`.
También usaremos el método `toDateString()` en `date`.

```ts twoslash
función saludar(persona: string, fecha: Date) {
  console.log(`Hola ${persona}, hoy es ${fecha.toDateString()}!`);
}
```

Lo que hicimos fue agregar _anotaciones de tipo_ en `persona` y `fecha` para describir con qué tipos de valores se puede llamar a `saludar`.
Puede leer esa firma como "`saludo` toma una `persona` de tipo `cadena` y una `fecha` de tipo `Fecha`".

Con esto, TypeScript puede informarnos sobre otros casos en los que `saludar` podría haberse llamado incorrectamente.
Por ejemplo...

```ts twoslash
// @errors: 2345
función saludar(persona: string, fecha: Date) {
  console.log(`Hola ${persona}, hoy es ${fecha.toDateString()}!`);
}
saludar("Maddison", Date());
```

¿Eh?
TypeScript informó un error en nuestro segundo argumento, pero ¿por qué?

Quizás sorprendentemente, llamar a `Date()` en JavaScript devuelve una `cadena`.
Por otro lado, construir una `Fecha` con `new Date()` en realidad nos da lo que esperábamos.

De todos modos, podemos corregir rápidamente el error:

```ts twoslash {4}
función saludar(persona: string, fecha: Date) {
  console.log(`Hola ${persona}, hoy es ${fecha.toDateString()}!`);
}
saludar("Maddison", new Date());
```

Tenga en cuenta que no siempre tenemos que escribir anotaciones de tipo explícitas.
En muchos casos, TypeScript puede incluso _inferir_ (o "descifrar") los tipos por nosotros, incluso si los omitimos.

```ts twoslash
let msg = "¡Hola!";
// ^?
```

Aunque no le dijimos a TypeScript que `msg` tenía el tipo `cadena`, fue capaz de averiguarlo.
Esa es una característica, y es mejor no agregar anotaciones cuando el sistema de tipos termine infiriendo el mismo tipo de todos modos.

> Nota: la burbuja de mensaje dentro del ejemplo de código anterior. Eso es lo que su editor mostraría si hubiera pasado el cursor sobre la palabra.
## Tipos borrados

Echemos un vistazo a lo que sucede cuando compilamos la función anterior `saludar` con `tsc` para generar JavaScript:

```ts twoslash
// @showEmit
// @objetivo: es5
función saludar(persona: string, fecha: Date) {
  console.log(`Hola ${persona}, hoy es ${fecha.toDateString()}!`);
}
saludar("Maddison", new Date());
```

Note dos cosas aquí:

1. Nuestros parámetros `persona` y `fecha` ya no tienen anotaciones de tipo.
2. Nuestra "cadena de plantilla", esa cadena que usaba acentos graves (el carácter `` ` ``), se convirtió en cadenas simples con concatenaciones (`+`).

Más sobre ese segundo punto más adelante, pero centrémonos ahora en el primer punto.
Las anotaciones de tipo no son parte de JavaScript (o ECMAScript para ser pedante), por lo que realmente no hay navegadores u otros tiempos de ejecución que puedan ejecutar TypeScript sin modificar.
Es por eso que TypeScript necesita un compilador en primer lugar: necesita alguna forma de eliminar o transformar cualquier código específico de TypeScript para que pueda ejecutarlo.
La mayoría del código específico de TypeScript se borra y, del mismo modo, aquí nuestras anotaciones de tipo se borraron por completo.

> **Recuerde**: Las anotaciones de tipo nunca cambian el comportamiento del tiempo de ejecución de su programa.


## Bajar de nivel

Otra diferencia con lo anterior fue que nuestra cadena de plantilla se reescribió a partir de

```js
`Hola ${persona}, hoy es ${fecha.toDateString()}!`;
```

a

```js
"Hola " + persona + ", hoy es " + fecha.toDateString() + "!";
```

¿Por qué pasó esto?

Las cadenas de plantilla son una característica de una versión de ECMAScript llamada ECMAScript 2015 (también conocido como ECMAScript 6, ES2015, ES6, etc. - _no preguntes_).
TypeScript tiene la capacidad de reescribir código de versiones más nuevas de ECMAScript a versiones más antiguas, como ECMAScript 3 o ECMAScript 5 (también conocidas como ES3 y ES5).
Este proceso de pasar de una versión más nueva o "superior" de ECMAScript a una más antigua o "inferior" a veces se denomina _reducción de nivel_.

Por defecto, TypeScript apunta a ES3, una versión extremadamente antigua de ECMAScript.
Podríamos haber elegido algo un poco más reciente usando la opción [`target`](/tsconfig#target).
Ejecutar con `--target es2015` cambia TypeScript para apuntar a ECMAScript 2015, lo que significa que el código debería poder ejecutarse donde sea compatible con ECMAScript 2015.
Entonces ejecutar `tsc --target es2015 hello.ts` nos da el siguiente resultado:

```js
función saludar(persona, fecha) {
  console.log(`Hola ${persona}, hoy es ${fecha.toDateString()}!`);
}
saludar("Maddison", new Date());
```

> Si bien el objetivo predeterminado es ES3, la gran mayoría de los navegadores actuales son compatibles con ES2015.
> Por lo tanto, la mayoría de los desarrolladores pueden especificar de forma segura ES2015 o superior como objetivo, a menos que la compatibilidad con ciertos navegadores antiguos sea importante.
## Rigor

Diferentes usuarios llegan a TypeScript buscando diferentes cosas en un verificador de tipos.
Algunas personas buscan una experiencia de suscripción más flexible que pueda ayudar a validar solo algunas partes de su programa y aún así tener herramientas decentes.
Esta es la experiencia predeterminada con TypeScript, donde los tipos son opcionales, la inferencia toma los tipos más indulgentes y no hay verificación de valores potencialmente "nulos" o "indefinidos".
Al igual que `tsc` se emite ante los errores, estos valores predeterminados se establecen para mantenerse fuera de su camino.
Si está migrando JavaScript existente, ese podría ser un primer paso deseable.

Por el contrario, muchos usuarios prefieren que TypeScript valide todo lo que pueda de inmediato, y es por eso que el lenguaje también proporciona configuraciones estrictas.
Esta configuración estricta convierte la verificación de tipo estático de un interruptor (ya sea que su código esté verificado o no) en algo más parecido a un dial.
Cuanto más suba este dial, más comprobará TypeScript por usted.
Esto puede requerir un poco de trabajo adicional, pero en términos generales se amortiza a largo plazo y permite controles más exhaustivos y herramientas más precisas.
Cuando sea posible, una nueva base de código siempre debe activar estas comprobaciones estrictas.

TypeScript tiene varios indicadores de rigor de verificación de tipo que se pueden activar o desactivar, y todos nuestros ejemplos se escribirán con todos ellos habilitados a menos que se indique lo contrario.
El indicador [`strict`](/tsconfig#strict) en la CLI, o `"strict": true` en un [`tsconfig.json`](https://www.typescriptlang.org/docs/handbook/tsconfig -json.html) los activa todos simultáneamente, pero podemos desactivarlos individualmente.
Los dos más importantes que debe conocer son [`noImplicitAny`](/tsconfig#noImplicitAny) y [`strictNullChecks`](/tsconfig#strictNullChecks).

## `noImplicitAny`

Recuerde que, en algunos lugares, TypeScript no intenta inferir tipos por nosotros y, en cambio, recurre al tipo más indulgente: `cualquiera`.
Esto no es lo peor que puede pasar; después de todo, recurrir a `cualquiera` es solo la experiencia simple de JavaScript de todos modos.

Sin embargo, usar `cualquiera` a menudo anula el propósito de usar TypeScript en primer lugar.
Cuanto más tipeado esté su programa, más validación y herramientas obtendrá, lo que significa que se encontrará con menos errores a medida que codifica.
Activar el indicador [`noImplicitAny`](/tsconfig#noImplicitAny) generará un error en cualquier variable cuyo tipo se deduzca implícitamente como `cualquiera`.

## `Comprobaciones nulas estrictas`

De forma predeterminada, los valores como `null` e `undefined` se pueden asignar a cualquier otro tipo.
Esto puede facilitar la escritura de código, pero olvidarse de manejar `null` e `undefined` es la causa de innumerables errores en el mundo; algunos lo consideran un [error de mil millones de dólares] (https://www.youtube.com/watch ?v=ybrQvs4x0Ps)!
El indicador [`strictNullChecks`](/tsconfig#strictNullChecks) hace que el manejo de `null` y `undefined` sea más explícito, y nos evita preocuparnos de si _olvidamos_ manejar `null` y `undefined`.