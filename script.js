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

function play(playerChoice) {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = choices[Math.floor(Math.random() * choices.length)];
  console.log(`Computer: ${randomChoice}, Player: ${playerChoice}`);

  playerChoiceDisplay.textContent = `You chose: ${playerChoice}`;
  computerChoiceDisplay.textContent = `Computer chose: ${randomChoice}`;

  displayResult.classList.remove("tie", "win", "lost");

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
}

function win() {
  const winMsgs = [
    "Wow, you are getting good!",
    "Tch.",
    "I went easy on you",
    "Bruh.",
    "Nah, I am gonna quit",
    "You got lucky, fork!",
    "What?!",
    "I’m throwing my keyboard!",
    "Okay, toddler, calm down!",
    "You’re making me look like a rookie...",
    "Pfft, beginner’s luck!",
    "I wasn’t even trying 눈_눈",
    "You’re not supposed to win that.",
    "My circuits are overheating!",
    "Alright, you’re kinda scary good.",
  ];
  const winMsg = winMsgs[Math.floor(Math.random() * winMsgs.length)];
  displayResult.textContent = winMsg;
  displayResult.classList.add("win");
  playerScore++;
  playerScoreDisplay.textContent = `Player Score: ${playerScore} `;
}

function lose() {
  const loseMsgs = [
    "Lmao wtf such a noob",
    "Never play with me again.",
    "stupid.",
    "that was too easy",
    "HAH! TAKE THAT",
    "You call that a move?!",
    "Go do some squats.",
    "My infant plays better!",
    "Oof, that was embarrassing...",
    "You just got SCREWED!",
    "I’m laughing so hard right now!",
    "What was that supposed to be?",
    "I could beat you unconscious",
    "You’re no fun.",
    "Git gud.",
  ];
  const loseMsg = loseMsgs[Math.floor(Math.random() * loseMsgs.length)];
  displayResult.textContent = loseMsg;
  displayResult.classList.add("lost");
  computerScore++;
  computerScoreDisplay.textContent = `Computer Score: ${computerScore} `;
}

function tie() {
  displayResult.classList.add("tie");
  ties++;
  if (ties > 5) {
    const manyTieMsgs = [
      "WTF? too many ties.",
      "SToP CopYing ME!",
      "This is getting boring.",
      "We’re too in sync, let's kiss.",
      "We should make out",
      "screw this game, tie again!",
      "Are we twins or what?",
      "Ugh, my brain hurts. Tie.",
      "Tie.",
      "Ugh! Tie",
      "just why?",
      "tie (┬┬﹏┬┬)",
      "Boring! Tie again!",
      "weirdo!",
      "Tie? Yawn.",
      "What is this, a stalemate?",
    ];
    const manyTieMsg =
      manyTieMsgs[Math.floor(Math.random() * manyTieMsgs.length)];
    displayResult.textContent = manyTieMsg;
  } else {
    const tieMsgs = [
      "Tie.",
      "Ugh! Tie",
      "just why?",
      "tie (┬┬﹏┬┬)",
      "Boring! Tie again!",
      "weirdo!",
      "Tie? Yawn.",
      "What is this, a stalemate?",
    ];
    const tieMsg = tieMsgs[Math.floor(Math.random() * tieMsgs.length)];
    displayResult.textContent = tieMsg;
  }
}
