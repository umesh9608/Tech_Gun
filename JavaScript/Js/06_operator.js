// 1. Arithmetic Operators
let a = 10;
let b = 3;

console.log("Addition:", a + b);       // 13
console.log("Subtraction:", a - b);    // 7
console.log("Multiplication:", a * b); // 30
console.log("Division:", a / b);       // 3.333...
console.log("Modulus:", a % b);        // 1
console.log("Exponent:", a ** b);      // 1000

// 2. Comparison Operators
console.log("Equal (==):", a == "10");     // true
console.log("Strict Equal (===):", a === "10"); // false
console.log("Not Equal (!=):", a != b);    // true
console.log("Greater Than:", a > b);       // true
console.log("Less Than:", a < b);          // false

// 3. Logical Operators
let x = true;
let y = false;

console.log("AND (&&):", x && y);     // false
console.log("OR (||):", x || y);      // true
console.log("NOT (!):", !x);          // false

// 4. Assignment Operators
let num = 5;

num += 2;  // num = num + 2
console.log("After += :", num);       // 7


num *= 3;  // num = num * 3
console.log("After *= :", num);       // 21

// 5. Type Operator
console.log("Type of a:", typeof a);        // number
console.log("Type of 'hello':", typeof "hello");  // string

// instanceof example
let arr = [1, 2, 3];
console.log("Is arr an Array?", arr instanceof Array); // true
