
Note que en la rama `else`, no necesitamos hacer nada especial - si `x` no era una `string[]`, entonces debe haber sido una `string`.

A veces tendrás una union donde todos los miembros tienen algo en común.
Por ejemplo, tanto las matrices como las cadenas tienen un método `slice`.
Si todos los miembros de una unión tienen una propiedad en común, puede usar esa propiedad sin restringir:

```ts twoslash
// Return type is inferred as number[] | string
function getFirstThree(x: number[] | string) {
  return x.slice(0, 3);
}
```


> Puede ser confuso que una _unión_ de tipos parezca tener la _intersección_ de las propiedades de esos tipos.

> Esto no es un accidente - el nombre _union_ viene de la teoría de tipos.

> El _union_ `number | string` se compone tomando la unión _de los valores_ de cada tipo.


> Note que dados dos conjuntos con hechos correspondientes sobre cada conjunto, solo la _intersección_ de esos hechos se aplica a la _unión_ de los conjuntos mismos.

> Por ejemplo, si tuviéramos una habitación de personas altas con sombreros y otra habitación de hispanohablantes con sombreros, después de combinar esas habitaciones, lo único que sabemos sobre _todas_ las personas es que deben estar usando un sombrero.

