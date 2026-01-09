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
    alert("It's a tie! Play a new round");
    return 0;
  }

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    isPlayerWinner = true;

    if (isPlayerWinner) {
      alert(
        `You won! Your '${humanChoice}' beats computer's '${computerChoice}'. Play a new round`
      );
      return 1;
    }
  } else {
    alert(
      `You lost! Computer's '${computerChoice}' beats your '${humanChoice}'. Play a new round`
    );
    return -1;
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  alert(
    "Lets play a game of Rock, Paper and Scissors against computer! Start the game by pressing 'OK'"
  );

  while (humanScore < 5 && computerScore < 5) {
    alert(`Game Score\nPlayer: ${humanScore}\nComputer: ${computerScore}`);

    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);

    if (result === 1) humanScore++;
    if (result === -1) computerScore++;
  }

  if (humanScore === 5) alert("Congratulations!! You won!");
  if (computerScore === 5) alert("Too bad, you lost. Try again!");
}

playGame();
