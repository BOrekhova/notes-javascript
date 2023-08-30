const list = [];

function count(list) {
    cnt = 0;
    for (let el of list) {
        if (el%2 == 0) cnt += 1;
    }
    return cnt;
}

console.log(count(list));