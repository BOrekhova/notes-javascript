const list = [];
let cnt = 0;

for (let el of list) {
    if (el.toLowerCase() != 'default') cnt += 1;
}
console.log(cnt);