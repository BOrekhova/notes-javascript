// ARRAY

// type is an object
// index

// to create an array

const arr0 = new Array([1]); // arr0 = [1]

const arr1 = [];
const arr2 = [0, '1', true, {}, undefined];
const arr3 = [1, 2, 3];

// to change an element of an array

arr2[0] = 'Hello!';

// methods and functions

arr2.length; // length of an array
arr0.isArray(); // true
Array.from([1, 2, 3, 4, 5], (el) => el*el); // [1, 4, 9, 16, 25]
Array.from("hello"); // ["h", "e", "l", "l", "o"]

arr2.push('el'); // add elemenet(s) to the end 
arr2.unshift('el'); // add element(s) in the begining
arr2.pop(); // delete the last element and return it
arr2.shift(); // delete the first element and return it
arr2.splice(0, 1) // arr2.splice(index [, deleteCount, item1, item2, item3...])

const ARR1 = arr3.slice(1, 2); // ARR1 = [2]
const ARR2 = arr3.slice(-1);  // ARR2 = [3]
const ARR3 = arr3.slice();   // ARR3 = [1, 2, 3]

const ARR4 = arr1.concat(ARR1, ARR2, ARR3); // ARR4 = [2, 3, 1, 2, 3]
const ARR5 = ARR4.filter(e => e > 2); // ARR5 = [3, 3]
const ARR6 = arr3.map(e => e + 1); // ARR6 = [2, 3, 4]

const ARR7 = ARR6.every(e => e > 2); // false (2 !> 2)
const ARR8 = ARR6.some(e => e > 2); // true (3 > 2)

ARR6.indexOf(4, 1); // (element, from) // 2 // if nothing -> -1
ARR6.lastIndexOf(4); // 2 // rigth -> left
ARR6.includes(1, 0); // true // if element exists
ARR6.find(e => e > 2); // 3
ARR6.findIndex(e => e > 2); // 1

ARR6.sort((a, b) => a - b); // [2, 3, 4]
ARR6.reverse(); // [4, 3, 2]

String(arr3); // array -> string // 1,2,3
arr3.toString(); // array -> string // 1,2,3
arr3.join(); // array -> string // 1,2,3
arr3.join(', '); // 1, 2, 3
str.split(); // ['Hello! How are you?']
str.split(' '); // ["Hello!", "How", "are", "you?"]

const array = [1, 2, 3, 4, 5];
const sum = array.reduce(function(prev, curr) { return prev + curr }, 0);
const tot = array.reduceRight(); // right -> left

// array iteration

for (let i=0; i<arr2.length; i++) { // able to use "break"
    console.log(arr2[i]);
}

ARR8.forEach(e => { // no "break"
    console.log(e);
})

for (let el of array) {
    console.log(el);
}

// MULTI ARRAY (array of arrays)

let multiArray = [
    [1, 2, 3],
    [4, 5, 6]
];

console.log(array[0]); // [1, 2, 3]