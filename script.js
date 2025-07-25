function getComputerChoice() {
    return Math.floor(Math.random() * 3) + 1;
}

let num = getComputerChoice();

const wordMap = {
    1: "rock",
    2: "paper",
    3: "scissors"
};
let result = wordMap[num];
console.log(result);


function getHumanChoice() { 
  return prompt("Enter rock, paper, or scissors:");
}
console.log(getHumanChoice())

let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors");
        humanScore++;
    }    
    else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats Rock");
        computerScore++;
    }    
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beats Paper");
        computerScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock");
        humanScore++;
    }    
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats Scissors");
        computerScore++;
    }    
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beats Paper");
        humanScore++;
    }    
}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);