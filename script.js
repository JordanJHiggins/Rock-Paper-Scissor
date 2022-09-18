let choices = ["Rock", "Paper", "Scissors"];

// Random computer selection
function getComputerChoice() {
  let randomChoice = choices[Math.floor(Math.random() * choices.length)];
  return randomChoice;
}

// Get player selection
// let playerSelection = window.prompt("Make a selection: ");
// let computerSelection = getComputerChoice();

// Play a round between comp and human player
function playRound(computerSelection, playerSelection) {
  if (computerSelection === playerSelection) {
    console.log(
      `It's a tie! Computer chose ${computerSelection} and you chose ${playerSelection}`
    );
  } else if (computerSelection === "Rock" && playerSelection === "Scissors") {
    console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    computerScore++;
  } else if (computerSelection === "Paper" && playerSelection === "Rock") {
    console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    computerScore++;
  } else if (computerSelection === "Scissors" && playerSelection === "Paper") {
    `You lose! ${computerSelection} beats ${playerSelection}`;
    computerScore++;
  } else {
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    playerScore++;
  }
}

let tie = 0;
let playerScore = 0;
let computerScore = 0;

function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = window.prompt("Make a selection: ");
    let computerSelection = getComputerChoice();
    playRound(computerSelection, playerSelection);
  }

  if (playerScore > computerScore) {
    console.log(
      `Gameover! you win Player: ${playerScore} Computer: ${computerScore}`
    );
  } else if (computerScore > playerScore) {
    console.log(
      `Gameover! You lose Computer: ${computerScore} Player: ${playerScore}`
    );
  }
}

game();
