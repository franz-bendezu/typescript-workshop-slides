## Type Assertions
Sometimes you will have information about the type of a value that TypeScript can’t know about.
For example, if you’re using document.getElementById, TypeScript only knows that this will return some kind of HTMLElement, but you might know that your page will always have an HTMLCanvasElement with a given ID.

```ts
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
```
Reminder: Because type assertions are removed at compile-time, there is no runtime checking associated with a type assertion. There won’t be an exception or null generated if the type assertion is wrong.

TypeScript only allows type assertions which convert to a more specific or less specific version of a type. This rule prevents “impossible” coercions like:
```ts twoslash
// @errors: 2352
const x = "hello" as number;
```
Sometimes this rule can be too conservative and will disallow more complex coercions that might be valid. If this happens, you can use two assertions, first to any (or unknown, which we’ll introduce later), then to the desired type:
```ts
const a = (expr as any) as T;
```