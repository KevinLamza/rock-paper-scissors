// UI changes to make it look nicer
// added margins between the different lines
// add color to winning announcements
// add bold letters
// add colorcoding for buttons and for rock paper scissor as words
// make buttons a bit fancier, bigger

// if click button when game is over, it restarts over 
// add function to reset all values

// ROCK PAPER SCISSORS

// declare variable playerScore
let playerScore = 0;

// declare variable computerScore
let computerScore = 0;

// declare game duration
const totalRounds = 5;

// declare current round
let currentRound = 1;

// init function getComputerChoice
function getComputerChoice() {
    // declare variable computerChoice
    let computerChoice;

    // chooses random number between 0, 1 and 2
    // assign result to computerchoice
    computerChoice = Math.floor(Math.random() * 3);

    // assign a string of rock paper scissors to computerChoice
    if (computerChoice === 0) {
        computerChoice = "rock";
        console.log("The computer chose Rock!");
        divComputerChoice.textContent = 'The computer chose Rock!';
    } else if (computerChoice === 1) {
        computerChoice = "paper";
        console.log("The computer chose Paper!");
        divComputerChoice.textContent = 'The computer chose Paper!';
    } else if (computerChoice === 2) {
        computerChoice = "scissors";
        console.log("The computer chose Scissors!");
        divComputerChoice.textContent = 'The computer chose Scissors!';
    } else {
        computerChoice = null;
        console.log("Something went wrong!");
    }

    // return computerChoice
    return computerChoice;
}

// init function getPlayerChoice
function getPlayerChoice(playerChoice) {
     // return playerChoice
    if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
        if (playerChoice === "rock") {
            console.log("You chose Rock!");
            divPlayerChoice.textContent = 'You chose Rock!';
        } else if (playerChoice === "paper") {
            console.log("You chose Paper!");
            divPlayerChoice.textContent = 'You chose Paper!';
        } else if (playerChoice === "scissors") {
            console.log("You chose Scissors!");
            divPlayerChoice.textContent = 'You chose Scissors!';
        }
        return playerChoice;
    } else {
        alert("You must enter 'Rock', 'Paper' or 'Scissors'");
        return null;
    }
    }

// init function singleRound (computerChoice, playerChoice)
function playSingleRound (playerChoice,computerChoice) {
    // variable to save winningannouncement
    let winnerAnnouncement;

    // if .. to check playerChoice
    if (playerChoice === "rock") {
        // nested if to check computerChoice, increase scores and assign winnerAnnouncement
        if (computerChoice === "rock") {
            winnerAnnouncement = "No Winner! Rock ties with Rock!";
        } else if (computerChoice === "paper") {
            winnerAnnouncement = "You lose! Paper beats Rock!";
            computerScore = ++computerScore;
        } else if (computerChoice === "scissors") {
            winnerAnnouncement = "You win! Rock beats Scissors!";
            playerScore = ++playerScore;
        }
    } else if (playerChoice === "paper") {
        // nested if to check computerChoice, increase scores and assign winnerAnnouncement
        if (computerChoice === "rock") {
            winnerAnnouncement = "You win! Paper beats Rock!";
            playerScore = ++playerScore;
        } else if (computerChoice === "paper") {
            winnerAnnouncement = "No Winner! Paper ties with Paper!";
        } else if (computerChoice === "scissors") {
            winnerAnnouncement = "You lose! Scissors beats Paper!";
            computerScore = ++computerScore;
        }
    } else if (playerChoice === "scissors") {
        // nested if to check computerChoice, increase scores and assign winnerAnnouncement
        if (computerChoice === "rock") {
            winnerAnnouncement = "You lose! Rock beats Scissors !";
            computerScore = ++computerScore;
        } else if (computerChoice === "paper") {
            winnerAnnouncement = "You Win! Scissors beats Paper!";
            playerScore = ++playerScore;
        } else if (computerChoice === "scissors") {
            winnerAnnouncement = "No Winner! Scissors ties with Scissors!";
        }
    }
        // update current round and increase
        divCurrentRound.textContent = `Round ${currentRound}`;    
        ++currentRound;

        // update winner announcement
        divWinnerAnnouncement.textContent = winnerAnnouncement;

        // update scores
        divPlayerScore.textContent = `Player score: ${playerScore}`;
        divComputerScore.textContent = `Computer score: ${computerScore}`;

        if (playerScore === 5 || computerScore === 5) {
            const winner = document.createElement('div');
            body.appendChild(winner);
            winner.textContent = winner

            if (playerScore > computerScore) {
                winner.textContent = "You won the game!"
            } else if (playerScore < computerScore) {
                winner.textContent = "You lost the game!"
            } else if (playerScore === computerScore) {
                winner.textContent = "Well look at that, it's a tie!"
            }
        }

        // return string with winning announcement
        return winnerAnnouncement;
}

const btnRock = document.querySelector('#btn-rock');
btnRock.addEventListener('click', () => {
    winnerAnnouncement = playSingleRound(getPlayerChoice('rock'),getComputerChoice());
    console.log(winnerAnnouncement);
})

const btnPaper = document.querySelector('#btn-paper');
btnPaper.addEventListener('click', () => {
    winnerAnnouncement = playSingleRound(getPlayerChoice('paper'),getComputerChoice());
    console.log(winnerAnnouncement);
})

const btnScissors = document.querySelector('#btn-scissors');
btnScissors.addEventListener('click', () => {
    winnerAnnouncement = playSingleRound(getPlayerChoice('scissors'),getComputerChoice());
    console.log(winnerAnnouncement);
})

// create elements to append
const divCurrentRound = document.createElement('div');
const divPlayerChoice = document.createElement('div');
const divComputerChoice = document.createElement('div');
const divWinnerAnnouncement = document.createElement('div');
const divPlayerScore = document.createElement('div');
const divComputerScore = document.createElement('div');

const body = document.querySelector('body');

// append elements to body as children
body.appendChild(divCurrentRound);
body.appendChild(divPlayerChoice);
body.appendChild(divComputerChoice);
body.appendChild(divWinnerAnnouncement);
body.appendChild(divPlayerScore);
body.appendChild(divComputerScore);

// change text in appended nodes
divCurrentRound.textContent = `Round ${currentRound}`;
divPlayerChoice.textContent = '';
divComputerChoice.textContent = '';
divPlayerScore.textContent = 'Player score: 0';
divComputerScore.textContent = 'Computer score: 0';