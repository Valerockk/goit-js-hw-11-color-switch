const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');
let timer = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

startBtn.addEventListener('click', () => {
  clearInterval(timer);
  timer = setInterval(() => {
    const indexColorRandom = randomIntegerFromInterval(0, colors.length - 1);
    const colorRandom = colors[indexColorRandom];
    document.body.style.backgroundColor = colorRandom;
  }, 1000);
});

stopBtn.addEventListener('click', () => {
    clearInterval(timer);
});
