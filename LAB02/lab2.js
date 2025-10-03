// lab2.js
const prompt = require("prompt");

// Start prompt
prompt.start();

// Ask user for input
prompt.get(["userSelection"], function (err, result) {
  if (err) {
    console.log("Error occurred.");
    return;
  }

  // Convert user input to uppercase
  let userSelection = result.userSelection.toUpperCase();

  // Generate computer choice
  let randomNum = Math.random();
  let computerSelection = "";

  if (randomNum <= 0.34) {
    computerSelection = "PAPER";
  } else if (randomNum <= 0.67) {
    computerSelection = "SCISSORS";
  } else {
    computerSelection = "ROCK";
  }

  // Show choices
  console.log("User chose:", userSelection);
  console.log("Computer chose:", computerSelection);

  // Decide winner
  if (userSelection === computerSelection) {
    console.log("It's a tie!");
  } else if (
    (userSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (userSelection === "PAPER" && computerSelection === "ROCK") ||
    (userSelection === "SCISSORS" && computerSelection === "PAPER")
  ) {
    console.log("User Wins!");
  } else {
    console.log("Computer Wins!");
  }
});
