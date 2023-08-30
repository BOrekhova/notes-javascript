const partNumbers = ["ER1234COM", "FIV987451RU","GE123JO","P4321NO"];

const res = partNumbers.filter(e => Number(e[e.length - 4]) !== "NaN" && Number(e[e.length - 3]) !== "NaN" && Number(e[e.length - 2]) === "NaN" && Number(e[e.length - 1]) === "NaN");
console.log(res); 