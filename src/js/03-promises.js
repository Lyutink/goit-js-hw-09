import Notiflix from 'notiflix';

const formRef = document.querySelector('.form');

formRef.addEventListener('submit', getDataForm);

function getDataForm(event) {
  event.preventDefault();
    const dataForPromis = {
      firstDelay: Number((formRef['delay'].value)),
      step: Number((formRef['step'].value)),
      amount: Number((formRef['amount'].value)),
  }
  onAmountPromise(dataForPromis)
}

function onAmountPromise({firstDelay, step, amount}) {
  let delay = firstDelay;
  for (let position = 1; position <= amount; position += 1) {
    createPromise(position, delay);
    delay += step;
    }
  }
 
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const values = { position, delay };
  const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldResolve) {
          resolve(values);
        } else {
          reject(values);
        }
      }, delay)
  })
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      }); 
  }     



