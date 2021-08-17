// import functions and grab DOM elements
const userGuess = document.getElementById('user-guess');
const guessButton = document.getElementById('guess-button');
const resultsSpan = document.getElementById('results');
const guessRem = document.getElementById('guess-rem');

// initialize state
let guessCount = 4;
let correctAnswer = Math.ceil ((Math.random ()) * 20);

// set event listeners
guessButton.addEventListener ('click', () => {
    guessCount --;
    guessRem.textContent = guessCount;
    let currentGuess = Number(userGuess.value);
    let result = compareNumbers (currentGuess, correctAnswer);
    if (result === 0) {
        resultsSpan.textContent = 'HOT DOG! You guessed it!';
    }
    if (result === 1) {
        resultsSpan.textContent = 'Too high';
    }
    if (result === -1) {
        resultsSpan.textContent = 'Too low';
    }

});

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

  //making a function to compare numbers
export function compareNumbers (userInput, correctAnswer) {
    if (userInput > correctAnswer) {
        return 1;
    }
    if (userInput === correctAnswer) {
        return 0;
    }
    if (userInput < correctAnswer)
        return -1;
}

