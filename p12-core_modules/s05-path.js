const path = require('path');

// Get filename from a path
const filename = path.basename('/users/docs/file.txt');
console.log(filename);

console.log('Directory name:', __dirname);

// Get the file name of the current module
console.log('File name:', __filename);

const fullPath = path.join('/users', 'docs', 'file.txt');
console.log(fullPath); // Output depends on OS