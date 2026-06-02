require('dotenv').config();
const express = require('express');
const crypto = require('crypto');
const mysql = require('mysql2');

const app = express();
app.use(express.static(__dirname));

const conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

conn.query(`
    CREATE TABLE IF NOT EXISTS counters (
        uid VARCHAR(36) PRIMARY KEY,
        count INT NOT NULL DEFAULT 0
    )
`, (err) => {
    if (err) throw err;
    app.listen(8080);
});

app.use((req, res, next) => {
    let uid = (req.headers.cookie || '').match(/uid=([^;]+)/)?.[1];
    if (!uid) {
        uid = crypto.randomUUID();
        res.setHeader('Set-Cookie', `uid=${uid}`);
    }
    req.uid = uid;
    conn.query('INSERT IGNORE INTO counters (uid) VALUES (?)', [uid], (err) => {
        if (err) return next(err);
        next();
    });
});

function sendCount(req, res, next) {
    conn.query('SELECT count FROM counters WHERE uid = ?', [req.uid], (err, rows) => {
        if (err) return next(err);
        res.send(String(rows[0].count));
    });
}

app.get('/count', sendCount);

app.post('/plus', (req, res, next) => {
    conn.query('UPDATE counters SET count = count + 1 WHERE uid = ?', [req.uid], (err) => {
        if (err) return next(err);
        sendCount(req, res, next);
    });
});

app.post('/minus', (req, res, next) => {
    conn.query('UPDATE counters SET count = count - 1 WHERE uid = ?', [req.uid], (err) => {
        if (err) return next(err);
        sendCount(req, res, next);
    });
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Server error');
});
