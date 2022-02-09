## `tsc`, el compilador de TypeScript

Hemos estado hablando sobre la verificación de tipos, pero aún no hemos usado nuestro type-_checker_.
Conozcamos a nuestro nuevo amigo `tsc`, el compilador de TypeScript.
Primero tendremos que tomarlo a través de npm.

```sh
npm install -g typescript
```

> Esto instala el Compilador de TypeScript `tsc` globalmente.
> Puedes usar `npx` o herramientas similares si prefieres ejecutar `tsc` desde un paquete `node_modules` local.
Ahora pasemos a una carpeta vacía e intentemos escribir nuestro primer programa TypeScript: `hello.ts`:

```ts twoslash
// Saluda al mundo.
console.log("¡Hola mundo!");
```

Tenga en cuenta que aquí no hay lujos; este programa "hola mundo" se ve idéntico a lo que escribirías para un programa "hola mundo" en JavaScript.