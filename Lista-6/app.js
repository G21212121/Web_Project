// Zmienne globalne:
const minRange = 1;
const maxRange = 100;
const defaultNumOfTries = 5;
let remainingTries;

const startBtnElem = document.getElementById("start-btn-element");
const numOfTriesInput = document.getElementById("num-tries-input")


// Funkcje:

function genRandomNumber() {
    return Math.floor(Math.random()*maxRange + minRange);
}


function startGame() {
    let numOfTries = parseInt(numOfTriesInput.value);

    if (isNaN(numOfTries) || numOfTries <= 0) {
        numOfTries = defaultNumOfTries;
    }

    const winningValue = genRandomNumber();
    let isCorrectlyGuessed = false;
}



// EventListener'y:

startBtnElem.addEventListener('click', startGame);