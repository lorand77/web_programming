const counter = document.getElementById('counter');

let count = 0;
counter.textContent = count;

document.getElementById('plus').addEventListener('click', () => {
  count++;
  counter.textContent = count;
});

document.getElementById('minus').addEventListener('click', () => {
  count--;
  counter.textContent = count;
});
