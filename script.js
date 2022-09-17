let choices = ["Rock", "Paper", "Scissors"];

// Random computer selection
function getComputerChoice() {
  let randomChoice = choices[Math.floor(Math.random() * choices.length)];
  return randomChoice;
}

// Get player selection
let playerSelection = "Rock";
let computerSelection = getComputerChoice();

// Play a round between comp and human player
function playRound(computerSelection, playerSelection) {
  let tie = 0;
  let playerScore = 0;
  let computerScore = 0;

  if (computerSelection === playerSelection) {
    console.log(
      `It's a tie! Computer chose ${computerSelection} and you chose ${playerSelection}`
    );
    tie++;
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
console.log(playRound(computerSelection, playerSelection));
