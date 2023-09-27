const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";

let playerButton;

let computerChoice;

let winRound;
let loseRound;
let drawRound;

let winCount = 0;
let loseCount = 0;
let drawCount = 0;

let gameCount = 0;

let gameReport;
let winGame;
let loseGame;
let drawGame;

const playerScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#computer-score");
playerScore.textContent = "Player score: " + winCount;
computerScore.textContent = "Computer score: " + loseCount;

const buttons = document.querySelectorAll(".btn");
// console.log(playerSelection);

const output = document.querySelector("#output");
output.textContent = "Choose Rock||Paper||Scissors";

const outputReport = document.querySelector("#output-report");
const outputEndGame = document.querySelector("#output-end-game");


buttons.forEach((button) => {
    button.addEventListener('click', () => {

        playerButton = button.id;

        playGame();

        playerScore.textContent = "Player score: " + winCount;
        computerScore.textContent = "Computer score: " + loseCount;
        output.textContent = winRound || loseRound || drawRound;
        console.log(winRound || loseRound || drawRound);
        
        if (gameCount === 5) {
            reportResult();
            outputReport.textContent = gameReport;
            outputEndGame.textContent = winGame || loseGame || drawGame;
        }
    
    })
})

// let userInput;

function getComputerChoice () {
    // Randomly select 1 of 3 variables 
    // Use random function to get 0-1 integer
    // Multiply by 3 and add 1 (if function rounds down i.e.Math.floor)
    let randomNumber = Math.floor(Math.random()*3)+1;

    if(randomNumber === 1) {
        return computerChoice = rock;
    }
    
    else if(randomNumber === 2) {
        return computerChoice = paper;
    }
    
    else {
        return computerChoice = scissors;
    } 
}
    

// function getUserInput () {
//     userInput = prompt("Rock Paper Scissors: ");

//     // Create function caseCorrect to convert user input to be case insensitive
//     // Return the new value - first character uppercase, the rest lowercase
//     function caseCorrect(userInput) {
//         let char1 = userInput.charAt(0);
//         let char2 = char1.toUpperCase();
//         let lowerCaseText1 = userInput.slice(1);
//         let lowerCaseText2 = lowerCaseText1.toLowerCase();
//         return char2+lowerCaseText2;     
//     }
//     return caseCorrect(userInput);
    
// }


// Create function playRound to compare playerSelection with computerChoice
function playRound(playerSelection, computerSelection) {
    
    winRound = "";
    loseRound = "";
    drawRound = "";

    if (playerSelection === "Rock" && computerSelection === "Scissors" ||
        playerSelection === "Paper" && computerChoice === "Rock" ||
        playerSelection === "Scissors" && computerChoice === "Paper") {
        winRound = `Winner, winner, chicken dinner! ${playerSelection} beats ${computerSelection}.`;
        winCount++;
        console.log(winRound);
        return winRound;
    }

    else if (playerSelection === "Rock" && computerSelection === "Paper" ||
        playerSelection === "Paper" && computerChoice === "Scissors" ||
        playerSelection === "Scissors" && computerChoice === "Rock") {
        loseRound = `You lose! ${computerSelection} beats ${playerSelection}.`;
        loseCount++;
        console.log(loseRound);
        return loseRound;
    }

    else if (playerSelection === "Rock" && computerSelection === "Rock" ||
        playerSelection === "Paper" && computerSelection === "Paper" ||
        playerSelection === "Scissors" && computerSelection === "Scissors") {
        drawRound = `It's a tie. ${playerSelection} all round.`;
        drawCount++;
        console.log(drawRound);
        return drawRound;
    }
}


// Report overall winner or loser at the end
function reportResult() {

    gameReport = "Results out of 5 games:\nWins: " + winCount + "\nLoses: " + loseCount + "\nDraws: " + drawCount;
    console.log("Results out of 5 games:\nWins: " + winCount + "\nLoses: " + loseCount + "\nDraws: " + drawCount);

    if (winCount > loseCount) {
        winGame = "Well done! You are the overall champ!";
        console.log("Well done! You are the overall champ!");
    }
    else if (winCount < loseCount) {
        loseGame = "Bad luck. You are the overall loser!";
        console.log("Bad luck. You are the overall loser!");
    }
    else {
        drawGame = "Interesting...overall it's a draw!";
        console.log("Interesting...overall it's a draw!");
    }
}


// Create new function called game() to play 5 rounds using playRound function
function playGame() {
       
    playerSelection = playerButton;
    getComputerChoice();
    computerSelection = computerChoice;
    console.log(computerSelection);
    console.log(playerSelection);
    playRound();
    console.log(playRound(playerSelection, computerSelection));
    console.log(winRound || loseRound || drawRound);
    gameCount++;
}
