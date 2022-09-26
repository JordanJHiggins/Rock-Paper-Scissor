let choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
const container = document.querySelector("#container");

// Random computer selection
function getComputerChoice() {
  let randomChoice = choices[Math.floor(Math.random() * choices.length)];
  return randomChoice;
}

const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");
const playerScoreCounter = document.createElement("h3");
const computerScoreCounter = document.createElement("h3");
const gameResult = document.createElement("h1");

rockButton.textContent = "Rock";
paperButton.textContent = "Paper";
scissorsButton.textContent = "Scissors";

rockButton.classList.add("rockButton");

container.appendChild(rockButton);
container.appendChild(paperButton);
container.appendChild(scissorsButton);
container.appendChild(playerScoreCounter);
container.appendChild(computerScoreCounter);

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

// Determine the winner and disable buttons
function game() {
  if (playerScore >= 5) {
    console.log(
      `Gameover! you win Player: ${playerScore} Computer: ${computerScore}`
    );
    rockButton.setAttribute("disabled", "disabled");
    paperButton.setAttribute("disabled", "disabled");
    scissorsButton.setAttribute("disabled", "disabled");
  } else if (computerScore >= 5) {
    console.log(
      `Gameover! You lose Computer: ${computerScore} Player: ${playerScore}`
    );
    rockButton.setAttribute("disabled", "disabled");
    paperButton.setAttribute("disabled", "disabled");
    scissorsButton.setAttribute("disabled", "disabled");
  }
}
