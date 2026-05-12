const fs = require('fs');

// Read file asynchronously with callback
fs.readFile('s03-fs.js', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File content:', data);
});




// Write text to a file
fs.writeFile('myfile.txt', 'Hello, World!', 'utf8', (err) => {
if (err) {
    console.error('Error writing myfile.txt:', err);
    return;
}
console.log('myfile.txt created successfully');
});

// Write JSON data (nested inside first callback to ensure order)
const data = { name: 'John', age: 30, city: 'New York' };
fs.writeFile('data.json', JSON.stringify(data, null, 2), 'utf8', (err) => {
    if (err) {
    console.error('Error writing data.json:', err);
    return;
    }
    console.log('data.json created successfully');
});

setTimeout(() => {
fs.appendFile('myfile.txt', '\nHello, World 2!', 'utf8', (err) => {
    if (err) {
        console.error('Error writing myfile.txt:', err);
        return;
    }
    console.log('myfile.txt appended successfully');
    }
);
}, 10);

