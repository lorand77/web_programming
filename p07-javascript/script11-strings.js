let fname = "John";
console.log(fname);

let lname = "'Smith'";
console.log(lname);

let job = "\"Web Developer\"";
console.log(job);

let text =
`The quick
brown fox
jumps over
the lazy dog.`;
console.log(text);

let text1 =
`The quick brown fox jumps over the lazy dog.`;
console.log(text1);

console.log(`His name is ${fname} ${lname} and he is a ${job}.`);

let text2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text2.length;
console.log(length);

let char = text2.charAt(0);
console.log(char);


const str = "hello";
console.log(str[1]);   // "e"
console.log(str[-1]);  // undefined  (no negative support)
console.log(str[99]);  // undefined

console.log(str[1]+str[99]); 

console.log(str.at(1));    // "e"
console.log(str.at(-1));   // "o"  ✅ counts from end
console.log(str.at(-2));   // "l"

console.log(str.at(1)+str.at(99));

let idx = 0;
while (idx < str.length+1) {
  if (str[idx] !== undefined) {
    console.log(str[idx]);
  } else {
    console.log(`Index ${idx} is out of bounds.`);
  }
  idx++;
}
