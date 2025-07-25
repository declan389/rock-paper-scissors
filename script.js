function getComputerChoice() {
    return Math.floor(Math.random() * 3) + 1;
}

let num = getComputerChoice();

const wordMap = {
    1: "Rock",
    2: "Paper",
    3: "Scissors"
};
let result = wordMap[num];
console.log(result);