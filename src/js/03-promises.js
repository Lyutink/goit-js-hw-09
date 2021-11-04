import Notiflix from 'notiflix';

const formRef = document.querySelector('.form');
const btnCreatePromisesRef = document.querySelector('.form > button');



//console.log(formRef.step);
//console.log(inputDelayRef);

//let delay = 0;
// let firstDelay = 0;
// let step = 0;
// let amount = 0;

btnCreatePromisesRef.addEventListener('click', acceptData);

function acceptData(event) {
  event.preventDefault();
  // const formData = new FormData(formRef);
  // formData.forEach((value, name) => {
    
  //   console.log(value, name)
  const dataForPromis = {
    firstDelay: Number((formRef['delay'].value)),
   step: Number((formRef['step'].value)),
    amount: Number((formRef['amount'].value)),
  }

  console.log(dataForPromis.firstDelay);
  console.log(dataForPromis.step);
  console.log(dataForPromis.amount);
  foo(dataForPromis);
}


// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }
function foo({ firstDelay, step, amount }) {
  let delay = firstDelay;

  for (let position = 1; position <= amount; position += 1){
      const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({ position, delay });
          reject({ position, delay });
        }, delay);
        
        
      })
        .then(({ position, delay }) => {
          Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}`)
        })
      .catch(({ position, delay }) => {
        Notiflix.Notify.warning(`❌ Rejected promise ${position} in ${delay}ms`)
      });
    //createPromise(position, delay);
    delay += step;
  }
}





// function createPromise({ firstDelay, step, amount }) {
//   let delay = firstDelay;
//   console.log('hhhhh',delay);
//   for (let i = 1; i <= amount; i += 1) {
//   new Promise(resolve => {
//     setTimeout(() => resolve(i), delay);
//   }).then((value) => Notiflix.Notify.success(`Fulfilled promise ${value} in ${delay - (amount - value) * step}`))
//     //.catch(({i, delay}))
//     delay += step;
//     console.log('hhhhh',delay);
// }
// }

// function makePromisStyle() {
//   const makeString = '<div>Fulfilled promise</div>';
//   makeString.insertAdjacentHTML("afterend", formRef);
// }
// const firstDelay = 1000;
// let delay = firstDelay;
// for (let i = 0; i < 3; i += 1) {
//   new Promise(resolve => {
//     setTimeout(() => resolve(i), delay);
//   }).then(value => console.log(value));
//   delay += step;
// }