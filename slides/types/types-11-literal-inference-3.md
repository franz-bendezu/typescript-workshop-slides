
## Inferencia literal


-  Puede usar `as const` para convertir todo el objeto en literales de tipo:


   ```ts twoslash
   declare function handleRequest(url: string, method: "GET" | "POST"): void;
   // ---cut---
   const req = { url: "https://example.com", method: "GET" } as const;
   handleRequest(req.url, req.method);
   ```

El sufijo `as const` actúa como `const` pero para el sistema de tipos, asegurando que a todas las propiedades se les asigne el tipo literal en lugar de una versión más general como `string` o `number`.

