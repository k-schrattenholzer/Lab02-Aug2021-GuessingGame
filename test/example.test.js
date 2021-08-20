// IMPORT MODULES under test here:
import { compareNumbers } from '../utils.js';

const test = QUnit.test;

test('when the user guesses 1, and the wizard declares 4, function should return -1', (expect) => {
    const expected = -1;

    const actual = compareNumbers(1, 4);
    
    expect.equal(actual, expected);
});

test('when the user guesses 6, and the wizard declares 3, function should return 1', (expect) => {
    const expected = 1;

    const actual = compareNumbers(6, 3);

    expect.equal(actual, expected);
});

test('when the user guesses 7, and the wizard declares 7, function should return 0', (expect) => {
    const expected = 0;

    const actual = compareNumbers(7, 7);

    expect.equal(actual, expected);
});
