---
background: https://sli.dev/foo.png
---

### Borrado de tipos

En términos generales, una vez que el compilador de TypeScript termina de verificar su código, _borra_ los tipos para producir el código "compilado" resultante.
Esto significa que una vez que se compila su código, el código JS simple resultante no tiene información de tipo.

Esto también significa que TypeScript nunca cambia el _comportamiento_ de su programa en función de los tipos que infiere.
La conclusión es que, si bien es posible que vea errores de tipo durante la compilación, el sistema de tipo en sí no influye en cómo funciona su programa cuando se ejecuta.

Finalmente, TypeScript no proporciona ninguna biblioteca de tiempo de ejecución adicional.
Sus programas utilizarán la misma biblioteca estándar (o bibliotecas externas) que los programas de JavaScript, por lo que no hay un marco adicional específico de TypeScript para aprender.

