// score tracker
let playerScore = 0;
let computerScore = 0;

// selection buttons
const choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    console.log(choice.textContent);
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
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissor";
      break;
    default:
      break;
  }
}

// plays a round of rock, paper, scissor
function playRound() {
  const playerSelection = prompt("rock, paper, or scissor?").toLowerCase();
  const computerSelection = getComputerChoice();

  console.log(
    `player hand: ${playerSelection}\ncomputer hand: ${computerSelection}`
  );

  // tie condition
  if (playerSelection === computerSelection) {
    console.log("tie!");
    playRound();
  }
  // lose conditions
  else if (playerSelection === "rock" && computerSelection === "paper") {
    console.log(`round lost! ${computerSelection} beats ${playerSelection}.`);
    return false;
  } else if (playerSelection === "paper" && computerSelection === "scissor") {
    console.log(`round lost! ${computerSelection} beats ${playerSelection}.`);
    return false;
  } else if (playerSelection === "scissor" && computerSelection === "rock") {
    console.log(`round lost! ${computerSelection} beats ${playerSelection}.`);
    return false;
  }
  // win conditions
  else if (playerSelection === "rock" && computerSelection === "scissor") {
    console.log(`round won! ${playerSelection} beats ${computerSelection}.`);
    return true;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log(`round won! ${playerSelection} beats ${computerSelection}.`);
    return true;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    console.log(`round won! ${playerSelection} beats ${computerSelection}.`);
    return true;
  }
}
