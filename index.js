const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

const refs = {
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]'),
};

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStartBtnClick);

const isActive = false;

function onStartBtnClick() {
  setInterval(() => {
      if(isActive) {
          refs.startBtn.classList.add('disabled')
      }


  }, 1000);
};


  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };