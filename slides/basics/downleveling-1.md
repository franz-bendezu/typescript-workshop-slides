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
