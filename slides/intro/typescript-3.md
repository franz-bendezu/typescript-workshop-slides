---
background: https://sli.dev/foo.png
---

### Tipos

El error anterior sobre `obj.heigth` no era un error de _syntax_: es un error de usar algún tipo de valor (un _tipo_) de forma incorrecta.

Por ejemplo, este es un código JavaScript que puede ejecutar en su navegador y _registrará_ un valor:

```js
console.log(4 / []);
```

Este programa sintácticamente legal registra `Infinity`.
Sin embargo, TypeScript considera que la división de números por una matriz es una operación sin sentido y generará un error:

```ts twoslash
// @errors: 2363
console.log(4 / []);
```

El verificador de tipos de TypeScript está diseñado para permitir el paso de programas correctos y al mismo tiempo detectar tantos errores comunes como sea posible.

<!--
Sin embargo, TypeScript es un superconjunto _tipado_, lo que significa que agrega reglas sobre cómo se pueden usar diferentes tipos de valores.
(Más adelante, aprenderemos sobre las configuraciones que puede usar para configurar qué tan estrictamente TypeScript verifica su código).

Si mueve algún código de un archivo JavaScript a un archivo TypeScript, es posible que vea _errores de tipo_ dependiendo de cómo esté escrito el código.

Es posible que realmente _tuvieras_ la intención de dividir un número por un arreglo, quizás solo para ver qué sucede, pero la mayoría de las veces, sin embargo, se trata de un error de programación.

Estos pueden ser problemas legítimos con el código o que TypeScript sea demasiado conservador.
A lo largo de esta guía, demostraremos cómo agregar varias sintaxis de TypeScript para eliminar dichos errores.
-->
