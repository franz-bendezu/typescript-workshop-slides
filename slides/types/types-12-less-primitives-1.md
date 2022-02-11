
## Primitivos menos comunes


Vale la pena mencionar el resto de las primitivos en JavaScript que se representan en el sistema de tipos.
Aunque no profundizaremos aquí.

#### `bigint`

Desde ES2020 en adelante, hay una primitiva en JavaScript que se usa para números enteros muy grandes, `BigInt`:


```ts twoslash
// @target: es2020

// Creating a bigint via the BigInt function
const oneHundred: bigint = BigInt(100);

// Creating a BigInt via the literal syntax
const anotherHundred: bigint = 100n;
```

#### `symbol`

Hay una primitiva en JavaScript que se usa para crear una referencia globalmente única a través de la función `Symbol()`:


```ts twoslash
// @errors: 2367
const firstName = Symbol("name");
const secondName = Symbol("name");

if (firstName === secondName) {
  // Can't ever happen
}
```

