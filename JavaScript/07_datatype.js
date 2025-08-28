// Primitive Types
let x= typeof "verma ji";
console.log(x);

let y = "sohan";
console.log(typeof y);
console.log(`hello ${y}`) //i want to print some text with varavle value combine

let name = "Alice";       // String
let age = 25;             // Number
let isStudent = true;     // Boolean
let city;                 // Undefined
let empty = null;         // Null
let bigNum = 12345678901234567890n;  // BigInt
let id = Symbol("id");    // Symbol

console.log(typeof name);      // "string"
console.log(typeof age);       // "number"
console.log(typeof isStudent); // "boolean"
console.log(typeof city);      // "undefined"
console.log(typeof empty);     // "object" (JavaScript bug)
console.log(typeof bigNum);    // "bigint"
console.log(typeof id);        // "symbol"

// Non-Primitive Types
let person = { name: "Alice", age: 25 };  // Object
let numbers = [1, 2, 3, 4];               // Array
function greet() {
  return "Hello!";
}

console.log(typeof person);   // "object"
console.log(typeof numbers);  // "object"
console.log(typeof greet);    // "function"
