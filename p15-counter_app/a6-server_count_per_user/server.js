const express = require('express');
const crypto = require('crypto');

const app = express();
app.listen(8080);
app.use(express.static(__dirname));

const counts = {};

app.use((req, res, next) => {
    let uid = (req.headers.cookie || '').match(/uid=([^;]+)/)?.[1];
    if (!uid) {
        uid = crypto.randomUUID();
        res.setHeader('Set-Cookie', `uid=${uid}`);
    }
    req.uid = uid;
    if (!(uid in counts)) counts[uid] = 0;
    next();
});

app.get('/count', (req, res) => {
    res.send(String(counts[req.uid]));
});

app.post('/plus', (req, res) => {
    counts[req.uid]++;
    res.send(String(counts[req.uid]));
});

app.post('/minus', (req, res) => {
    counts[req.uid]--;
    res.send(String(counts[req.uid]));
});
