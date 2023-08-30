let phone = "+712:34567*8,90";

let res = phone.match(/,|:|' '|*/g);
console.log(res.join(''));