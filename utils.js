export function compareNumbers(userInput, correctAnswer) {
    if (userInput > correctAnswer) {
        return 1;
    }
    if (userInput === correctAnswer) {
        return 0;
    }
    if (userInput < correctAnswer)
        return -1;
}