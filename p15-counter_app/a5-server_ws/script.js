const counter = document.getElementById('counter');
const ws = new WebSocket(`ws://${location.host}`);

ws.onmessage = (e) => {
  counter.textContent = JSON.parse(e.data).count;
};

document.getElementById('plus').addEventListener('click', () => {
  ws.send(JSON.stringify({ op: 'plus' }));
});

document.getElementById('minus').addEventListener('click', () => {
  ws.send(JSON.stringify({ op: 'minus' }));
});
