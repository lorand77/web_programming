const letters = new Set();

letters.add("a");
letters.add("b");
letters.add("c");
console.log(letters);
let answer = letters.has("d");
console.log(answer);

const A = new Set(['a','b','c']);
const B = new Set(['b','c','d']);

const C = A.union(B);
const D = A.intersection(B);
const E = A.difference(B);
console.log(C);
console.log(D);
console.log(E);

let answer1 = A.isSubsetOf(B);
console.log(answer1);