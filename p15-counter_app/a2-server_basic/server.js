const express = require('express');

const app = express();
app.listen(8080);
app.use(express.static(__dirname));

let count = 0;

app.get('/count', (req, res) => {
    res.send(String(count));
});

app.post('/plus', (req, res) => {
    count++;
    res.send(String(count));
});

app.post('/minus', (req, res) => {
    count--;
    res.send(String(count));
});
