let a = 13;

if (a < 0 && a != 0) alert(a);
else if (a > 0 || a != 13) {
    a = 5;
    alert(a)
}
else alert("no");

/* LOGICAL OPERATORS
1. ! (Отрицание)
2. && (И)
3. || (ИЛИ)
*/

// TERNARY OPERATOR
// variable = condition ? value1 : value2

let status = (hour < 10 || hour > 18) ? 'closed' : 'opened';

let allowedText = age < 14
    ? 'Нет доступа'
    : age < 18
        ? 'Ограниченный доступ'
        : 'Полный доступ'

// SWITCH

switch (1) {
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;
    default:
        console.log(0);
        break;
}