const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World from Express!'));
app.get('/haha', (req, res) => res.send('Haha!'));

app.listen(8080);

// pm2 start s01-test.js --watch
// curl http://localhost:8080
// curl http://localhost:8080/haha
