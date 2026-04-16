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