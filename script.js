let choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

const container = document.querySelector(".container");
const rockButton = document.querySelector("#rock-button");
const paperButton = document.querySelector("#paper-button");
const scissorsButton = document.querySelector("#scissors-button");
const playerScoreCounter = document.querySelector("#playerScore");
const computerScoreCounter = document.querySelector("#computerScore");
const gameResult = document.querySelector(".game-result");
const scoreCounter = document.querySelector(".score-counter");

// random selection from choices array for computer opponent.
function getComputerChoice() {
  let randomChoice = choices[Math.floor(Math.random() * choices.length)];
  return randomChoice;
}

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

function game() {
  if (playerScore >= 5) {
    gameResult.innerHTML = `Gameover! you win Player: ${playerScore} Computer: ${computerScore}`;
    disableButtons();
  } else if (computerScore >= 5) {
    gameResult.innerHTML = `Gameover! You lose Computer: ${computerScore} Player: ${playerScore}`;
    disableButtons();
  }
}

function disableButtons() {
  rockButton.setAttribute("disabled", "disabled");
  paperButton.setAttribute("disabled", "disabled");
  scissorsButton.setAttribute("disabled", "disabled");
}
