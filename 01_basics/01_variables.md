# Understanding Variable Types in JavaScript

In JavaScript, there are three main ways to declare variables: `var`, `let`, and `const`. Each has its own characteristics and use cases. Here's a breakdown of each:

## 1. `var`
- **Scope**: `var` is function-scoped or globally-scoped. This means that if you declare a variable with `var` inside a function, it is only accessible within that function. If declared outside any function, it is available globally.
- **Hoisting**: Variables declared with `var` are hoisted to the top of their scope. This means you can use them before they are declared, but they will be `undefined` until the declaration is reached.
- **Re-declaration**: You can re-declare a variable using `var` within the same scope without any error.

**Example**:
```javascript
function example() {
    console.log(x); // undefined
    var x = 5;
    console.log(x); // 5
}
example();
```

## 2. `let`
- **Scope**: `let` is block-scoped, meaning it is only accessible within the nearest enclosing block (e.g., within a pair of curly braces `{}`).
- **Hoisting**: Like `var`, `let` is also hoisted, but it cannot be accessed before its declaration (this is known as the "temporal dead zone").
- **Re-declaration**: You cannot re-declare a variable using `let` in the same scope.

**Example**:
```javascript
if (true) {
    let y = 10;
    console.log(y); // 10
}
console.log(y); // ReferenceError: y is not defined
```

## 3. `const`
- **Scope**: `const` is also block-scoped, similar to `let`.
- **Hoisting**: `const` is hoisted but cannot be accessed before its declaration (this is known as the "temporal dead zone").
- **Re-declaration**: You cannot re-declare a variable using `const` in the same scope.
- **Immutability**: Variables declared with `const` must be initialized at the time of declaration and cannot be reassigned. However, if the variable is an object or an array, the contents can still be modified.

**Example**:
```javascript
const z = 20;
console.log(z); // 20
// z = 30; // TypeError: Assignment to constant variable.

const obj = { name: 'John' };
obj.name = 'Doe'; // This is allowed
console.log(obj.name); // 'Doe'
```

## Summary
- Use `var` for function-scoped variables, but be cautious of its hoisting behavior.
- Use `let` for block-scoped variables when you expect to reassign them.
- Use `const` for block-scoped variables that should not be reassigned, especially for constants or when working with objects/arrays.