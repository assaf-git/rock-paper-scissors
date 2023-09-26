const buttons = document.querySelectorAll(".btn");
// console.log(playerSelection);

buttons.forEach((button) => {
    button.addEventListener('click', () => {

        playerButton = button.id;

        game();
        
        if (gameCount === 5) {
            reportResult();
        }

    })
})

const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";

let playerButton;

let computerChoice;

// let userInput;
    
let winGame;
let loseGame;
let drawGame;

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
        winGame = "Winner, winner, chicken dinner! Rock beats Scissors.";
        winCount++;
        return winGame;
        return winCount;
    }
    
    else if (playerSelection === "Paper" && computerChoice === "Rock") {
        winGame = "Winner, winner, chicken dinner! Paper beats Rock.";
        winCount++;
        return winGame;
        return winCount;
    }
    
    else if (playerSelection === "Scissors" && computerChoice === "Paper") {
        winGame = "Winner, winner, chicken dinner! Scissors beats Paper.";
        winCount++;
        return winGame;
        return winCount;
    }

    else if (playerSelection === "Rock" && computerSelection === "Paper") {
        loseGame = "You lose! Paper beats Rock.";
        loseCount++;
        return loseGame;
        return loseCount;
    }
    
    else if (playerSelection === "Paper" && computerChoice === "Scissors") {
        loseGame = "You lose! Scissors beats Paper.";
        loseCount++;
        return loseGame;
        return loseCount;
    }
    
    else if (playerSelection === "Scissors" && computerChoice === "Rock") {
        loseGame = "You lose! Rock beats Scissors.";
        loseCount++;
        return loseGame;
        return loseCount;
    }

    else if (playerSelection === "Rock" && computerSelection === "Rock") {
        drawGame = "It's a tie. Rock all round.";
        drawCount++;
        return drawGame;
        return drawCount;
    }

    else if (playerSelection === "Paper" && computerSelection === "Paper") {
        drawGame = "It's a tie. Paper all round.";
        drawCount++;
        return drawGame;
        return drawCount;
    }

    else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
        drawGame = "It's a tie. Scissors all round.";
        drawCount++;
        return drawGame;
        return drawCount;
    }
}


// Report overall winner or loser at the end
function reportResult() {

    console.log("Results out of 5 games:\nWins: " + winCount + "\nLoses: " + loseCount + "\nDraws: " + drawCount);

    if (winCount > loseCount) {
        console.log("Well done! You are the overall champ!");
    }
    else if (winCount < loseCount) {
        console.log("Bad luck. You are the overall loser!");
    }
    else {
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
