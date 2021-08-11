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
    body: document.querySelector('body')
};

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);

let isActive = false;
let intervalId = null;
let colorId = null;

function onStartBtnClick() {
    isActive = true;
    if(isActive) {
        refs.startBtn.setAttribute('disabled', true);
    };
    
    intervalId = setInterval(() => {
    refs.body.style.backgroundColor = colors[randomIntegerFromInterval(colors)];
    return intervalId; 

  }, 1000);
};

function onStopBtnClick() {
    isActive = false;
    clearInterval(intervalId);
    refs.startBtn.removeAttribute('disabled');
    refs.body.removeAttribute('style');
 
    
    
};


const randomIntegerFromInterval = (colors) => {    
    let newColorId = Math.floor(Math.random() * (colors.length));
    if (colorId === newColorId){
        return randomIntegerFromInterval(colors);
    }    
    return colorId = newColorId;
   };