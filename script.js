let choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
const container = document.querySelector(".container");
const rockButton = document.querySelector("#rock-button");
const paperButton = document.querySelector("#paper-button");
const scissorsButton = document.querySelector("#scissors-button");

// Random computer selection
function getComputerChoice() {
  let randomChoice = choices[Math.floor(Math.random() * choices.length)];
  return randomChoice;
}

// const rockButton = document.createElement("button");
// const paperButton = document.createElement("button");
// const scissorsButton = document.createElement("button");
const playerScoreCounter = document.createElement("h3");
const computerScoreCounter = document.createElement("h3");
const gameResult = document.createElement("h1");

// rockButton.textContent = "Rock";
// paperButton.textContent = "Paper";
// scissorsButton.textContent = "Scissors";

// container.appendChild(rockButton);
// container.appendChild(paperButton);
// container.appendChild(scissorsButton);
container.appendChild(playerScoreCounter);
container.appendChild(computerScoreCounter);
container.appendChild(gameResult);

// On click update player and computer selections
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

// Play a single round between computer and human
function playRound(computerSelection, playerSelection) {
  if (computerSelection === playerSelection) {
    console.log(
      `It's a tie! Computer chose ${computerSelection} and you chose ${playerSelection}`
    );
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    computerScore++;
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    computerScore++;
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    `You lose! ${computerSelection} beats ${playerSelection}`;
    computerScore++;
  } else {
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    playerScore++;
  }
  playerScoreCounter.innerHTML = playerScore;
  computerScoreCounter.innerHTML = computerScore;
  game();
}

// Determine the winner,
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
