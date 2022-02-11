## `any`

TypeScript also has a special type, `any`, that you can use whenever you don’t want a particular value to cause typechecking errors.

When a value is of type `any`, you can access any properties of it (which will in turn be of type any), call it like a function, assign it to (or from) a value of any type, or pretty much anything else that’s syntactically legal:

```ts twoslash
let obj: any = { x: 0 };
// you know the environment better than TypeScript.
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;
```
The any type is useful when you don’t want to write out a long type just to convince TypeScript that a particular line of code is okay.
When you don’t specify a type, and TypeScript can’t infer it from context, the compiler will typically default to `any`.

You usually want to avoid this, though, because any isn’t type-checked. Use the compiler flag `noImplicitAny` to flag any implicit any as an error.

