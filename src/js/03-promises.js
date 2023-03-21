import Notiflix from 'notiflix';

const delayInput = document.querySelector('input[name="delay"]');
const delayStepInput = document.querySelector('input[name="step"]');
const promisesAmount = document.querySelector('input[name="amount"]');
const form = document.querySelector('.form');
form.addEventListener('submit', onFormSubmit);

 const delay = Number(delayInput.value);
  const step = Number(delayStepInput.value);
  const amount = Number(promisesAmount.value);

function createPromise(position, delay) {
 return new Promise((resolve, reject) => {
setTimeout(() => {
const shouldResolve = Math.random() > 0.3;
if (shouldResolve) {
resolve({ position, delay });
} else {
reject({ position, delay });
}
}, delay);
});
}


function onFormSubmit(event) {
  event.preventDefault();

  for (let num = 0; num <= amount; num + 1) {
    
    createPromise(num + 1, delay + num * step)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}







