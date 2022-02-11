## Arrays

To specify the type of an array like `[1, 2, 3]`, you can use the syntax `number[]`; this syntax works for any type (e.g. `string[]` is an array of strings, and so on).
You may also see this written as `Array<number>`, which means the same thing.

```ts twoslash
const arr: number[] = [1, 2, 3, 4, 3.14]
const names: string[] = [
    "Juan",
    "Pedro"
]
```