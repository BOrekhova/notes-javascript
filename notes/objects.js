// OBJECTS

// to create an object

let Obj1 = new Object();
let Obj2 = {}
let Obj3 = {
    key1: 'first key',
    key2: 222
};

// to access properties

console.log(Obj3.key1); // 'first key'
console.log(Obj3['key2']); // 222

// nesting

const myObj = {
    count: 1,
    texts: {
      greetings: "Hello, World!"
    }
};
  
console.log(myObj.texts.greetings);
console.log(myObj["texts"].greetings);

// example

function createUser(firstname, lastname) {
    return {
      firstname, // firstname: firstname,
      lastname // lastname: lastname
    }
}
console.log(createUser("Вася", "Пупкин")); // {firstname: "Вася", lastname: "Пупкин"}  

const myObj1 = {
    greetings: "Hello, World!"
};
const variable1 = "greetings";
  
console.log(myObj.greetings); // "Hello, World!"
console.log(myObj["greetings"]); // "Hello, World!"
console.log(myObj[variable1]); // "Hello, World!"
console.log(myObj.variable1); // undefined. Свойства variable нет

// dynamic key

const variable = "greetings";
const myObj2 = {
  [variable]: "Hello, World!"
};

// key is a string (symbol)

// methods

myObj2.variable = "Hello!"; // change a property
delete myObj2.variable; // delete a property

// key-reading

for (let key in object) {
    // тело цикла
}

let sum = 0;
for (let key in basket) {
  sum += basket[key].cost * basket[key].count;
}
console.log(sum);

// При любых действиях с объектами мы работаем со ссылками (изменение, сравнение, передача в функцию и т. д.). 
// Поэтому, если мы создадим новый объект с такими же полями и сравним их, из-за того, что сравнивается не содержимое объектов, а ссылки на них, мы получим false.
