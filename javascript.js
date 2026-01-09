const humanScore = 0;
const computerScore = 0;

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);

  if (random === 0) {
    return "rock";
  } else if (random === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let humanChoice = prompt(
    "Choose your weapon! Type 'rock', 'paper' or 'scissors': "
  );

  return humanChoice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  let isPlayerWinner = false;

  if (humanChoice === computerChoice) {
    alert("It's a tie! Play new round");
    return;
  }

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    isPlayerWinner = true;
  }

  if (isPlayerWinner) {
    alert(
      `You won! Your '${humanChoice}' wins computer's '${computerChoice}'. Play a new round`
    );
    humanScore += 1;
  } else {
    alert(
      `You lost! Computer's '${computerChoice}' wins your '${humanChoice}'. Play a new round`
    );
    computerScore += 1;
  }
}

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

console.log(playRound(humanChoice, computerChoice));
