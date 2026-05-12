const fs = require('fs');

fs.unlink('myfile.txt', (err) => {
    if (err) {
        console.error('Error deleting file:', err);
        return;
    }
    console.log('File deleted successfully');
});

fs.unlink('data.json', (err) => {
    if (err) {
    console.error('Error deleting file:', err);
    return;
    }
    console.log('File deleted successfully');
});
