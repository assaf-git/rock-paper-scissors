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

let timeLeft = 5;

const playerScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#computer-score");
playerScore.textContent = "Player score: " + winCount;
computerScore.textContent = "Computer score: " + loseCount;

const buttons = document.querySelectorAll(".btn");

const output = document.querySelector("#output");
output.textContent = "Choose: Rock || Paper || Scissors";

const outputReport = document.querySelector("#output-report");
const outputEndGame = document.querySelector("#output-end-game");


// Allows user to make selection using button
buttons.forEach((button) => {
    button.addEventListener('click', () => {

        playerButton = button.id;

        playGame();

        playerScore.textContent = "Player score: " + winCount;
        computerScore.textContent = "Computer score: " + loseCount;
        output.textContent = winRound || loseRound || drawRound;
        
        // Plays 5 round game
        if (gameCount === 5) {
            reportResult();
            outputReport.textContent = gameReport;
            outputEndGame.textContent = winGame || loseGame || drawGame;
            console.log(gameCount);
            setTimeout(() => {
                resetGame();
            }, 5000);

            let downloadTimer = setInterval(function(){
            if(timeLeft <= 0){
                clearInterval(downloadTimer);
                document.getElementById("countdown").innerHTML = "";
            } else {
                 document.getElementById("countdown").innerHTML = "Reset in " + timeLeft;
            }
            timeLeft -= 1;
            }, 1000);
            
        // }
        //     document.getElementById("progressBar").value = 5 - timeLeft;
        //     timeLeft -= 1;
        //     }, 1000);
            // setTimeout(resetGame(), 10000);
        }
        // else if (resetGame === 1) {
        //     winCount = 0;
        //     loseCount = 0;
        //     drawCount = 0;
        //     playerScore.textContent = "Player score: " + winCount;
        //     computerScore.textContent = "Computer score: " + loseCount;
        //     gameReport = " ";
        //     winGame = " ";
        //     loseGame = " ";
        //     drawGame = " ";
        //     outputReport.textContent = gameReport;
        //     outputEndGame.textContent = winGame || loseGame || drawGame;
        //     resetGame = 0;
        //     gameCount = 0;
        //     playGame();
        // }
    })
})


function getComputerChoice () {
    // Randomly select 1 of 3 variables 
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
 

// Compares playerSelection with computerSelection and returns round result
function playRound(playerSelection, computerSelection) {
    
    winRound = "";
    loseRound = "";
    drawRound = "";

    if (playerSelection === "Rock" && computerSelection === "Scissors" ||
        playerSelection === "Paper" && computerChoice === "Rock" ||
        playerSelection === "Scissors" && computerChoice === "Paper") {
        winRound = `Winner, winner, chicken dinner! ${playerSelection} beats ${computerSelection}.`;
        winCount++;
        return winRound;
    }

    else if (playerSelection === "Rock" && computerSelection === "Paper" ||
        playerSelection === "Paper" && computerChoice === "Scissors" ||
        playerSelection === "Scissors" && computerChoice === "Rock") {
        loseRound = `You lose! ${computerSelection} beats ${playerSelection}.`;
        loseCount++;
        return loseRound;
    }

    else if (playerSelection === "Rock" && computerSelection === "Rock" ||
        playerSelection === "Paper" && computerSelection === "Paper" ||
        playerSelection === "Scissors" && computerSelection === "Scissors") {
        drawRound = `It's a tie. ${playerSelection} all round.`;
        drawCount++;
        return drawRound;
    }
}


// Reports overall result at the end
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


function playGame() {
       
    playerSelection = playerButton;
    getComputerChoice();
    computerSelection = computerChoice;
    console.log(computerSelection);
    console.log(playerSelection);
    playRound();
    console.log(playRound(playerSelection, computerSelection));
    gameCount++;
}

function resetGame() {
    winCount = 0;
    loseCount = 0;
    drawCount = 0;
    playerScore.textContent = "Player score: " + winCount;
    computerScore.textContent = "Computer score: " + loseCount;
    gameReport = "";
    winGame = "";
    loseGame = "";
    drawGame = "";
    playerSelection = undefined;
    computerSelection = undefined;
    outputReport.textContent = gameReport;
    outputEndGame.textContent = winGame || loseGame || drawGame;
    gameCount = 0;
    // playGame();
}