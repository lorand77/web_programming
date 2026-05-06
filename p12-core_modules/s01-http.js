const http = require('http');
const url = require('url');

http.createServer(function (req, res) {
    // console.log(`Request Headers: ${req.headers}`);   // [object Object]
    console.log('Request Headers:', req.headers);
    console.log(`Request Headers: ${JSON.stringify(req.headers)}`);

    console.log(`Host: ${req.headers.host}`);
    console.log(`Method: ${req.method}`);
    console.log(`URL: ${req.url}`);

    const parsedUrl = url.parse(req.url, true);
    console.log(`Pathname: ${parsedUrl.pathname}`);
    console.log(`Query: ${JSON.stringify(parsedUrl.query)}`);
    // console.log('Query: ', parsedUrl.query);   // [Object: null prototype] { v: '1' }

    res.writeHead(200, {
        'Content-Type': 'text/html',
        'Set-Cookie': 'sessionid=abc123; HttpOnly'
    });
    res.end('<h1>Hello World!</h1>\n');
    
}).listen(8080);

