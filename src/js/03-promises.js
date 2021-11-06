import Notiflix from 'notiflix';

const formRef = document.querySelector('.form');
//const btnCreatePromisesRef = document.querySelector('.form > button');

formRef.addEventListener('submit', getDataForm);
function getDataForm(event) {
  event.preventDefault();
    const dataForPromis = {
      firstDelay: Number((formRef['delay'].value)),
      step: Number((formRef['step'].value)),
      amount: Number((formRef['amount'].value)),
  }
 
  console.log(dataForPromis.firstDelay);
  console.log(dataForPromis.step);
  console.log(dataForPromis.amount);

  createPromise(dataForPromis);
}
  
function createPromise({ firstDelay, step, amount }) {
  console.log("ii", firstDelay);
  let delay = firstDelay;

  for (let position = 1; position <= amount; position += 1) {  
    const shouldResolve = Math.random() > 0.3;
console.log("iiiiiiiiiii", delay)
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldResolve) {
          resolve({ position, delay });
        } else {
          reject({ position, delay });
        }
      }, delay)
    });
      
      promise.then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay - ((amount - position +1) * step)}ms`);
    })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay - ((amount - position + 1) * step)}ms`);
      }); 
     delay += step;

  }
     
}
