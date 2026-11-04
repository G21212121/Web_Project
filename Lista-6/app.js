// Zmienne globalne:
const minRange = 1;
const maxRange = 100;
const defaultNumOfTries = 5;
let remainingTries;

const startBtnElem = document.getElementById("start-btn-element");
const numOfTriesInput = document.getElementById("num-tries-input");

const mainElem = document.querySelector("main");
const startingHTML = mainElem.innerHTML;



// Funkcje:

function genRandomNumber() {
    return Math.floor(Math.random()*maxRange + minRange);
}


function startGame() {
    // window.prompt():
    let example = window.prompt("Przykładowe działanie window.prompt()", "example");
    //

    // parseFloat():
    let numOfTries = Math.floor(parseFloat(numOfTriesInput.value));

    if (isNaN(numOfTries) || numOfTries <= 0) {
        numOfTries = defaultNumOfTries;
    }

    const winningValue = genRandomNumber();
    let isCorrectlyGuessed = false;

    let maxTries = numOfTries;
    remainingTries = numOfTries;

    mainElem.innerHTML = `
        <article class="game-container">
            <section class="tries-counter">
                Pozostałe próby: <span id="tries-text">${remainingTries}</span>/${numOfTries}
            </section>
            <section id="hint-el" class="hint-display"></section>
            <section class="input-section">
                <input type="number" id="guess-input-el" class="guess-input" placeholder="1-100">
                <button id="check-btn-el" class="check-btn">Sprawdź</button>
            </section>
            <button id="restart-btn-el" class="restart-btn">Restart</button>
        </article>
    `;

    document.getElementById("check-btn-el").addEventListener("click", function () {
        checkNumber(winningValue);
    });
    document.getElementById("restart-btn-el").addEventListener("click", restartGame);
}



function checkNumber(winningValue) {
    const guessInput = document.getElementById("guess-input-el");
    const hintEl = document.getElementById("hint-el");
    const triesEl = document.getElementById("tries-text");

    let guess = parseInt(guessInput.value);

    if (isNaN(guess)) {
        window.alert("Wpisz poprawną liczbę!");
        return;
    }

    remainingTries--;
    triesEl.innerHTML = remainingTries;

    if (guess === winningValue) {
        hintEl.innerHTML = "WIN";
        blockGame();
    } else if (guess < winningValue) {
        hintEl.innerHTML = "<span style='color: green;'>&uarr;</span>";
    } else {
        hintEl.innerHTML = "<span style='color: red;'>&darr;</span>";
    }


    if (remainingTries <= 0 && guess !== winningValue) {
        hintEl.innerHTML = "<span style='color: red;'>X</span>";
        blockGame();
    }

    guessInput.value = "";
    guessInput.focus();
}



function blockGame() {
    document.getElementById("check-btn-el").disabled = true;
    document.getElementById("guess-input-el").disabled = true;
}

function restartGame() {
    mainElem.innerHTML = startingHTML;
    document.getElementById("start-btn-element").addEventListener("click", startGame);
}


// document.writeln:
document.writeln("<!-- Moduł gry załadowany pomyślnie -->");



// EventListener'y:

window.addEventListener('DOMContentLoaded', function() {
    startBtnElem.addEventListener('click', startGame);
});