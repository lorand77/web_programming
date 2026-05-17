const counter = document.getElementById('counter');

const render = ({ count }) => (counter.textContent = count);
const send = (path) => fetch(path, { method: 'POST' }).then(r => r.json()).then(render);

fetch('/count').then(r => r.json()).then(render);
document.getElementById('plus').addEventListener('click', () => send('/plus'));
document.getElementById('minus').addEventListener('click', () => send('/minus'));
