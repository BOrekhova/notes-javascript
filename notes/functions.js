// FUNCTION 
// Функция может считаться предикатом только если она возвращает boolean.
// 1way. declaration
// you can call function even before its declaration

const printMotto = () => {
  console.log('Winter is coming');
}

function printHello(name) {
    console.log(`Привет, ${name}!`);
}

// 2way. FUNCTION EXPRESSION
// you can NOT call function even before its declaration

let printHello = function someFunctionName(name) {
    console.log(`Привет, ${name}!`);
}

let printHello = function (name) {
    console.log(`Привет, ${name}!`);
}

printHello('Саша'); // "Привет, Саша!"
someFunctionName('Саша'); // Ошибка! someFunctionName не определен

(function () {
    console.log("Привет!");
})(); // Привет!

// 3way. Arrow functions

const square = (num) => {
    return num * num;
}
const square = (num) => num * num;

// !! internal variables > external variables

// Number of arguments

function sumOfThree(a, b, c) {
    console.log(a + b + c);
    console.log(arguments[0]); // a
    console.log(arguments.length); // 3
}

console.log(sumOfThree.length); // 3

// Default values

function printHello(username = 'гость') {
    console.log(`Привет, ${username}!`);
}

// Function's return

function square(num) {
    return num * num;
}

let four = square(2);

// CALLBACKS
// A callback function is a function passed into another function as an argument, which 
// is then invoked inside the outer function to complete some kind of routine or action.


