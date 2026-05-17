const counter = document.getElementById('counter');

function render(data) {
  counter.textContent = data.count;
}

function send(path) {
  fetch(path, { method: 'POST' })
    .then(function (r) { return r.json(); })
    .then(render);
}

function poll() {
  fetch('/count')
    .then(function (r) { return r.json(); })
    .then(render);
}

poll();
setInterval(poll, 200);

document.getElementById('plus').addEventListener('click', function () {
  send('/plus');
});

document.getElementById('minus').addEventListener('click', function () {
  send('/minus');
});
