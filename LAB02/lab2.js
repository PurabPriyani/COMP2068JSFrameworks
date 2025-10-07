// lab2.js
const prompt = require("prompt");

// Start prompt
prompt.start();

// Asking the input from the user 
prompt.get(["userSelection"], function (err, result) {
  // displays the errors if any 
  if (err) {
    console.log("Error occurred.");
    return;
  }

  // Convert user input to uppercase so that it becomes case-insensitive
  let user = result.userSelection.toUpperCase();

  // generating a random computer choice 
  let randomNum = Math.random();
  let comp = "";

  if (randomNum <= 0.35) {
    comp = "PAPER";
  } else if (randomNum <= 0.63) {
    comp = "SCISSORS";
  } else {
    comp = "ROCK";
  }

  // display the user and computer choices
  console.log("Your choice:", user);
  console.log("Computer choice:", comp);

  // decision for getting the winner 
  if (user === comp) {
    console.log("It's a tie!");
  } else if (
    (user === "ROCK" && comp === "SCISSORS") ||
    (user === "PAPER" && comp === "ROCK") ||
    (user === "SCISSORS" && comp === "PAPER")
  ) {
    console.log("You Win!");
  } else {
    console.log("Computer Win!");
  }
});