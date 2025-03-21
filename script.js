function getComputerChoice() {
  // Generate a number from 0 to 2
  let num = Math.floor(Math.random() * 3);
  // Check number; 0 = scissors, 1 = paper, 2 = stone
  if (num == 0) return "scissors";
  else if (num == 1) return "paper";
  else return "stone";
}

function getHumanChoice() {
  let choice = prompt("Enter scissors, paper or stone!");
  return choice.toLowerCase();
}

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  switch (true) {
    case humanChoice == computerChoice:
      update("tie");
      break;
    case humanChoice == "scissors" && computerChoice == "paper":
    case humanChoice == "paper" && computerChoice == "stone":
    case humanChoice == "stone" && computerChoice == "scissors":
      update("human", computerChoice);
      break;
    case computerChoice == "scissors" && humanChoice == "paper":
    case computerChoice == "paper" && humanChoice == "stone":
    case computerChoice == "stone" && humanChoice == "scissors":
      update("computer", computerChoice);
      break;
    default:
      console.log("ERROR: No winner");
  }
}

function update(winner, computerChoice) {
  const scoreboard = document.querySelector(".score");
  const round = document.querySelector("#round");
  const header = document.querySelector("h3");

  let human = Number(scoreboard.textContent[0]);
  let cpu = Number(scoreboard.textContent[4]);
  let curRound = Number(round.textContent.slice(5));

  if (winner == "human") {
    header.textContent = `You win! Computer chose ${computerChoice}!`;
    human += 1;
  } else if (winner == "computer") {
    header.textContent = `You lose! Computer chose ${computerChoice}!`;
    cpu += 1;
  } else {
    header.textContent = "It's a tie!";
  }

  if (human == 5 || cpu == 5) {
    showGameOver(human, cpu);
    scoreboard.textContent = "0 : 0";
  } else {
    scoreboard.textContent = `${human} : ${cpu}`;
    round.textContent = `Round ${(curRound += 1)}`;
  }
}

function showGameOver(human, cpu) {
  const game = document.querySelector(".game");
  game.querySelector("h1").textContent = "Game Over!";
  if (human < cpu) game.querySelector("h3").textContent = "You Lost! :(";
  if (cpu < human) game.querySelector("h3").textContent = "You Win! :)";

  // Remove elements but store them in memory
  const buttons = game.removeChild(document.querySelector(".buttons"));
  const scoreboard = game.removeChild(document.querySelector(".scoreboard"));

  const playBtn = document.createElement("button");
  playBtn.classList.add("playBtn");
  playBtn.textContent = "Play Again";
  playBtn.style.cssText = "border-radius: 10px; padding: 20px 40px;";
  playBtn.addEventListener("click", refresh);

  game.appendChild(playBtn);
}

function refresh() {
  window.location.reload();
}

function playGame() {
  const buttons = document.querySelectorAll("button");
  for (button of buttons) {
    button.addEventListener("click", (e) => playRound(e.currentTarget.id));
  }
}

playGame();
