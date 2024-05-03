# Harry Potter Guessing Game

## Description

This JavaScript code implements a simple Harry Potter guessing game. The game presents a series of questions to the player to guess a Harry Potter character. If the game guesses the character correctly, it wins, otherwise, it prompts the player to provide the correct character along with a distinguishing question to improve its guessing capabilities.

## Functions

displayQuestion(question): Displays a question on the screen.
displayAnswers(): Displays answer buttons on the screen.
displayInputFields(): Displays input fields to add a new character and question.
handleAnswer(answer): Handles user's answer to the current question.
resetGame(): Resets the game to its initial state.
initGame(): Initializes the game by displaying the first question.

## How it's created

The game is written in JavaScript and utilizes HTML for user interface elements. It dynamically loads the game tree structure from a JSON file (tree.json) using the Fetch API. The tree structure defines the questions and branching logic used by the game to guess characters.

## Try it out

You can try the game by accessing the demo page, where it's hosted. Have fun guessing Harry Potter characters! https://sabr5840.github.io/20-questions/
