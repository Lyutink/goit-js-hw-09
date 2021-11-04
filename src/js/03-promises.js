const formRef = document.querySelector('.form');
const btnCreatePromisesRef = document.querySelector('.form > button');



//console.log(formRef.step);
//console.log(inputDelayRef);

let delay = 0;
let step = 0;
let amount = 0;

btnCreatePromisesRef.addEventListener('click', acceptData);

function acceptData(event) {
  event.preventDefault();
  // const formData = new FormData(formRef);
  // formData.forEach((value, name) => {
    
  //   console.log(value, name)
  delay = (formRef['delay'].value);
  step = (formRef['step'].value);
  amount = (formRef['amount'].value);
  console.log(delay);
  console.log(step);
  console.log(amount);
}


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
