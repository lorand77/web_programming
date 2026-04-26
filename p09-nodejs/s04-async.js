// Load the filesystem module
const fs = require('fs');

setTimeout(() => {
  console.log('Reading file... (this runs first!)');
}, 1.8);

// Read file asynchronously
fs.readFile('myfile.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file: ' + err);
    return;
  }
  console.log('File content: ' + data);
});
