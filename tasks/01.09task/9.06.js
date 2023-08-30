const list = [];
for (let i=1; i<=100; i++) list.push(i);

let sum = 0;
let simple = 1;

for (let el in list) {
  for (let i=2; i<el; i++) {
    simple = 1;
    if (el%i === 0) {
      simple = 0;
      break;
    }
  }
  if (simple === 1) {
    console.log(el);
    sum += parseInt(el);
  }
}
console.log(sum - 1);