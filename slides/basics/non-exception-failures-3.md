---
---

# Fallos no excepcionales

<div class=" two-columns w-full h-full grid grid-cols-2" >
<div class="p-3 col-left">

  ### Errores tipográficos

  <br>

  ```ts twoslash
  // @noErrors
  const anuncio = "¡Hola mundo!";
  // ¿Qué tan rápido puedes detectar los errores tipográficos?
  anuncio.toLocaleLowercase();
  anuncio.toLocalLowerCase();
  // Probablemente quisimos escribir esto...
  anuncio.toLocaleLowerCase();
  ```

  ### Funciones no llamadas
  <br>

  ```ts twoslash
  // @noUnusedLocals
  // @errors: 2365
  function flipCoin() {
    // Pretende ser Math.random()
    return Math.random < 0.5;
  }
  ```

  </div>


<div class="p-3 col-right">

  ### Errores lógicos básicos.

  ```ts twoslash
  // @errors: 2367
  const valor = Math.random() < 0.5 ? "a" : "b";
  if (valor !== "a") {
    // ...
  } else if (valor === "b") {
    // Ups, inalcanzable
  }
  ```
</div>
  
</div>

