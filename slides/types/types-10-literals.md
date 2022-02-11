
## Tipos de literales

Además de los tipos generales `string` y `number`, podemos referirnos a cadenas y números _específicos_ en posiciones de tipo.

Una forma de pensar en esto es considerar cómo JavaScript viene con diferentes formas de declarar una variable. Tanto `var` como `let` permiten cambiar lo que se contiene dentro de la variable, y `const` no. Esto se refleja en cómo TypeScript crea tipos para literales.

```ts
let changingString = "Hello World";
changingString = "Olá Mundo";
// Because `changingString` can represent any possible string, that
// is how TypeScript describes it in the type system
changingString;
      
let changingString: string
 
const constantString = "Hello World";
// Because `constantString` can only represent 1 possible string, it
// has a literal type representation
constantString;
      
const constantString: "Hello World"
```

