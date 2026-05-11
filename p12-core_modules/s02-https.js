const https = require('https');
const fs = require('fs');
const path = require('path');

const options = {
    key: fs.readFileSync(path.join(__dirname, 'key.pem')),
    cert: fs.readFileSync(path.join(__dirname, 'cert.pem'))
};

https.createServer(options, function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html',
    });
    res.end('<h1>Hello World!</h1>\n');
    
}).listen(8080);

// curl -k https://localhost:8080

