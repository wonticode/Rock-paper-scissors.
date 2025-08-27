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
    const epicWinMsgs = [
      "You’re a freakin’ LEGEND!",
      "I’m uninstalling myself, you win!",
      "This is unfair, you’re too OP!",
      "You’re breaking the game, bro!",
      "I’m calling the devs, this is hacked!",
      "I am gonna kill you",
      "I am crying, stop it!",
      "You’re unstoppable, I give up!",
      "This is some next-level wizardry!",
      "I’m out, you’re too savage!",
      "You’re making me look like a rookie...",
    ];
    winMsg = epicWinMsgs[Math.floor(Math.random() * epicWinMsgs.length)];
  } else if (playerScore > 5) {
    const manyWinMsgs = [
      "Okay, you’re on a roll, chill!",
      "I’m starting to hate you...",
      "You’re making this look easy!",
      "Slow down, hotshot!",
      "This is getting ridiculous!",
      "You’re embarrassing me now!",
      "I need a nerf patch for you!",
      "Stop flexing, dang it!",
      "You’re too good, it’s annoying!",
      "I’m sweating, you monster!",
      "Alright, you’re kinda scary good.",
      "Wow, you are getting good!",
    ];
    winMsg = manyWinMsgs[Math.floor(Math.random() * manyWinMsgs.length)];
  } else {
    const winMsgs = [
      "Tch.",
      "I went easy on you",
      "Bruh.",
      "Nah, I am gonna quit",
      "You got lucky, fork!",
      "What?!",
      "I’m throwing my keyboard!",
      "Okay, toddler, calm down!",
      "Pfft, beginner’s luck!",
      "I wasn’t even trying 눈_눈",
      "You’re not supposed to win that.",
    ];
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
    const epicLoseMsgs = [
      "You’re getting DESTROYED, lol!",
      "I’m BUILT for this!",
      "You’re my punching bag, bro!",
      "This is just sad to watch...",
      "(￣y▽￣)╭ Ohohoho.....",
      "You’re out of your league",
      "HAHAHAHAHAHAHAHHAHAHAHAHHAHAHAHAHAHAHHAHAHAHAH",
      "You’re a glitch in my win streak",
      "Just quit lol",
      "Go cry to your mom, loser!",
      "I’m laughing so hard right now!",
    ];
    loseMsg = epicLoseMsgs[Math.floor(Math.random() * epicLoseMsgs.length)];
  } else if (computerScore > 5) {
    const manyLoseMsgs = [
      "I’m superior.",
      "You’re losing your identity",
      "This is too easy, lmao",
      "I’m eating you alive!",
      "You’re getting fried XD",
      "I’m the boss here, mwahahha",
      "Keep losing, it suits you!",
      "Crabby crabby",
      "You’re my warm-up",
      "This is too sad",
    ];
    loseMsg = manyLoseMsgs[Math.floor(Math.random() * manyLoseMsgs.length)];
  } else {
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
      "What was that supposed to be?",
      "I could beat you unconscious",
      "You’re no fun.",
      "Git gud.",
    ];
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
    const manyTieMsgs = [
      "WTF? too many ties.",
      "SToP CopYing ME!",
      "This is getting boring.",
      "We’re too in sync, let's kiss.",
      "I am gonna kill you",
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
      "TIEEEEE",
      "Tie?",
      "TIE TIE TIE",
      "UGHH",
    ];
    const tieMsg = tieMsgs[Math.floor(Math.random() * tieMsgs.length)];
    displayResult.textContent = tieMsg;
  }
  updateBackground("tie");
}
