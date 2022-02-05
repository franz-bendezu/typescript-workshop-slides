# Peculiaridades de JavaScript
 Cada idioma tiene sus propias peculiaridades: rarezas y sorpresas, y el humilde comienzo de JavaScript hace que tenga muchas de ellas.

  Por ejemplo:
  - El operador de igualdad de JavaScript (==) coacciona sus argumentos, lo que genera un comportamiento inesperado:
    ```js
    if ("" == 0) {
      // It is! But why??
    }
    if (1 < x < 3) {
      // True for *any* value of x!
    }
    ```
  - JavaScript también permite acceder a propiedades que no están presentes:

    ```js
    const obj = { width: 10, height: 15 };
    // Why is this NaN? Spelling is hard!
    const area = obj.width * obj.heigth;

    ```

<style>
h1 {
  background: linear-gradient(135deg, #fce003 0%,  #fce003 73%,  #fce00302 73%, #fce00312 100%);
  text-transform: uppercase;
  font-weight: 700;
  padding: 1rem;
  background-size: 100%;
  color: #000000;
}
</style>

