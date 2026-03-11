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

function playRound(humanChoice, computerChoice) {
  let isPlayerWinner = false;

  if (humanChoice === computerChoice) {
    return 0;
  }

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    isPlayerWinner = true;
  }

  if (isPlayerWinner) {
    console.log(isPlayerWinner);
    return 1;
  } else {
    console.log(isPlayerWinner);
    return -1;
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  const div = document.querySelector("#rps");

  const introDiv = document.createElement("div");
  introDiv.classList.toggle("#intro");
  div.appendChild(introDiv);

  const para = document.createElement("p");
  para.textContent = "Choose your weapon against Evil Computer!";
  introDiv.appendChild(para);

  const choices = ["rock", "paper", "scissors"];

  choices.forEach((choice) => {
    const button = document.createElement("button");
    button.textContent = choice;
    div.appendChild(button);
  });

  const allButtons = div.querySelectorAll("button");

  const resultsDiv = document.createElement("div");
  resultsDiv.classList.toggle("#results");
  div.appendChild(resultsDiv);

  const resultsPara = document.createElement("p");
  resultsPara.textContent = "";
  resultsDiv.appendChild(resultsPara);

  const humanScorePara = document.createElement("p");
  humanScorePara.textContent = `Your score is: ${humanScore}`;
  resultsDiv.appendChild(humanScorePara);

  const computerScorePara = document.createElement("p");
  computerScorePara.textContent = `Computer score is: ${computerScore}`;
  resultsDiv.appendChild(computerScorePara);

  allButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const humanChoice = e.target.textContent.toLowerCase();
      const computerChoice = getComputerChoice();
      let result = playRound(humanChoice, computerChoice);
      console.log(result);

      if (result === 1 && humanScore === 4) {
        resultsPara.textContent =
          "Congratulations! You won the game! Play again by refreshing the page";
        humanScore++;
        humanScorePara.textContent = `Your score is: ${humanScore}`;
        allButtons.forEach((button) => {
          button.remove();
        });
      } else if (result === -1 && computerScore === 4) {
        resultsPara.textContent =
          "Unfortunately Evil Computer won. Try again by refreshing the page";
        computerScore++;
        computerScorePara.textContent = `Computer score: ${computerScore}`;
        allButtons.forEach((button) => {
          button.remove();
        });
      } else {
        if (result === 1) {
          resultsPara.textContent = `You won! Your '${humanChoice}' beats computer's '${computerChoice}'. Play a new round`;
          humanScore++;
          humanScorePara.textContent = `Your score is: ${humanScore}`;
        } else if (result === -1) {
          resultsPara.textContent = `You lost! Computer's '${computerChoice}' beats your '${humanChoice}'. Play a new round`;
          computerScore++;
          computerScorePara.textContent = `Computer score: ${computerScore}`;
        } else {
          resultsPara.textContent = `It's a tie! You both chose ${computerChoice}. Play a new round`;
        }
      }
    });
  });
}

playGame();
