function add(a, b) {
    console.log('a:', a);
    console.log('b:', b);
    return a + b;
}

console.log(add(1, 2));
console.log(add('Functions', ' describe the world!'));

console.log(add);
console.log(add());
console.log(add(1));
console.log(add(1, 2, 3));
console.log(add("3x "));

function sum(a = 0, b = 0) {
    console.log('a:', a);
    console.log('b:', b);
    return a + b;
}

console.log(sum());
console.log(sum(1));
console.log(sum(1, 2));
console.log(sum(1, 2, 3));
console.log(sum("3x "));



function run(fn) {
  return fn();
}

const sayHello = function() {
  return "Hello";
};

console.log(run(sayHello));

const multiply = function(a, b) {return a * b;};
console.log(multiply(3, 4));
const multiply1 = (a, b) => a * b;
console.log(multiply1(3, 4));

const square = x => x * x;
console.log(square(5));

const myFunction = (x, y) => { return x * y;};
console.log(myFunction(3, 4));

const myFunction2 = (x, y) => { x * y;};
console.log(myFunction2(3, 4)); // undefined, because there is no return statement

console.log((x => x * x)(6));


function sq1(x) {
    return x * x;
}

const sq2 = function(x) {
    return x * x;
};

const sq3 = x => x * x;

const sq4 = (x) => x * x;

console.log(sq1(7));
console.log(sq2(7));
console.log(sq3(7));
console.log(sq4(7));
