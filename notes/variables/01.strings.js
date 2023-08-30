// STRINGS

// quotes: ('' == "") + (``)
const company = '"company"'; // "company"
const company1 = "\"company\""; // "company"

// transfer: \n
console.log("first string\nsecond string"); // > first string second string
console.log("first string\\nsecond string"); // > first string\nsecond string
console.log(`first string
second string`);

// concatenation (summ of strings)
const name = "petr";
const greeting1 = "hi, " + name + "!"; // hi, petr!
const greeting2 = `hi, ${name}!`;

// methods and functions
let str = "hi";
let num = 2;

str.length; // length of the string // 2
str.charAt(1); // index // i // you can go beyound
str[0]; // index // h // you can not go beyond

str.toLowerCase(); // all symbols are lowercase
str.toUpperCase(); // all symbols are uppercase

str.trim(); // to get rid of unnecessary space

String(num); // "2"
num.toString(); // "100"

str.concat(", world!"); // hi, world! 

str.includes("i", 1); // true
str.startsWith("hi"); // true
str.endsWith("i"); // true
str.indexOf("hi"); // 0
str.lastIndexOf("hi"); // 1

str.slice(0, 2); // "h" // str.slice(start (, end))
str.substring(0, 2);

str.repeat(3); // hihihi

// Большей считается более длинная строка.
// Однако, если мы введем в консоль ("а" > "Я"), получим true.

'АЯая'.codePointAt(0); // 'A' // 1040
String.fromCodePoint(1040, 1071, 1072, 1103); // АЯая
