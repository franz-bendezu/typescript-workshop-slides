## Type Annotations on Variables

When you declare a variable using const, var, or let, you can optionally add a type annotation to explicitly specify the type of the variable:
```ts
let myName: string = "Alice";
// No type annotation needed -- 'myName' inferred as type 'string'
let myName = "Alice";
```

## Functions
Functions are the primary means of passing data around in JavaScript. TypeScript allows you to specify the types of both the input and output values of functions.

Parameter Type Annotations
When you declare a function, you can add type annotations after each parameter to declare what types of parameters the function accepts. Parameter type annotations go after the parameter name:
```ts twoslash
// @errors: 2345
// Parameter type annotation
function greet(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}
// Would be a runtime error if executed!
greet(42);
```
