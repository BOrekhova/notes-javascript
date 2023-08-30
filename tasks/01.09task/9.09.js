let sentence = '';

const list = [];
let result = '';

for (let i=0; i<sentence.length; i++) {
    if (sentence[i] !== ' ') result += sentence[i];
    if (sentence[i] === ' ' || i === sentence.length - 1) {
        list.push(result);
        result = '';
    }
}
console.log(list);