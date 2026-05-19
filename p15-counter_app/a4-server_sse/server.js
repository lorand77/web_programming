const express = require('express');
const app = express();

let count = 0;
let clients = [];

app.use(express.static(__dirname));

app.get('/stream', (req, res) => {
    res.set({
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
    });
    res.flushHeaders();
    res.write(`data: ${JSON.stringify({ count })}\n\n`);
    clients.push(res);
    console.log('Client connected. Total:', clients.length);

    req.on('close', () => {
        clients = clients.filter(c => c !== res);
        console.log('Client disconnected. Total:', clients.length);
    });
});

function broadcast() {
    const msg = `data: ${JSON.stringify({ count })}\n\n`;
    clients.forEach(c => c.write(msg));
}

app.post('/plus', (req, res) => {
    count++;
    broadcast();
    res.sendStatus(204);
});

app.post('/minus', (req, res) => {
    count--;
    broadcast();
    res.sendStatus(204);
});

app.listen(8080);
