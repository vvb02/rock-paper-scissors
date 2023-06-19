//create game options

const options = {
  rock: {
    name: "rock",
    beats: "scissors",
  },
  scissors: {
    name: "scissors",
    beats: "paper",
  },
  paper: {
    name: "paper",
    beats: "rock",
  },
};

// initialize scores
let compChoiceEl = document.querySelector("#player-score");
let playerChoiceEl = document.querySelector("#computer-score");
let computerScore = 0;
let playerScore = 0;
compChoiceEl.textContent = `Computer Score: ${computerScore}`;
playerChoiceEl.textContent = `Your Score: ${playerScore}`;

// get computers choice
const handleComputerChoice = () => {
  const optionsArray = Object.keys(options);
  return optionsArray[Math.floor(Math.random() * optionsArray.length)];
};

// get users choice
const handlePlayerChoice = (e) => {
  return e.currentTarget.id;
};
const optionsButtons = document.querySelectorAll(".game-options");
console.log(optionsButtons);
optionsButtons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const playersChoice = handlePlayerChoice(event);
    const computersChoice = handleComputerChoice();
    playRound(computersChoice, playersChoice);
  });
});

//play round
const playRound = (computersChoice, playersChoice) => {
  if (options[computersChoice].beats === playersChoice) {
    computerScore++;
    compChoiceEl.textContent = `Computer Score: ${computerScore}`;
  } else if (options[playersChoice].beats === computersChoice) {
    playerScore++;
    playerChoiceEl.textContent = `Your Score: ${playerScore}`;
  }
  if (playerScore === 3 || computerScore === 3) {
    optionsButtons.forEach((btn) => {
      btn.disabled = true;
      result();
    });
  }
};

// show result
let resultEl = document.querySelector("#result");
const result = () => {
  console.log(resultEl);
  if (computerScore === playerScore) {
    resultEl.textContent = "It's a tie!";
  } else if (playerScore > computerScore) {
    resultEl.textContent = "You Win!";
  } else if (computerScore > playerScore) {
    resultEl.textContent = "You Lose";
  }
};

// restart game
const restartBtn = document.querySelector("#restart");
const restartGame = () => {
  optionsButtons.forEach((btn) => {
    btn.disabled = false;
  });

  computerScore = 0;
  playerScore = 0;
  compChoiceEl.textContent = `Computer Score: ${computerScore}`;
  playerChoiceEl.textContent = `Your Score: ${playerScore}`;
  resultEl.textContent = "";
};
restartBtn.addEventListener("click", restartGame);
