const bodyRef = document.querySelector('body');
const btnStartRef = document.querySelector('button[data-start]');
const btnStopRef = document.querySelector('button[data-stop]');

btnStartRef.addEventListener('click', changeColor);
btnStopRef.addEventListener('click', stopChangeColor);

let flagChangeColor = false;

function changeColor() {
    if (!flagChangeColor) {
        flagChangeColor = true;
        bodyRef.style.backgroundColor = getRandomHexColor();
        timerId = setInterval(() => {
            bodyRef.style.backgroundColor = getRandomHexColor();
        }, 1000);
    }
}

function stopChangeColor() {
    flagChangeColor = false;
    clearInterval(timerId);
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}



