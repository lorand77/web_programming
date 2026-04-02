for (let i = 10; i >= 0; i--) {
    console.log(i);
}

console.log("----------------------------------------------------");

let j = 10;
while (j >= 0) {
    console.log(j);
    j--;
}

const cars = ["Toyota", "Honda", "Ford"];

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}


for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}

for (let i = 0; i <= 10; i += 2) {
    if (i > 5) {
        break;
    }
    console.log(i);
}

for (let i = 0; i <= 10; i += 2) {
    if (i === 6) {
        continue;
    }
    console.log(i);
}
