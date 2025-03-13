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

    console.log(choice);
}

getComputerChoice();