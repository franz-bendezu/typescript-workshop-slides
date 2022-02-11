JavaScript has three very commonly used primitives: `string`, `number`, and `boolean`. Each has a corresponding type in TypeScript. As you might expect, these are the same names you’d see if you used the JavaScript typeof operator on a value of those types:

String represents string values like "Hello, world".

Number is for numbers like 42. JavaScript does not have a special runtime value for integers, so there’s no equivalent to int or float - everything is simply number.

Boolean is for the two values true and false.

```ts twoslash
const greeting: string = "Hello, world";
const lifeAnswer: number = 42;
const doesSheLikesMe: boolean = false;
```