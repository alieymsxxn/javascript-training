# Data Types in JavaScript

JavaScript has several built-in data types that can be categorized into two main groups: **Primitive Types** and **Reference Types**.

## 1. Primitive Types

Primitive types are the most basic data types in JavaScript. They are immutable and represent a single value. The primitive types in JavaScript are:

- **String**: Represents a sequence of characters. Example: `'Hello, World!'`, `'JavaScript is fun!'`
- **Number**: Represents both integer and floating-point numbers. Example: `42`, `3.14`, `-7`, `0.001`
- **Boolean**: Represents a logical entity and can have two values: `true` or `false`. Example: `true`, `false`
- **Undefined**: A variable that has been declared but has not yet been assigned a value is of type `undefined`. Example:
  ```javascript
  let x;
  console.log(x); // undefined
  ```
- **Null**: Represents the intentional absence of any object value. It is a primitive value that represents "nothing". Example:
  ```javascript
  let y = null;
  console.log(y); // null
  ```
- **Symbol**: Introduced in ES6, symbols are unique and immutable values that can be used as identifiers for object properties. Even if two symbols are created with the same description, they are not equal. For example:
  ```javascript
  const id1 = Symbol('identifier');
  const id2 = Symbol('identifier');
  console.log(id1 === id2); // false
  ```
  This demonstrates that `id1` and `id2` are distinct symbols, even though they have the same description.
- **BigInt**: A newer addition to JavaScript, BigInt can represent integers with arbitrary precision. Example: `1234567890123456789012345678901234567890n`, `10n`

## 2. Non-Primitive  / Reference Types

Reference types are more complex data types that can hold collections of values and more complex entities. They are mutable and include:

- **Object**: The most basic reference type, which can hold collections of key-value pairs. Example: `{ name: 'Alice', age: 25, isStudent: false }`
- **Array**: A special type of object used for storing ordered collections. Example: `[1, 2, 3, 4]`, `['apple', 'banana', 'cherry']`
- **Function**: A callable object that can be invoked. Functions are first-class objects in JavaScript. Example:
  ```javascript
  function greet() { return 'Hello!'; }
  console.log(greet()); // Hello!
  ```
- **Date**: A built-in object for handling dates and times. Example: `new Date()`, `new Date('2023-01-01')`
- **RegExp**: A built-in object for matching text with patterns. Example: `/ab+c/`, `/\d{3}-\d{2}-\d{4}/`

## Summary

Understanding the different data types in JavaScript is crucial for effective programming. Each type has its own characteristics and behaviors, which can affect how data is manipulated and stored in your applications.
