// NUMBERS

const integer = 42;
const float = 0.42;
alert(1 + Infinity); // Infinity
alert(1 / Infinity); // 0

console.log("hello" / 2); // NaN (not a number)
alert(isNaN('hello')); // true

// operators

// + // - // * // / // % // = //
// -
let a = 42;
console.log(-a); // -42;
console.log(-"42"); // -42
console.log(-"-42"); // 42
// **
console.log(10 ** 2); // 100
console.log(100 ** 0.5) // 10
// +
console.log(+a); // 42
console.log(+"42"); // 42 // makes a num
// ++ --
let a1 = 1;
let b1 = ++a1;
console.log(a1, b1); // 2 2

let a2 = 1;
let b2 = a2++;
console.log(a2, b2); // 2 1

// methods and functions

let str = '42px'
let num = 23.69;

isFinite(num); // is it finite
isNaN(num); // is it a number

let nums = Number("100"); // 100
let blnum = Number(false); // 0
let ab = Number({}); // NaN
let b = Number("Hello"); // NaN
let c = Number(undefined); // NaN

parseFloat(str); // string -> float // "22 km" -> 22
parseInt(str);  // string -> integer