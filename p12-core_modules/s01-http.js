let http = require('http');

http.createServer(function (req, res) {
    console.log('Request Headers:', req.headers);

    const { url, method } = req;
    console.log(`Received ${method} request for ${url}`);
    
    res.writeHead(200, {
        'Content-Type': 'text/html',
        'Set-Cookie': 'sessionid=abc123; HttpOnly'
    });
    res.end('<h1>Hello World!</h1>');
    
}).listen(8080);

