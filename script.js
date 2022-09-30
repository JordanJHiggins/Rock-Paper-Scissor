let choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

// Defining main container
const container = document.querySelector(".container");

// Defining game buttons for event listener
const rockButton = document.querySelector("#rock-button");
const paperButton = document.querySelector("#paper-button");
const scissorsButton = document.querySelector("#scissors-button");

// Defining player and computer score to update scores
const playerScoreCounter = document.querySelector("#playerScore");
const computerScoreCounter = document.querySelector("#computerScore");

// Defining score counter and game result to update game messages
const gameResult = document.querySelector(".game-result");
const scoreCounter = document.querySelector(".score-counter");

// Makes random selection for computer opponent
function getComputerChoice() {
  let randomChoice = choices[Math.floor(Math.random() * choices.length)];
  return randomChoice;
}

// Updates player and computer selections
rockButton.addEventListener("click", () => {
  let computerSelection = getComputerChoice();
  let playerSelection = "rock";
  playRound(computerSelection, playerSelection);
});

paperButton.addEventListener("click", () => {
  let computerSelection = getComputerChoice();
  let playerSelection = "paper";
  playRound(computerSelection, playerSelection);
});
scissorsButton.addEventListener("click", () => {
  let computerSelection = getComputerChoice();
  let playerSelection = "scissors";
  playRound(computerSelection, playerSelection);
});

// Plays a single round between computer and human and determine winner
function playRound(computerSelection, playerSelection) {
  if (computerSelection === playerSelection) {
    scoreCounter.innerHTML = `It's a tie! Computer chose ${computerSelection} and you chose ${playerSelection}`;
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    scoreCounter.innerHTML = `You lose! ${computerSelection} beats ${playerSelection}`;
    computerScore++;
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    scoreCounter.innerHTML = `You lose! ${computerSelection} beats ${playerSelection}`;
    computerScore++;
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    scoreCounter.innerHTML = `You lose! ${computerSelection} beats ${playerSelection}`;
    computerScore++;
  } else {
    scoreCounter.innerHTML = `You win! ${playerSelection} beats ${computerSelection}`;
    playerScore++;
  }
  playerScoreCounter.innerHTML = playerScore;
  computerScoreCounter.innerHTML = computerScore;
  game();
}

// Determines the winner of the game
function game() {
  if (playerScore >= 5) {
    gameResult.innerHTML = `Gameover! you win Player: ${playerScore} Computer: ${computerScore}`;
    disableButtons();
  } else if (computerScore >= 5) {
    gameResult.innerHTML = `Gameover! You lose Computer: ${computerScore} Player: ${playerScore}`;
    disableButtons();
  }
}
// disables selection buttons
function disableButtons() {
  rockButton.setAttribute("disabled", "disabled");
  paperButton.setAttribute("disabled", "disabled");
  scissorsButton.setAttribute("disabled", "disabled");
}
