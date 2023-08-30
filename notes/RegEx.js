
const reg1 = /шаблон/флаги;
const reg2 = new RegExp('шаблон', 'флаги');


// 1.SPECIAL SYMBOLS means 
/*
^  — ставится в самое начало шаблона и означает, что поиск начинается с первого символа. Если совпадение есть, но где-то в середине текста, ничего не найдется. Т. е. слово привет по шаблону ^привет есть в тексте привет, Вася, а вот в Вася тебе передает привет! нет;
$  — наоборот конец текста;
.  — любой символ, кроме переноса строки (\n);
\d — означает любую цифру (digit);
\w — любую букву латинского алфавита, цифру или нижнее подчеркивание (word);
\s — любой пробельный символ (space);
\D — все, кроме \d;
\W — все, кроме \w;
\S — все, кроме \s. 
*/

// 2.FLAGS
/*
g — сокращение от global, ищет все вхождения, без этого флага поиск останавливается на первом;
i — insensitive, происходит независимый от регистра поиск;
m — multiline, поиск осуществляется по нескольким строкам. Влияет на поведение специальных символов ^ и $. С этим флагом данные спецсимволы означают не начало/конец текста, а начало/конец каждой строки;
u — unicode, включает поддержку Unicode;
s — single line, символ . (точка) дополнительно означает перенос на новую строку, т. е. любой символ.
*/

// 3.SYMBOL SETS

// [а-я0-5] означает, что будет найдена любая буква русского алфавита в нижнем регистре или любая цифра от 0 до 5.
"Hello, World!".match(/[lw]o/ig); // ["lo", "Wo"]

// 4.QUANTIFIERS (Квантификаторы)

// {n} - exact number; {n,} - n and more; {n,m} - n to m
// alias: + == {1,}; * == {0,}; ? == {0,1}
const str = "Hello, World!";
console.log(str.match(/\w{5}/g)); // ["Hello", "World"]
console.log("100*40=4000".match(/\d{3,}/g)); // ["100", "4000"]
console.log("100*40=4000".match(/\d{2,3}/g)); // ["100", "40", "400"]

// 5.GROUPS

// 6.OR (|)

"Hello, World".match(/hello|world/ig); // ["Hello", "World"]

// 7.STRINGS METHODS
//1. string.match(regexp)

str = "Hello, World!";
console.log(str.match(/\w\w\w\w\w/g)); // ["Hello", "World"]

//2. string.search(regexp)

str = "Hello, World!";
console.log(str.search(/wor/i)); // 7

//3. string.replace(regexp, string|function)

str = "Hello, World!";
console.log(str.replace(/\W/, '.')); // Hello. World!
console.log(str.replace(/\W/g, '.')); // Hello..World.

//4. string.split(regexp[, limit])

str = "Hello, World!";
console.log(str.split(/o/)); // ["Hell", ", W", "rld!"]
console.log(str.split(/o/, 2)); // ["Hell", ", W"]

////

str = "Hello, World!";
/hello/.test(str); // false
/hello/i.test(str); // true