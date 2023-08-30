let x = 1.01;
let y = 2.23;

Math.ceil(x); // round up // 2
Math.floor(x); // round down // 1
Math.round(x); // round // 1
Math.trunc(x); // integer part // 1

Math.max(x, y); // return the max num // 2.23
Math.min(x, y); // return the min num // 1.01

Math.pow(2, 3); // 8 // 2**3 = 8
Math.sqrt(25); // 5 // 5**2 = 25
Math.cbrt(8); // 2 // 2**3 = 8

Math.abs(-2); // 2
Math.sign(-32); // -1

Math.random(); // random num

Math.PI;

console.log((0.1 + 0.2).toFixed(1) === "0.3") // true