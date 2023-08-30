const list = [];
let cnt = 0;

for (let el of list) {
    if (el == false || el == true) break;
    else cnt += el;
}
console.log(cnt);