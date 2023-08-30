// VARIABLES

// dynamic typing (variable can be string and then number)

// to create (announce + initilize) a variable

let a;
let b = 123;
var c = 1; // hoisting = variables are processed before code execution 
const color = "blue"; // constant variable

/* types of variables:
1. string,
2. number,
3. boolean,
4. null,
5. undefined,
6. object (-> functions),
7. Symbol,
8. BigInt
*/

console.log(typeof 12); // number
console.log(typeof 1n) // bigint
console.log(typeof "12"); // string
console.log(typeof true); // boolean
console.log(typeof Symbol()); // symbol
console.log(typeof undefined); // undefined
console.log(typeof { a: 1 }); // object
console.log(typeof alert);// function
console.log(typeof null); // object // an official mistake ->
if (typeof myObject === "object" && myObject !== null) { }