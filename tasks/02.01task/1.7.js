let symbols = "floor";
let sum = symbols.codePointAt(0) + symbols.codePointAt(1);
if ((sum) % 2 === 0) console.log(String.fromCodePoint(sum));
else console.log('Символ обнаружить не удалось');