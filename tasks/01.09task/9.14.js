const list = [];
const numbers_list = [];

for (let el of list) {
    if (el === false) break;
    else if (typeof el === 'number') numbers_list.push(el);
}

console.log(numbers_list);