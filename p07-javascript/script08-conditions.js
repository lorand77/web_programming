let pi = 3.14;

if (pi > 3) {
    console.log("pi is greater than 3");
}

let x = 6;

if (x > 2 && x % 1 === 0) {
    console.log("x is a positive integer");
}

console.log("\n--- Integer check examples ---");

// 1) Number.isInteger (recommended)
console.log("Number.isInteger examples:");
console.log(Number.isInteger(10));
console.log(Number.isInteger(10.5));
console.log(Number.isInteger("10"));
console.log(Number.isInteger(10.0000000000000001)); // true due to precision limits
console.log(Number.isInteger(10n)); // false, BigInt is not a Number (awful Javascript feature)


let e = 2.7;

if (e > 0) {
    console.log("e is positive");
} else if (e < 0) {
    console.log("e is negative");
} else {
    console.log("e is zero");
}

let age = 25;

let canDrink = (age >= 21) ? "Yes" : "No";
console.log(`Can drink alcohol? ${canDrink}`);

let y = 7;

console.log(y === 8);

if (x > 0 && y > 0) {
    console.log("Both x and y are positive");
}

if (x === 0 || y === 0) {
    console.log("At least one of x or y is zero");
}

if (x !== 0) {
    console.log("x is not zero");
}

function f(x) {
    console.log(x);
    return x;
}

if (f(x) > 1 && f(y) > 0) {
    console.log("Test");
}

z1 = f(x) > 1;
z2 = f(y) > 0;

if (z1 && z2) {
    console.log("Test2");
}

