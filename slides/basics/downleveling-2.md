
Por defecto, TypeScript apunta a ES3, una versión extremadamente antigua de ECMAScript.
Podríamos haber elegido algo un poco más reciente usando la opción [`target`](/tsconfig#target).
Ejecutar con `--target es2015` cambia TypeScript para apuntar a ECMAScript 2015, lo que significa que el código debería poder ejecutarse donde sea compatible con ECMAScript 2015.
Entonces ejecutar `tsc --target es2015 hello.ts` nos da el siguiente resultado:

```js
función saludar(persona, fecha) {
  console.log(`Hola ${persona}, hoy es ${fecha.toDateString()}!`);
}
saludar("Maddison", new Date());
```

> Si bien el objetivo predeterminado es ES3, la gran mayoría de los navegadores actuales son compatibles con ES2015.
> Por lo tanto, la mayoría de los desarrolladores pueden especificar de forma segura ES2015 o superior como objetivo, a menos que la compatibilidad con ciertos navegadores antiguos sea importante.