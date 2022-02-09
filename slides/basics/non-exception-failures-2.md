## Fallos no excepcionales

En última instancia, un sistema de tipo estático tiene que hacer la llamada sobre qué código debe marcarse como un error en su sistema, incluso si es JavaScript "válido" que no generará un error de inmediato.
En TypeScript, el siguiente código genera un error sobre la no definición de `ubicación`:

```ts twoslash
// @errors: 2339
const usuario = {
  nombre: "Daniel",
  edad: 26,
};
usuario.ubicación;
```

Si bien a veces eso implica una compensación en lo que puede expresar, la intención es detectar errores legítimos en nuestros programas.
Y TypeScript detecta _muchos_ errores legítimos.

