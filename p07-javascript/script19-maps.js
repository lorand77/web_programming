const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

console.log(fruits);

fruits.set("mangos", 100);
fruits.set("oranges", 0);

console.log(fruits);
console.log(fruits.size);

fruits.delete("oranges");

console.log(fruits);

console.log(fruits.has("oranges"));
console.log(fruits.has("apples"));

let text = "";
fruits.forEach (function(value, key) {
  text += key + ': ' + value + ', ';
});
text = text.replace(/, $/, "");
console.log(text);

text = "";
fruits.forEach ((value, key) => text += key + ': ' + value + ', ');
text = text.replace(/, $/, "");
console.log(text);

text = "";
for (const x of fruits.entries()) {
  text += x[0] + ': ' + x[1] + ', ';
}
text = text.replace(/, $/, "");
console.log(text);

text = "";
for (const x of fruits.keys()) {
  text += x + ', ';
}
text = text.replace(/, $/, "");
console.log(text);

text = "";
for (const x of fruits.values()) {
  text += x + ', ';
}
text = text.replace(/, $/, "");
console.log(text);

let total = 0;
for (const x of fruits.values()) {
  total += x;
}
console.log(total);
