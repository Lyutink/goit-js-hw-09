import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const inputRef = document.querySelector('#datetime-picker');
const btnStartRef = document.querySelector('button[data-start]');
const daysRef = document.querySelector('[data-days]');
const hoursRef = document.querySelector('[data-hours]');
const minutesRef = document.querySelector('[data-minutes]');
const secondsRef = document.querySelector('[data-seconds');

btnStartRef.setAttribute("disabled", "true");
btnStartRef.addEventListener('click', onStart);

let startTim = 0;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      console.log(selectedDates[0]);
      if (selectedDates[0].getTime() < this.config.defaultDate.getTime()) {
        Notiflix.Notify.failure('Please choose a date in the future');
      } else {
          btnStartRef.removeAttribute("disabled");
          startTim = selectedDates[0].getTime();
      }
  },
};

const inputForUser = flatpickr(inputRef, options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function onStart() {
btnStartRef.setAttribute("disabled", "true");
   const timerId = setInterval(() => {
        const currentTime = Date.now();
        const differenceTime = startTim - currentTime;
       const time = convertMs(differenceTime);
       if (differenceTime === 0) {
           clearInterval(timerId);
           console.log('finish');
       }
       updateTimer(time);

   }, 1000);
    
    
    const currentTime = Date.now();
    const differenceTime = startTim - currentTime;
       
}

function updateTimer({ days, hours, minutes, seconds }) {
    daysRef.textContent = days;
    hoursRef.textContent = hours;
    minutesRef.textContent = minutes;
    secondsRef.textContent = seconds;
}