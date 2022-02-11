
## Aserciones de tipo
A veces tendrá información sobre el tipo de un valor que TypeScript no puede conocer.

Por ejemplo, si está utilizando `document.getElementById`, TypeScript solo sabe que esto devolverá _algún_ tipo de `HTMLElement`, pero es posible que sepa que su página siempre tendrá un `HTMLCanvasElement` con una ID dada.

En esta situación, puedes usar una _aserción de tipo_ para especificar un tipo más específico:

```ts
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
```
Al igual que una anotación de tipo, el compilador elimina las aserciones de tipo y no afectarán el comportamiento de tiempo de ejecución de su código.

También puede usar la sintaxis de paréntesis angular (excepto si el código está en un archivo `.tsx`), que es equivalente:
```ts twoslash
const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");
```

> Recordatorio: debido a que las aserciones de tipo se eliminan en tiempo de compilación, no hay una verificación de tiempo de ejecución asociada con una aserción de tipo.

> No se generará una excepción o `null` si la aserción de tipo es incorrecta.

