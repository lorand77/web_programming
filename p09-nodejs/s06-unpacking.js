let x = {};
x.a = 1;
x.b = 2;
x.d = 3;

let { a, b, c } = x;
x.a = 11;
console.log(a, b, c);