## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?
7) Think about how to validate each of your steps
8) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
9) Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.

## HTML
We need:
Rules/Explanation for user
One input - for the user to input their guess
One button - for the user to submit their guess
spans to display to the user:
    - tries remaining
    - if their guess was too high/low/correct
    - if they won or lost

## STATE
We're tracking:
    - the number of guesses remaining
    - the correct answer

## EVENT
When user clicks the Guess button
    - validate their input against our correctAnswer
    - decrement the guesses remaining
    - display to the user how their guess stacks up against the correct one
    - display how many guesses are remaining
    - when guesses remaining reaches 0 we need to display a won or lost message to the user