const express = require('express');
const app = express();

let count = 0;

app.use(express.static(__dirname));

app.get('/count', (req, res) => res.json({ count }));
app.post('/plus', (req, res) => res.json({ count: ++count }));
app.post('/minus', (req, res) => res.json({ count: --count }));

app.listen(8080);


// curl localhost:8080/count
//{"count":6}

// curl -X POST localhost:8080/plus
// {"count":34}
