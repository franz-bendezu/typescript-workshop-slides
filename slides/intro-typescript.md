---
background: https://sli.dev/foo.png
---

# TypeScript: un verificador de tipo estático

---

La detección de errores en el código sin ejecutarlo se conoce como verificación estática.

Determinar qué es un error y qué no en función de los tipos de valores en los que se opera se conoce como verificación de **tipo estático**.

TypeScript verifica un programa en busca de errores antes de la ejecución, y lo hace en función de los tipos de valores, es un verificador de tipo estático. Por ejemplo, el último ejemplo anterior tiene un error debido al tipo de obj. Aquí está el error encontrado por TypeScript:

``` ts twoslash
// @errors: 2551
const obj = { width: 10, height: 15 };
const area = obj.width * obj.heigth;
```

[Playground Link](https://www.typescriptlang.org/play?#code/PTAEAEFMCdoe2gZwFygEwFYMEYBQBjOAO0QBdQ4AjAK1AF5QBvUAdwEsATUgC1WwAYANKG6Q2Ac26k+GUAF8A3AWJlQAQ2iQ19CjQB07Lt1AAqXdT2iJPBUA)

<style>
h1 {
  background-color: #3178c6;
  background-size: 100%;
  text-transform: uppercase;
  font-weight: 700;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>
