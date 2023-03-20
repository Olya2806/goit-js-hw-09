import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const usersDateInput = document.querySelector('#datetime-picker');
const startTimerButton = document.querySelector('button[data-start]')
 const daysField = document.querySelector("[data-days]");
  const hoursField = document.querySelector("[data-hours]");
  const minutesField = document.querySelector("[data-minutes]");
  const secondsField = document.querySelector("[data-seconds]");
startTimerButton.setAttribute('disabled', false)

let selectedDate = 0;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      
      if (selectedDate <= new Date()) {
          startTimerButton.removeAttribute('disabled', false)
          selectedDate = selectedDates[0]
           
      } else {
          Notiflix.Notify.failure("Please choose a date in the future");
        //   startTimerButton.setAttribute('disabled', true)
      }
  },
};
flatpickr(usersDateInput, options);

startTimerButton.addEventListener('click', () => coutTimeTimer.onStart())

const coutTimeTimer = {onStart() {setInterval(() => {
        
        const currentTime = Date.now();
    const countedTime = selectedDate - currentTime;
    const { days, hours, minutes, seconds } = convertMs(countedTime)

daysField.textContent = days;
hoursField.textContent = hours;
minutesField.textContent = minutes;
secondsField.textContent = seconds;
    }, 1000)
}}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = String(Math.floor(ms / day)).padStart(2, '0');
  // Remaining hours
  const hours = String(Math.floor((ms % day) / hour)).padStart(2, '0');
  // Remaining minutes
  const minutes = String(Math.floor(((ms % day) % hour) / minute)).padStart(2, '0');
  // Remaining seconds
  const seconds = String(Math.floor((((ms % day) % hour) % minute) / second)).padStart(2, '0');

  return { days, hours, minutes, seconds };
}

