let x = {a : 1, b : 2};
console.log(x); // Output: { a: 1, b: 2 }
console.log(x.a); // Output: 1
console.log(x['a']); // Output: 1
console.log(x.b); // Output: 2

x.c = 3;
console.log(x); // Output: { a: 1, b: 2, c: 3 }
x['e'] = 4;
console.log(x); 

delete x.b;
console.log(x); // Output: { a: 1, c: 3 }

x.a = 42;
console.log(x); // Output: { a: 42, c: 3 }
x['a'] = 43;
console.log(x); // Output: { a: 43, c: 3 }

console.log(x.d); // Output: undefined
console.log(x['d']); // Output: undefined

