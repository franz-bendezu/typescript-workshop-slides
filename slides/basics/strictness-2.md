## Rigor

TypeScript tiene varios indicadores de rigor de verificación de tipo que se pueden activar o desactivar, y todos nuestros ejemplos se escribirán con todos ellos habilitados a menos que se indique lo contrario.
El indicador [`strict`](/tsconfig#strict) en la CLI, o `"strict": true` en un [`tsconfig.json`](https://www.typescriptlang.org/docs/handbook/tsconfig -json.html) los activa todos simultáneamente, pero podemos desactivarlos individualmente.
Los dos más importantes que debe conocer son [`noImplicitAny`](/tsconfig#noImplicitAny) y [`strictNullChecks`](/tsconfig#strictNullChecks).

## `noImplicitAny`

Recuerde que, en algunos lugares, TypeScript no intenta inferir tipos por nosotros y, en cambio, recurre al tipo más indulgente: `any`.
Esto no es lo peor que puede pasar; después de todo, recurrir a `cualquiera` es solo la experiencia simple de JavaScript de todos modos.

Sin embargo, usar `cualquiera` a menudo anula el propósito de usar TypeScript en primer lugar.
Cuanto más tipeado esté su programa, más validación y herramientas obtendrá, lo que significa que se encontrará con menos errores a medida que codifica.
Activar el indicador [`noImplicitAny`](/tsconfig#noImplicitAny) generará un error en cualquier variable cuyo tipo se deduzca implícitamente como `any`.