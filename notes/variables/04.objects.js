// OBJECTS

// to create an object

let myObj = new Object();
let Obj = {
    key1: 'first key',
    key2: 222
};

console.log(myObj.key1); // 'first key'
console.log(myObj[key2]); // 222

let keyVariable = "someKey";
let myObj2 = {
    [keyVariable]: "test"
}
console.log(myObj2.someKey); // "test"

myObj.test = true;
console.log(myObj.test); // true

delete myObj.test;
console.log(myObj.test); // undefined