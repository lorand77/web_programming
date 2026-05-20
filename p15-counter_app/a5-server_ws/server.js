const express = require('express');
const { WebSocketServer } = require('ws');

const app = express();
app.use(express.static(__dirname));

const server = app.listen(8080);
const wss = new WebSocketServer({ server });

let count = 0;

function broadcast() {
    const msg = JSON.stringify({ count });
    wss.clients.forEach(c => {
        if (c.readyState === c.OPEN) c.send(msg);
    });
}

wss.on('connection', (ws) => {
    ws.send(JSON.stringify({ count }));
    console.log('Client connected. Total:', wss.clients.size);

    ws.on('message', (data) => {
        let msg;
        try { msg = JSON.parse(data); } catch { return; }
        if (msg.op === 'plus') count++;
        else if (msg.op === 'minus') count--;
        else return;
        console.log('Count updated:', count);
        broadcast();
    });

    ws.on('close', () => {
        console.log('Client disconnected. Total:', wss.clients.size);
    });
});
