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
        disableInputForReplay();
    }
    if (result === 1) {
        resultsSpan.style.display = 'flex';
        resultsSpan.textContent = 'Too high, try again.';
        console.log ('too high');
    }
    if (result === -1) {
        resultsSpan.style.display = 'flex';
        resultsSpan.textContent = 'Too low, try again.';
        console.log ('too low');
    }
    if (guessCount === 1 && result !== 0) {
        resultsSpan.textContent = 'You had four tries but alas, the wizard takes the gold. Try again!';
        disableInputForReplay();
    }
    if (guessCount === 1 && result === 0) {
        userWin();
        disableInputForReplay();
    }
    decrementGuesses();
});

resetButton.addEventListener ('click', () => {
    location.reload ();
});

function disableInputForReplay() {
    guessButton.style.display = 'none';
    userGuess.style.display = 'none';
    guessEl.style.display = 'none';
    resetButton.style.display = 'flex';
}

function userWin() {
    resultsSpan.style.display = 'flex';
    resultsSpan.textContent = 'HOT DOG! You guessed it!';
}

function decrementGuesses() {
    guessCount --;
    guessRem.textContent = guessCount;
}
