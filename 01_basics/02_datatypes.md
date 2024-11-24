# JavaScript Data Types

JavaScript has two main categories of data types: **Primitive** and **Reference** types.

## 1. Primitive Data Types
These are the most basic data types in JavaScript. They are immutable and represent a single value.

- **String**: Represents a sequence of characters. Strings are enclosed in single quotes, double quotes, or backticks.
  ```javascript
  let name = "John Doe";
  ```

- **Number**: Represents both integer and floating-point numbers. JavaScript uses a double-precision 64-bit binary format.
  ```javascript
  let age = 30;
  let price = 19.99;
  ```

- **Boolean**: Represents a logical entity and can have two values: `true` or `false`.
  ```javascript
  let isActive = true;
  ```

- **Undefined**: A variable that has been declared but not assigned a value is of type `undefined`.
  ```javascript
  let x;
  console.log(x); // Outputs: undefined
  ```

- **Null**: Represents the intentional absence of any object value. It is a primitive value.
  ```javascript
  let y = null;
  ```

- **Symbol**: Introduced in ES6, symbols are unique and immutable values often used as object property keys.
  ```javascript
  const uniqueId = Symbol('id');
  ```

- **BigInt**: A newer data type that can represent integers with arbitrary precision, useful for very large numbers.
  ```javascript
  const bigNumber = BigInt(123456789012345678901234567890);
  ```

## 2. Reference Data Types
These types are more complex and can hold collections of values or more complex entities.

- **Object**: A collection of key-value pairs. Objects can store multiple values and are mutable.
  ```javascript
  let person = {
      name: "Alice",
      age: 25
  };
  ```

- **Array**: A special type of object used to store ordered collections of values. Arrays can hold multiple data types.
  ```javascript
  let fruits = ["apple", "banana", "cherry"];
  ```

- **Function**: Functions are first-class objects in JavaScript and can be assigned to variables, passed as arguments, and returned from other functions.
  ```javascript
  function greet() {
      return "Hello!";
  }
  ```
## 3. Using type of
The `typeof` operator can be used to determine the type of a variable or an expression. It returns a string that represents the data type of the variable or expression.

**Example**:
```javascript
let x;
console.log(typeof x); // Outputs: undefined

let y = null;
console.log(typeof y); // Outputs: object
```
In the above example, the `typeof` operator is used to determine the type of the variables `x` and `y`.

## Summary
JavaScript's data types are essential for understanding how to work with data in your applications. Primitive types are immutable and represent single values, while reference types are mutable and can hold collections of values or complex entities. Understanding these types helps in writing efficient and effective JavaScript code.