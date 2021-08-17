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

// set event listeners
guessButton.addEventListener ('click', () => {
    let currentGuess = Number(userGuess.value);
    let result = compareNumbers (currentGuess, correctAnswer);
    if (result === 0) {
        resultsSpan.textContent = 'HOT DOG! You guessed it!';
        guessEl.style.display = 'none';
    }
    if (result === 1) {
        resultsSpan.textContent = 'Too high, try again.';
    }
    if (result === -1) {
        resultsSpan.textContent = 'Too low, try again.';
    }
    guessCount --;
    guessRem.textContent = guessCount;
    if (guessCount === 0) {
        resultsSpan.textContent = 'You had four tries but alas, the wizard wins again.';
        guessButton.disable = true;
        userGuess.disable = true;
        guessEl.style.display = 'none';
        resetButton.style.display = 'flex';
    }
});

resetButton.addEventListener ('click', () => {
    location.reload ();
});

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

  //making a function to compare numbers


