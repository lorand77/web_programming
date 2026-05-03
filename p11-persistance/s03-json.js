const fs = require('fs');

// save data, write in text mode, serialize data
// const data = { name: "Alice", age: 30, city: "New York" };
const data = [1,"abc",null,true,{x: 1, y: 2},[1,2,3],undefined,0.1,0.2,0.1+0.2,0.3,
    NaN,Infinity,-Infinity, new Date()];
//const data = new Map([["name", "Alice"], ["age", 30], ["city", "New York"]]);


fs.writeFileSync("data.json", JSON.stringify(data));

// show content of the file
require('child_process').execSync("cat data.json", { stdio: 'inherit' });
console.log(); // add a newline for better output readability
console.log();

// load data, read in text mode, deserialize data
const data2 = JSON.parse(fs.readFileSync("data.json", "utf8"));
console.log(data2);
