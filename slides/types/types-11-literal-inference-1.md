## Inferencia literal

Cuando inicializa una variable con un objeto, TypeScript asume que las propiedades de ese objeto pueden cambiar los valores más adelante.
Por ejemplo, si escribiste un código como este:

```ts twoslash
declare const someCondition: boolean;
// ---cut---
const obj = { counter: 0 };
if (someCondition) {
  obj.counter = 1;
}
```

TypeScript no asume que la asignación de `1` a un campo que anteriormente tenía `0` es un error.
Otra forma de decir esto es que `obj.counter` debe tener el tipo `number`, no `0`, porque los tipos se usan para determinar el comportamiento tanto de _lectura_ como de _escritura_.

Lo mismo se aplica a las cadenas:


```ts twoslash
// @errors: 2345
declare function handleRequest(url: string, method: "GET" | "POST"): void;
// ---cut---
const req = { url: "https://example.com", method: "GET" };
handleRequest(req.url, req.method);
```
