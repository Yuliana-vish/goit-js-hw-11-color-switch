const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const body = document.querySelector('body');
const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');

startBtn.addEventListener('click', startButton);
stopBtn.addEventListener('click', stopButton);

let interval;

function startButton() {
  interval = setInterval(changeColor, 1000);
  startBtn.disabled = true;
}

function changeColor() {
  body.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length - 1)];
}

function stopButton() {
  clearInterval(interval);
  startBtn.disabled = false;
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
