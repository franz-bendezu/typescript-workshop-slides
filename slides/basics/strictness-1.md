## Rigor

Diferentes usuarios llegan a TypeScript buscando diferentes cosas en un verificador de tipos.
Algunas personas buscan una experiencia de suscripción más flexible que pueda ayudar a validar solo algunas partes de su programa y aún así tener herramientas decentes.

Esta es la experiencia predeterminada con TypeScript, donde los tipos son opcionales, la inferencia toma los tipos más indulgentes y no hay verificación de valores potencialmente "nulos" o "indefinidos".
Al igual que `tsc` se emite ante los errores, estos valores predeterminados se establecen para mantenerse fuera de su camino.
Si está migrando JavaScript existente, ese podría ser un primer paso deseable.


Por el contrario, muchos usuarios prefieren que TypeScript valide todo lo que pueda de inmediato, y es por eso que el lenguaje también proporciona configuraciones estrictas.
Esta configuración estricta convierte la verificación de tipo estático de un interruptor (ya sea que su código esté verificado o no) en algo más parecido a un dial.
Cuanto más suba este dial, más comprobará TypeScript por usted.
Esto puede requerir un poco de trabajo adicional, pero en términos generales se amortiza a largo plazo y permite controles más exhaustivos y herramientas más precisas.
Cuando sea posible, una nueva base de código siempre debe activar estas comprobaciones estrictas.
