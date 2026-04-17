const cars = ["Audi", "Fiat", "Ford", "Volkswagen"];
console.log(cars);
console.log(cars.length);

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

cars.forEach(function(car) {
  console.log(car);
});

cars.forEach(car => console.log(car));


const undefined_list = [];
undefined_list[5-1] = 5;
console.log(undefined_list);
console.log(undefined_list.length);

undefined_list.forEach(x => console.log(typeof x));

console.log(typeof undefined_list[0]); // "undefined"
console.log(typeof undefined_list[4]); // "number"

console.log(undefined_list[0]); // "undefined"
console.log(undefined_list[4]); // "number"

for (let i = 0; i < undefined_list.length; i++) {
  console.log(undefined_list[i]);
}

const fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits.includes("Mango")); // is true

const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.sort();
console.log(fruits2);

const numbers = [40, 100, 1, 5, 25, 10];
numbers.sort();
console.log(numbers); // [1, 10, 100, 25, 40, 5]


numbers.sort(function(a, b){return a - b;});
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 5, 10, 25, 40, 100]

const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

function myFunction(value) {
  return value * 2;
}
console.log(numbers2); // [90, 8, 18, 32, 50]
