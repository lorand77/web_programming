const counter = document.getElementById('counter');


const stream = new EventSource('/stream');
stream.onmessage = function (e) {
  counter.textContent = JSON.parse(e.data).count;
};


document.getElementById('plus').addEventListener('click', function () {
  counter.textContent = parseInt(counter.textContent) + 1;
  fetch('/plus', { method: 'POST' });
});

document.getElementById('minus').addEventListener('click', function () {
  counter.textContent = parseInt(counter.textContent) - 1;
  fetch('/minus', { method: 'POST' });
});
