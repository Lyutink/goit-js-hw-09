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
      if (selectedDates[0].getTime() < this.config.defaultDate.getTime()) {
        Notiflix.Notify.failure('Please choose a date in the future');
      } else {
          btnStartRef.removeAttribute("disabled");
      }
  },
};

const inputForUser = flatpickr(inputRef, options);


function onStart() {
    btnStartRef.setAttribute("disabled", "true");
    startTim = inputForUser.selectedDates[0].getTime();

    const timerId = setInterval(() => {
        const currentTime = Date.now();
        const differenceTime = startTim - currentTime;
        const time = convertMs(differenceTime);
        updateTimer(time);
        if (differenceTime < 1000) {
           clearInterval(timerId);
            Notiflix.Report.success(
                'Finish',
                'Congratulations!!!',
                'Close',
            {
                width: '360px',
                svgSize: '120px',
            },);
       }
   }, 1000);   
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function pad(value) {
    return String(value).padStart(2, '0');
}

function updateTimer({ days, hours, minutes, seconds }) {
    daysRef.textContent = days;
    hoursRef.textContent = hours;
    minutesRef.textContent = minutes;
    secondsRef.textContent = seconds;
}