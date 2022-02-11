
## Inferencia literal

En el ejemplo anterior, `req.method` se infiere que es `cadena`, no `"GET"`. Debido a que el código se puede evaluar entre la creación de `req` y la llamada de `handleRequest` que podría asignar una nueva cadena como `"GUESS"` a `req.method`, TypeScript considera que este código tiene un error.


Hay dos formas de evitar esto.

-   Puede cambiar la inferencia agregando una aserción de tipo en cualquier ubicación:

   ```ts twoslash
   declare function handleRequest(url: string, method: "GET" | "POST"): void;
   // ---cut---
   // Change 1:
   const req = { url: "https://example.com", method: "GET" as "GET" };
   // Change 2
   handleRequest(req.url, req.method as "GET");
   ```

   El cambio 1 significa "Pretendo que `req.method` siempre tenga el _tipo literal_ `"GET"`", evitando la posible asignación de `"GUESS"` a ese campo después.
   El cambio 2 significa "Sé por otras razones que `req.method` tiene el valor `"GET"`".

