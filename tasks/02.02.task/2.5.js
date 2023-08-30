let values = ["Строка",true,"Числа","Объект","Не число", false, "Не объект"];

const res = values.slice(values.indexOf(true), values.lastIndexOf(false) + 1);
console.log(res);