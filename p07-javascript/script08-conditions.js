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
