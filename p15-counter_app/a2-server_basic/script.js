const counter = document.getElementById('counter');

function render(data) {
  counter.textContent = data.count;
}

function send(path) {
  fetch(path, { method: 'POST' })
    .then(function (r) { return r.json(); })
    .then(render);
}

fetch('/count')
  .then(function (r) { return r.json(); })
  .then(render);

document.getElementById('plus').addEventListener('click', function () {
  send('/plus');
});

document.getElementById('minus').addEventListener('click', function () {
  send('/minus');
});
