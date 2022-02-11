
## Alias para tipos
Tenga en cuenta que los alias son _solo_ alias: no puede usar alias de tipo para crear "versiones" diferentes/distintas del mismo tipo.

Cuando usa el alias, es exactamente como si hubiera escrito el tipo con alias.

En otras palabras, este código puede _parecer_ no válido, pero está bien según TypeScript porque ambos tipos son alias para el mismo tipo:

```ts twoslash
declare function getInput(): string;
declare function sanitize(str: string): string;
// ---cut---
type UserInputSanitizedString = string;

function sanitizeInput(str: string): UserInputSanitizedString {
  return sanitize(str);
}

// Create a sanitized input
let userInput = sanitizeInput(getInput());

// Can still be re-assigned with a string though
userInput = "new input";
```

