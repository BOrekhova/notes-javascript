// BigInt

let bigInt = 2n;
let bigInt2 = BigInt("10");

// SYMBOL

let key1 = Symbol("test");
let key2 = Symbol("test");

console.log(key1 == key2); // false

console.log(key1.description); // test

let key3 = Symbol.for("test"); // test нет в глобальном реестре - создает и добавляет
let key4 = Symbol.for("test"); // test есть в глобальном реестре - достает из него

console.log(key3 === key4); // true