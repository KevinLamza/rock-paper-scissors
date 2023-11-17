
// ROCK PAPER SCISSORS

// declare variable playerScore
let playerScore = 0;

// declare variable computerScore
let computerScore = 0;

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
    } else if (computerChoice === 1) {
        computerChoice = "paper";
    } else if (computerChoice === 2) {
        computerChoice = "scissors";
    } else {
        computerChoice = null;
    }

    // return computerChoice
    console.log("The computer chose " + computerChoice + "!");
    return computerChoice;
}

// init function getPlayerChoice
function getPlayerChoice() {
    // declare variable for playerChoice
    let playerChoice;

    // ask player for choice
    // assign string to playerChoice
    playerChoice = prompt("Please enter Rock, Paper or Scissors:", "Rock");

    // change string into lowercase only
    playerChoice = playerChoice.toLowerCase();

    // return playerChoice
    if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
        console.log("You chose " + playerChoice) + "!";
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
            winnerAnnouncement = "No lose! Scissors beats Paper!";
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
        // return string with winning announcement
        return winnerAnnouncement;
}

// init function game 
//     for loop 5 mal
//         getchoices
//          "the computer chose ..."
//         playsingleround
//         print string for winner of current round and current score

// game()
// compare winning conditions
