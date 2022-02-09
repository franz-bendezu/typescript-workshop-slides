
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
JavaScript solo proporciona verdaderamente tipado _dinámico,  ejecutando el código para ver qué sucede.

La alternativa es usar un sistema de tipo _estático_ para hacer predicciones sobre qué código se espera _antes_ de que se ejecute.

