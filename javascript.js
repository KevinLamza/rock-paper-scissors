
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
    if computerChoice === 0 {
        computerChoice = "rock";
    } else if computerChoice === 1 {
        computerChoice = "paper";
    } else if computerChoice === 2 {
        computerChoice = "scissors";
    } else {
        computerChoice = null;
    }
    
    // return computerChoice
    return computerChoice;
}

// init function getPlayerChoice
//     declare variable for playerChoice
//     ask player for choice
//     assign value to playerChoice
//     change string into lowercase only
//     return playerChoice

// init function singleRound (computerChoice, playerChoice)
//     variable to save winningannouncement
//     if .. to check playerChoice
//         nested if .. for computerChoice
//         add a point to either playerScore or computerScore
//     return string with winning announcement

// init function game 
//     for loop 5 mal
//         getchoices
//         playsingleround
//         print string for winner of current round and current score

// game()
// compare winning conditions
