import {
  epicWinMsgs,
  manyWinMsgs,
  winMsgs,
  epicLoseMsgs,
  manyLoseMsgs,
  loseMsgs,
  tieMsgs,
  manyTieMsgs,
} from "./msgs.js";

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const playerChoiceDisplay = document.getElementById("playerChoice");
const computerChoiceDisplay = document.getElementById("computerChoice");
const displayResult = document.getElementById("displayMsg");
const playerScoreDisplay = document.getElementById("playerScore");
const computerScoreDisplay = document.getElementById("computerScore");
let playerScore = 0;
let computerScore = 0;
let ties = 0;
let isGameLocked = false;

// Sound effect
const winSound = new Audio("sound-effects/victory.mp3");

// background update based on game outcome
function updateBackground(result) {
  let backgroundColor;
  switch (result) {
    case "win":
      backgroundColor = "#4caf50";
      break;
    case "lost":
      backgroundColor = "#f44336";
      break;
    case "tie":
      backgroundColor = "#5c6b77ff";
      break;
    default:
      backgroundColor = "#bbbbed";
  }
  document.body.style.backgroundColor = backgroundColor;
}

// disable buttons during delay
function toggleButtons(disabled) {
  rockBtn.disabled = disabled;
  paperBtn.disabled = disabled;
  scissorsBtn.disabled = disabled;
}

// THE MAIN FUNCTION
function play(playerChoice) {
  if (isGameLocked) return;
  isGameLocked = true;
  toggleButtons(true);

  const choices = ["rock", "paper", "scissors"];
  const randomChoice = choices[Math.floor(Math.random() * choices.length)];

  playerChoiceDisplay.textContent = `You chose: ${playerChoice}`;
  computerChoiceDisplay.textContent = `Computer: ${randomChoice}`;
  setTimeout(() => {
    displayResult.classList.remove("tie", "win", "lost");
  }, 1500);

  // Delay result processing by 1.5 seconds
  setTimeout(() => {
    if (randomChoice === playerChoice) {
      tie();
    } else {
      switch (playerChoice) {
        case "paper":
          randomChoice === "rock" ? win() : lose();
          break;
        case "rock":
          randomChoice === "scissors" ? win() : lose();
          break;
        case "scissors":
          randomChoice === "paper" ? win() : lose();
          break;
      }
    }
    isGameLocked = false;
    toggleButtons(false);
  }, 1500);
}

// reset game after score 12
function resetGame(endMsg, resultClass) {
  displayResult.textContent = endMsg;
  displayResult.classList.add(resultClass);
  playerScore = 0;
  computerScore = 0;
  ties = 0;
  playerScoreDisplay.textContent = `Your Score: ${playerScore} `;
  computerScoreDisplay.textContent = `Computer Score: ${computerScore} `;
  playerChoiceDisplay.textContent = "";
  computerChoiceDisplay.textContent = "";
  updateBackground("default");
}

// ------------------------------ WIN FUNCTION ----------------------------
function win() {
  playerScore++;
  let winMsg;
  if (playerScore >= 12) {
    const scoreDiff = Math.abs(playerScore - computerScore);
    winMsg =
      scoreDiff > 5 ? "OK FUCK, I GIVE UP." : "Man, fine. I am tired now, bye.";
    resetGame(winMsg, "win");
    return;
  }
  if (playerScore > 10) {
    winMsg = epicWinMsgs[Math.floor(Math.random() * epicWinMsgs.length)];
  } else if (playerScore > 5) {
    winMsg = manyWinMsgs[Math.floor(Math.random() * manyWinMsgs.length)];
  } else {
    winMsg = winMsgs[Math.floor(Math.random() * winMsgs.length)];
  }
  displayResult.textContent = winMsg;
  displayResult.classList.add("win");
  playerScoreDisplay.textContent = `Player Score: ${playerScore} `;
  updateBackground("win");
  winSound.play().catch((error) => console.log("Win sound failed:", error));
}

// ------------------------- LOSE ------------------------------------
function lose() {
  computerScore++;
  let loseMsg;
  if (computerScore >= 12) {
    const scoreDiff = Math.abs(playerScore - computerScore);
    loseMsg =
      scoreDiff > 5 ? "LMAO, YOU’RE DONE!" : "Pfft, you’re a noob, I win!";
    resetGame(loseMsg, "lost");
    return;
  }
  if (computerScore > 10) {
    loseMsg = epicLoseMsgs[Math.floor(Math.random() * epicLoseMsgs.length)];
  } else if (computerScore > 5) {
    loseMsg = manyLoseMsgs[Math.floor(Math.random() * manyLoseMsgs.length)];
  } else {
    loseMsg = loseMsgs[Math.floor(Math.random() * loseMsgs.length)];
  }
  displayResult.textContent = loseMsg;
  displayResult.classList.add("lost");
  computerScoreDisplay.textContent = `Computer Score: ${computerScore} `;
  updateBackground("lost");
}

// -------------- for TIES ------------------------
function tie() {
  displayResult.classList.add("tie");
  ties++;
  if (ties > 5) {
    const manyTieMsg =
      manyTieMsgs[Math.floor(Math.random() * manyTieMsgs.length)];
    displayResult.textContent = manyTieMsg;
  } else {
    const tieMsg = tieMsgs[Math.floor(Math.random() * tieMsgs.length)];
    displayResult.textContent = tieMsg;
  }
  updateBackground("tie");
}

rockBtn.addEventListener("click", () => play("rock"));
paperBtn.addEventListener("click", () => play("paper"));
scissorsBtn.addEventListener("click", () => play("scissors"));
