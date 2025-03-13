function getComputerChoice() {
    let choice = "";
    // Generate a number from 0 to 2
    let num = Math.floor(Math.random() * 3)
    // Check number
    if (num == 0) {
        // If number is 0, assign scissors
        choice = "scissors";
    }   else if (num == 1) {
        // If number is 1, assign paper
        choice = "paper";
    }   else {
        // If number is 2, assign stone
        choice = "stone";
    }

    return choice;
}

function getHumanChoice() {
    let choice = prompt("Enter scissors, paper or stone!");
    return choice;
}

function playRound (humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice == computerChoice) {
        // If human and computer pick the same, it's a tie
        console.log("It's a tie!")
        return "tie";
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        // If human chooses scissors and computer chooses paper, human wins
        console.log("You Win! Scissors beats Paper!");
        return "human"
    } else if (humanChoice == "scissors" && computerChoice == "stone") {
        // If human chooses scissors and computer chooses stone, computer wins
        console.log("You Lose! Stone beats Scissors!");
        return "computer"
    } else if (humanChoice = "paper" && computerChoice == "stone") {
        // If human chooses paper and computer chooses stone, human wins
        console.log("You Win! Paper beats Stone!");
        return "human";
    }    else if (humanChoice = "paper" && computerChoice == "scissors") {
        // If human chooses paper and computer chooses scissors, computer wins
        console.log("You Lose! Scissors beats Paper!");
        return "computer";
    }   else if (humanChoice = "stone" && computerChoice == "scissors") {
        // If human chooses stone and computer chooses scissors, human wins
        console.log("You Win! Stone beats Scissors!");
        return "human";
    }    else if (humanChoice == "stone" && computerChoice == "paper") {
        // If human chooses stone and computer chooses paper, computer wins
        console.log("You Lose! Stone beats Paper!");
        return "computer";
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
        console.log("Aw you lost! Refresh to try again!")
    }
    console.log("You: " + humanScore + " Computer: " + computerScore);
}

playGame();