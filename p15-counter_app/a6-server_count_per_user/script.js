const counter = document.getElementById('counter');

fetch('/count')
  .then(r => r.text())
  .then(c => { counter.textContent = c; });


function send(action) {
  fetch(action, { method: 'POST' })
    .then(r => r.text())
    .then(c => { counter.textContent = c; });
}

document.getElementById('plus').addEventListener('click', function () {
  send('/plus');
});

document.getElementById('minus').addEventListener('click', function () {
  send('/minus');
});
