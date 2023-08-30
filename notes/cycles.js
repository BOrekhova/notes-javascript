// WHILE

let i = 1;
while (i <= 5) {
    console.log(i++);
} // 1 2 3 4 5

i = 5;
while (i) console.log(i--); // 5 4 3 2 1

// DO-WHILE

i = 1;
do {
    console.log(i++);
} while (i <= 5) // 1 2 3 4 5

// FOR

for (let i = 1; i <= 5; i++) {
    console.log(i)
} // 1 2 3 4 5

i = 1;
for (; i <= 5;) {
    console.log(i++)
} // 1 2 3 4 5

for (let i = 1, factorial = 1; i <= 10; i++, factorial *= i) {
    console.log(i, factorial);
}

// BREAK
// CONTINUE