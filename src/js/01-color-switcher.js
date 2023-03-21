const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

stopButton.addEventListener('click', onStopButtonClick);
stopButton.setAttribute('disabled', false);

startButton.addEventListener('click', () => {
  changeColorTimer = setInterval(() => {
   body.style.backgroundColor =  getRandomHexColor()
  }, 1000);
    stopButton.removeAttribute('disabled'); 
    startButton.setAttribute('disabled', false);
    
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

function onStopButtonClick() {
    clearInterval(changeColorTimer);
  
    startButton.removeAttribute('disabled');
    stopButton.setAttribute('disabled', false); 
}


