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

function playRound(humanChoice, computerChoice) {
  switch (true) {
    case humanChoice == computerChoice:
      return "tie";
    case humanChoice == "scissors" && computerChoice == "paper":
    case humanChoice == "paper" && computerChoice == "stone":
    case humanChoice == "stone" && computerChoice == "scissors":
      return "human";
    case computerChoice == "scissors" && humanChoice == "paper":
    case computerChoice == "paper" && humanChoice == "stone":
    case computerChoice == "stone" && humanChoice == "scissors":
      return "computer";
    default:
      console.log("ERROR: No winner");
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let winner;

  while (humanScore < 5 && computerScore < 5) {
    winner = playRound(getHumanChoice(), getComputerChoice());
    if (winner == "human") {
      humanScore += 1;
    } else if (winner == "computer") {
      computerScore += 1;
    }
    console.log("You: " + humanScore + " Computer: " + computerScore);
  }

  if (humanScore > computerScore) {
    console.log("You beat the computer!");
  } else {
    console.log("Aw you lost! Refresh to try again!");
  }
  console.log("You: " + humanScore + " Computer: " + computerScore);
}

playGame();
