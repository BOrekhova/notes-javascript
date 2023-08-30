const list = [];

function average(list) {
    let cnt = 0;
    for (let el of list) cnt += el;
    let res = Math.round(cnt / list.length);
    return res;
}

console.log(average(list));