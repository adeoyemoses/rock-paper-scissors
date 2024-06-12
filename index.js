// Rock Paper Scissors

const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const restart = document.getElementById("restart");

let playerScore = 0;
let computerScore = 0;


function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerChoice === computerChoice) {
        result = "IT'S A TIE";
    }

    else{
        switch(playerChoice){ /* this is like setting the rule of the game you can use chatgpt to study how the game works */
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN" : "YOU LOSE!" ;
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN" : "YOU LOSE!" ;
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN" : "YOU LOSE!" ;
                break;
        }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText");

    switch(result){
        case "YOU WIN":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;

        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }
}

restart.addEventListener("click", reset);

function reset(){
    playerScore = 0;
    playerScoreDisplay.textContent = playerScore;
    computerScore = 0;
    computerScoreDisplay.textContent = computerScore;
    resultDisplay.textContent = "";
    playerDisplay.textContent = "PLAYER: ";
    computerDisplay.textContent = "COMPUTER: ";
}