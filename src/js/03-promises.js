import Notiflix from 'notiflix';

const delayInput = document.querySelector('input[name="delay"]');
const delayStepInput = document.querySelector('input[name="step"]');
const promisesAmount = document.querySelector('input[name="amount"]');
const form = document.querySelector('.form');
form.addEventListener('submit', onFormSubmit);


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
      setTimeout(() => {
    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
    }
  }, delay);
    }) 
}


function onFormSubmit(event) {
  event.preventDefault();

  const delay = Number(delayInput.value);
  const step = Number(delayStepInput.value);
  const amount = Number(promisesAmount.value);
  

  let srepValue = delay;

  for (let num = 1; num <= amount; num += 1){
    createPromise(num, srepValue)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    srepValue += step;
  }
}







