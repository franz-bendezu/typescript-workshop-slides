When a parameter has a type annotation, arguments to that function will be checked:

Even if you don’t have type annotations on your parameters, TypeScript will still check that you passed the right number of arguments.

```ts
function getFavoriteNumber(): number {
  return 26;
}
```
Much like variable type annotations, you usually don’t need a return type annotation because TypeScript will infer the function’s return type based on its return statements. The type annotation in the above example doesn’t change anything. Some codebases will explicitly specify a return type for documentation purposes, to prevent accidental changes, or just for personal preference.
