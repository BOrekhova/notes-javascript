const list_1 = [];
const list_2 = [];

const list = [];

for (let value of list_1) {
    list.push(Math.pow(value, 2));
}
for (let value of list_2) {
    list.push(Math.pow(value, 2));
}

console.log(list);