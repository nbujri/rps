// score tracker
let playerScore = 0;
let computerScore = 0;

// selection buttons
const choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    console.log(choice);

    const playerWin = playRound(choice);

    if (playerWin !== "tie") {
      playerWin ? (playerScore += 1) : (computerScore += 1);
    }

    // display scores
    const playerScoreDisplay = document.querySelector(".playerScore");
    const computerScoreDisplay = document.querySelector(".computerScore");
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;

    if (playerScore === 3 || computerScore === 3) {
      const resultDisplay = document.querySelector(".roundResult");

      if (playerScore > computerScore) {
        resultDisplay.textContent = "Congratulations! You Win!";
      } else {
        resultDisplay.textContent = "You Lose";
      }

      resetGame();
    }
  });
});

// start game
const startBtn = document.querySelector(".startBtn");
startBtn.addEventListener("click", startGame);

// starts game
function startGame() {
  // get ui elements
  const selectionBtns = document.querySelector(".selectionBtns");
  const playerScoreDisplay = document.querySelector(".playerScore");
  const computerScoreDisplay = document.querySelector(".computerScore");
  const resultDisplay = document.querySelector(".roundResult");

  // toggle visibility
  startBtn.classList.toggle("hide");
  selectionBtns.classList.toggle("hide");

  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
  resultDisplay.textContent = "";
}

function resetGame() {
  // get ui elements
  const selectionBtns = document.querySelector(".selectionBtns");

  // toggle visibility
  startBtn.classList.toggle("hide");
  startBtn.textContent = "Play Again";
  selectionBtns.classList.toggle("hide");

  // reset score when playing again
  playerScore = 0;
  computerScore = 0;
}

// returns rock, paper, or scissor for computer player
function getComputerChoice() {
  const random = Math.floor(Math.random() * 3);
  console.log(random);

  switch (random) {
    case 0:
      return ["rock", "🪨"];
      break;
    case 1:
      return ["paper", "📜"];
      break;
    case 2:
      return ["scissor", "✂️"];
      break;
    default:
      break;
  }
}

// plays a round of rock, paper, scissor
function playRound(choice) {
  // store selections
  const playerSelection = choice.value;
  const computerSelection = getComputerChoice();
  console.log(computerSelection);

  // get ui elements
  const playerHand = document.querySelector(".playerHand");
  const computerHand = document.querySelector(".computerHand");
  const resultDisplay = document.querySelector(".roundResult");

  // display choices
  playerHand.textContent = choice.textContent;
  computerHand.textContent = computerSelection[1];

  // tie condition
  if (playerSelection === computerSelection[0]) {
    resultDisplay.textContent = "tie!";
    return "tie";
  }
  // lose conditions
  else if (playerSelection === "rock" && computerSelection[0] === "paper") {
    resultDisplay.textContent = `round lost! ${computerSelection[0]} beats ${playerSelection}.`;
    return false;
  } else if (
    playerSelection === "paper" &&
    computerSelection[0] === "scissor"
  ) {
    resultDisplay.textContent = `round lost! ${computerSelection[0]} beats ${playerSelection}.`;
    return false;
  } else if (playerSelection === "scissor" && computerSelection[0] === "rock") {
    resultDisplay.textContent = `round lost! ${computerSelection[0]} beats ${playerSelection}.`;
    return false;
  }
  // win conditions
  else if (playerSelection === "rock" && computerSelection[0] === "scissor") {
    resultDisplay.textContent = `round won! ${playerSelection} beats ${computerSelection[0]}.`;
    return true;
  } else if (playerSelection === "paper" && computerSelection[0] === "rock") {
    resultDisplay.textContent = `round won! ${playerSelection} beats ${computerSelection[0]}.`;
    return true;
  } else if (
    playerSelection === "scissor" &&
    computerSelection[0] === "paper"
  ) {
    resultDisplay.textContent = `round won! ${playerSelection} beats ${computerSelection[0]}.`;
    return true;
  }
}
