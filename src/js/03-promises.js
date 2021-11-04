const formRef = document.querySelector('.form');
const btnCreatePromisesRef = document.querySelector('.form > button');



//console.log(formRef.step);
//console.log(inputDelayRef);

//let delay = 0;
let firstDelay = 0;
let step = 0;
let amount = 0;

btnCreatePromisesRef.addEventListener('click', acceptData);

function acceptData(event) {
  event.preventDefault();
  // const formData = new FormData(formRef);
  // formData.forEach((value, name) => {
    
  //   console.log(value, name)
  firstDelay = Number((formRef['delay'].value));
  //delay = firstDelay;
  step = Number((formRef['step'].value));
  amount = Number((formRef['amount'].value));
  console.log(firstDelay);
  console.log(step);
  console.log(amount);
  createPromise(firstDelay, step, amount);
}


// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }

function createPromise(firstDelay, step, amount) {
  let delay = firstDelay;
  console.log('hhhhh',delay);
  for (let i = 1; i <= amount; i += 1) {
  new Promise(resolve => {
    setTimeout(() => resolve(i), delay);
  }).then(value => console.log(`Fulfilled promise ${value} in ${delay}`));
    delay += step;
    console.log('hhhhh',delay);
}
}
// const firstDelay = 1000;
// let delay = firstDelay;
// for (let i = 0; i < 3; i += 1) {
//   new Promise(resolve => {
//     setTimeout(() => resolve(i), delay);
//   }).then(value => console.log(value));
//   delay += step;
// }