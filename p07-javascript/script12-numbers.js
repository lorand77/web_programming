let x = 10;
let y = 20;
let z = "The result is: " + x + y;
console.log(z);

x = 10;
y = 20;
z = "The result is: " + (x + y);
console.log(z);

x = 10;
y = 20;
z =  x + y + " is the result.";
console.log(z);

x = 0.2 + 0.1;
console.log(x);

x = 999999999999999;   // x will be 999999999999999
y = 9999999999999999;  // y will be 10000000000000000
console.log(x);
console.log(y);

x = "100";
y = "10";

z = x + y;
console.log(z);
z = x - y;
console.log(z);
z = x * y;
console.log(z);
z = x / y;
console.log(z);

x = 100 / "Apple";
console.log(x);
console.log(isNaN(x));
console.log(typeof x);
console.log(x==NaN);
console.log(x===NaN);

x =  2 / 0;
y = -2 / 0;
console.log(x);
console.log(y);

x = 89485;
console.log(x.toString(2));
console.log(x.toString(16));

x = 2048;
console.log(x.toExponential());
console.log(x.toExponential(2));
console.log(x.toExponential(4));

x = 9.656;
console.log(x.toFixed(0));
console.log(x.toFixed(2));
console.log(x.toFixed(4));
console.log(x.toFixed(6));

x = 9.656;
console.log(x.toPrecision());
console.log(x.toPrecision(2));
console.log(x.toPrecision(4));
console.log(x.toPrecision(6));

console.log(Number.EPSILON);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

let qn = 1;
let q = true;
console.log(qn && 1);
console.log(qn && 0);
console.log(q && true);

console.log(3 && 2);

console.log(1 & 1);
console.log(1 & 0);
console.log(3 & 2);

console.log(0xFF);
console.log(0b11111111);

console.log(true && true);
console.log((0b101 & 0b110).toString(2));