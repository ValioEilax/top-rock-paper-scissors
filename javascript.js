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

console.log(getComputerChoice());
console.log(getHumanChoice());
