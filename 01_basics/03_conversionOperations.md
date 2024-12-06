# JavaScript Type Conversions

JavaScript performs automatic type conversion in various scenarios. Below are examples of different type conversions:

## 1. String to Number Conversion

- **Example:** 
  - `'3abc'` → `NaN` (Not a Number)
  - `'12'` → `12` (String to Number)
  - `'true'` → `NaN` (Not a Number)
  - `'0'` → `0` (String to Number)
  
## 2. String to Boolean Conversion

- **Example:**
  - `'true'` → `true` (non-empty string is always true)
  - `'false'` → `true` (non-empty string is always true)
  - `'0'` → `true` (non-empty string is always true)
  - `' '` (space) → `true` (non-empty string is always true)
  - `''` (empty string) → `false`

## 3. Boolean to String Conversion

- **Example:**
  - `true` → `'true'`
  - `false` → `'false'`

## 4. Number to Boolean Conversion

- **Example:**
  - `1` → `true`
  - `0` → `false`
  - Any non-zero number → `true`
  - `NaN` → `false`

## 5. Boolean to Number Conversion

- **Example:**
  - `true` → `1`
  - `false` → `0`

## Summary

Understanding type conversions is crucial for avoiding unexpected behavior in JavaScript. Always be mindful of how different types interact with each other during operations.