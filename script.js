let choices = ["rock", "paper", "scissors"];

// Random computer selection
function getComputerChoice() {
  let randomChoice = choices[Math.floor(Math.random() * choices.length)];
  return randomChoice;
}

// Play a single round between comp and human player (console.logs will become returns when GUI is added)
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
}

// Score counter variables
let playerScore = 0;
let computerScore = 0;

// Initialize a game of 5 rounds (console.logs will become returns when GUI is added)
function game() {
  for (let i = 0; i < 20; i++) {
    let playerSelection = window.prompt("Make a selection: ").toLowerCase();
    let computerSelection = getComputerChoice().toLowerCase();

    if (playerScore === 5) {
      console.log(
        `Gameover! you win Player: ${playerScore} Computer: ${computerScore}`
      );
      return;
    } else if (computerScore === 5) {
      console.log(
        `Gameover! You lose Computer: ${computerScore} Player: ${playerScore}`
      );
      return;
    }
    playRound(computerSelection, playerSelection);
  }
}

game();
