// score tracker
let playerScore = 0;
let computerScore = 0;

// selection buttons
const choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    console.log(choice);

    playRound(choice);
  });
});

// start game
const startBtn = document.querySelector(".startBtn");
startBtn.addEventListener("click", startGame);

// starts game
function startGame() {
  const selectionBtns = document.querySelector(".selectionBtns");

  // toggle visibility
  startBtn.classList.toggle("hide");
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
