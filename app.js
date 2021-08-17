// import functions and grab DOM elements
import { compareNumbers } from './utils.js';

const userGuess = document.getElementById('user-guess');
const guessButton = document.getElementById('guess-button');
const resultsSpan = document.getElementById('results');
const guessRem = document.getElementById('guess-rem');
const guessEl = document.getElementById('guesses');
const resetButton = document.getElementById('reset-button');

// initialize state
let guessCount = 4;
let correctAnswer = Math.ceil ((Math.random ()) * 20);

// set event listeners for guess and reset buttons
guessButton.addEventListener ('click', () => {
    console.log(correctAnswer);
    let currentGuess = Number(userGuess.value);
    let result = compareNumbers (currentGuess, correctAnswer);

    guessEl.style.display = 'block';

    if (result === 0) {
        userWin();
        disableForReplay();
    }
    if (result === 1) {
        displayResults();
        resultTooHigh();
    }
    if (result === -1) {
        resultTooLow();
        displayResults();
    }
    if (guessCount === 1 && result !== 0) {
        userLoss();
        disableForReplay();
    }
    if (guessCount === 1 && result === 0) {
        userWin();
        disableForReplay();
    }
    decrementGuesses();
});

resetButton.addEventListener ('click', () => {
    location.reload ();
});

function disableForReplay() {
    guessButton.style.display = 'none';
    userGuess.style.display = 'none';
    guessEl.style.display = 'none';
    resetButton.style.display = 'flex';
}

function userWin() {
    resultsSpan.style.display = 'flex';
    resultsSpan.textContent = 'HOT DOG! You guessed it!';
}

function userLoss() {
    resultsSpan.textContent = 'You had four tries but alas, the wizard takes the gold. Try again!';
}

function decrementGuesses() {
    guessCount --;
    guessRem.textContent = guessCount;
}

function displayResults() {
    resultsSpan.style.display = 'block';
}

function resultTooHigh() {
    resultsSpan.textContent = 'Too high, try again.';
}

function resultTooLow() {
    resultsSpan.textContent = 'Too low, try again.';
}