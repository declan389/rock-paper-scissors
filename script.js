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

let humanScore = 0
let computerScore = 0