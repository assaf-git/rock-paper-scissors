const playerScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#computer-score");

const buttons = document.querySelectorAll(".btn");
// console.log(playerSelection);

const output = document.querySelector("#output");
output.textContent = "Choose Rock||Paper||Scissors";

const outputReport = document.querySelector("#output-report");
const outputEndGame = document.querySelector("#output-end-game");


buttons.forEach((button) => {
    button.addEventListener('click', () => {


        playerButton = button.id;

        game();

        output.textContent = winRound || loseRound || drawRound;
        
        if (gameCount === 5) {
            reportResult();
            outputReport.textContent = gameReport;

        }

    })
})

const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";

let playerButton;

let computerChoice;

// let userInput;
    
let winRound;
let loseRound;
let drawRound;

let winCount = 0;
let loseCount = 0;
let drawCount = 0;

let gameCount = 0;


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
function playRound(computerSelection, playerSelection) {
    
    if (playerSelection === "Rock" && computerSelection === "Scissors") {
        winRound = "Winner, winner, chicken dinner! Rock beats Scissors.";
        winCount++;
        return winRound;
        return winCount;
    }
    
    else if (playerSelection === "Paper" && computerChoice === "Rock") {
        winRound = "Winner, winner, chicken dinner! Paper beats Rock.";
        winCount++;
        return winRound;
        return winCount;
    }
    
    else if (playerSelection === "Scissors" && computerChoice === "Paper") {
        winRound = "Winner, winner, chicken dinner! Scissors beats Paper.";
        winCount++;
        return winRound;
        return winCount;
    }

    else if (playerSelection === "Rock" && computerSelection === "Paper") {
        loseRound = "You lose! Paper beats Rock.";
        loseCount++;
        return loseRound;
        return loseCount;
    }
    
    else if (playerSelection === "Paper" && computerChoice === "Scissors") {
        loseRound = "You lose! Scissors beats Paper.";
        loseCount++;
        return loseRound;
        return loseCount;
    }
    
    else if (playerSelection === "Scissors" && computerChoice === "Rock") {
        loseRound = "You lose! Rock beats Scissors.";
        loseCount++;
        return loseRound;
        return loseCount;
    }

    else if (playerSelection === "Rock" && computerSelection === "Rock") {
        drawRound = "It's a tie. Rock all round.";
        drawCount++;
        return drawRound;
        return drawCount;
    }

    else if (playerSelection === "Paper" && computerSelection === "Paper") {
        drawRound = "It's a tie. Paper all round.";
        drawCount++;
        return drawRound;
        return drawCount;
    }

    else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
        drawRound = "It's a tie. Scissors all round.";
        drawCount++;
        return drawRound;
        return drawCount;
    }

}

let gameReport;
let winGame;
let loseGame;
let drawGame;

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
function game() {
       
    const playerSelection = playerButton;
    getComputerChoice();
    const computerSelection = computerChoice;
    console.log(computerSelection);
    console.log(playerSelection);
    playRound();
    console.log(playRound(computerSelection, playerSelection));
    gameCount++;
}
