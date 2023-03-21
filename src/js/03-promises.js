import Notiflix from 'notiflix';

// const delayInput = document.querySelector('input[name="delay"]');
// const delayStepInput = document.querySelector('input[name="step"]');
// const promisesAmount = document.querySelector('input[name="amount"]');
const form = document.querySelector('.form');
form.addEventListener('submit', onFormSubmit);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    createPromise(position, delay)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
    // Fulfill
  } else {
    createPromise(position, delay)
    .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
    // Reject
  }
}

createPromise(position + 1, delayInput.value + delayInput.value)

function onFormSubmit() {
  
}