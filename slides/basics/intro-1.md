# Ejemplo
Considere algunas operaciones que podríamos ejecutar en una variable llamada "mensaje".

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