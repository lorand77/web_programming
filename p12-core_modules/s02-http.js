const http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html',
    });
    res.end('<h1>Hello World!</h1>\n');
    
}).listen(8080);

// curl http://localhost:8080

