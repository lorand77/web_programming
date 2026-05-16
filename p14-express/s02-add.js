const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/add', (req, res) => {
  const { a, b } = req.query;
  const sum = parseFloat(a) + parseFloat(b);
  res.json({ sum });     // Content-Type: application/json
  // res.send(`The sum of ${a} and ${b} is ${sum}\n`);    // Content-Type: text/html
});

app.listen(8081);
