function double1(x) {
    return x * 2;
}

const double2 = function(x) { 
    return x * 2;
};
const double2b = function(x) { return x * 2; };


const double3a = x => { return x * 2; };
const double3b = ( x => { return x * 2; } );
const double3c = (x) => { return x * 2; };

const double4 = x => x * 2;

const double5 = function(x) { 
    let y = x * 2;
    return y;
};

const double6a = x => { let y = x * 2; return y; };
const double6b = x => { 
    let y = x * 2; 
    return y; 
};


// (x,y) => x * y
// () => 42

console.log(double1(5)); // Output: 10
console.log(double2(5)); // Output: 10
console.log(double2b(5)); // Output: 10
console.log(double3a(5)); // Output: 10
console.log(double3b(5)); // Output: 10
console.log(double3c(5)); // Output: 10
console.log(double4(5)); // Output: 10
console.log(double5(5)); // Output: 10
console.log(double6a(5)); // Output: 10
console.log(double6b(5)); // Output: 10

console.log(double1); // Output: [Function: double1]
console.log(double2); // Output: [Function: double2]

console.log(typeof double1); // Output: function
console.log(typeof double2); // Output: function


const functions = [double1, double2, double2b];
for (const f of functions) {
    console.log(f(5)); // Output: 10 for each function
}

console.log(functions[0]); 
console.log(functions[1]); 
console.log(functions[1](5));

function run(f, a) {
    console.log(f(a));
}

run(double1, 5);
run(x => x * 2, 5);
run(function(x) { return x * 2; }, 5);

const g1 = x => x * 2;
const g2 = x => x * 2;
const g3 = g1;

console.log(g1 === g3); // Output: true
console.log(g1 === g2); // Output: false

console.log([2,3,4].map(x => x * 2)); // Output: [4, 6, 8]
[2,3,4].forEach(x => console.log(x * 2)); // Output: 4, 6, 8 (each on a new line)