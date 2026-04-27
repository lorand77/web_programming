// Load the filesystem module
const fs = require('fs');

// Read file asynchronously
fs.readFile('s03-express.js', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file: ' + err);
    return;
  }
  console.log('File content: ' + data);
});

console.log('1');
for(let i = 0; i < 1_000_000_000; i++) {} 
console.log('2');
for(let i = 0; i < 1_000_000_000; i++) {} 
console.log('3');
for(let i = 0; i < 1_000_000_000; i++) {} 
console.log('4');
