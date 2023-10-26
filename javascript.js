
let playerSelection;

const rockButton = document.getElementById('rockButton');
const paperButton = document.getElementById('paperButton');
const scissorsButton = document.getElementById('scissorsButton');


function getComputerChoice(strings) {
    const randomIndex = Math.floor(Math.random() * strings.length);
    return strings[randomIndex]
}

let choices = ['rock','paper','scissors'];
let computerChoice = getComputerChoice(choices);
logToContainer("Computer Choice: " + computerChoice)
//console.log("Computer Choice: " + computerChoice);


function playRound(computerChoice, playerSelection) {
   
   //console.log('playRound');
    //defines what constitutes a tie in the program 
   if (playerSelection === computerChoice) {
    // defines what to output in the case of a tie 
    return 'it\s a tie!';
    // defines what constitutes a win scenario in program
   } else if ( 
    (playerSelection === 'rock' && computerChoice === 'scissors') || 
    (playerSelection === 'paper' && computerChoice === 'rock') || 
    (playerSelection ==='scissors' && computerChoice === 'paper')

   ) {
    //defines what to output in case of a win scenario 
    return 'You win! Congratulations! ';
    //defines what constitutes a lose scenario 
   } else if ( 
    (playerSelection ==='scissors' && computerChoice === 'rock') || 
    (playerSelection === 'rock' && computerChoice === 'paper') || 
    (playerSelection === 'paper' && computerChoice === 'scissors')
    ) {
        // defines what to output in a lose scenario 
        return 'You lose bozo';
        // defines that every input no previously defined above will return 
    } else { return 'pls input a valid answer' }

    
   
}
    
// defines both counters 
// defined outside of a function to allow to iterate each time gameCounter function is called 
let roundCounter = 0;
let playerCounter = 0;
let computerCounter = 0;
   
 
// defines gameCounter function which defines behavior of counters when different conditions are true
function gameCounter(computerChoice, playerSelection) {
    if (playerSelection === computerChoice) { 
        
        } else if ( 
            (playerSelection === 'rock' && computerChoice === 'scissors') || 
            (playerSelection === 'paper' && computerChoice === 'rock') || 
            (playerSelection ==='scissors' && computerChoice === 'paper')) 
        {
            playerCounter += 1; 
        } else { 
            computerCounter+= 1;
        }
    
}
    document.addEventListener("DOMContentLoaded", function () {

    const logContainer = document.getElementById('logContainer')


});

function logToContainer(message) { 
    const logEntry = document.createElement('p');
    logEntry.textContent = message; 
    logContainer.appendChild(logEntry);

        
    }

rockButton.addEventListener('click', function() { 
    playerSelection = 'rock';
   playRound(computerChoice,playerSelection);
   gameCounter(computerChoice,playerSelection);
   roundCounter++
   //console.log(playerSelection);
   logToContainer(playerSelection);
   playNextRound();
  

});

paperButton.addEventListener('click', function() { 
    playerSelection = 'paper';
    playRound(computerChoice,playerSelection);
    gameCounter(computerChoice,playerSelection);
    roundCounter++
    //console.log(playerSelection);
    logToContainer(playerSelection);
    playNextRound();
    

});

scissorsButton.addEventListener('click', function() { 
    playerSelection = 'scissors';
    playRound(computerChoice,playerSelection);
    gameCounter(computerChoice,playerSelection);
    roundCounter++
    //console.log(playerSelection);
    logToContainer(playerSelection);
    playNextRound();
    
    
});

// defines the game function which takes in playround function as a parameter to play a five round game of rock paper scissors 
 
function playNextRound() { 
    if (roundCounter < 5) {
        computerChoice = getComputerChoice(choices);
        logToContainer("Computer Choice: " + computerChoice);

     }else {
        logToContainer('playerCounter: ' + playerCounter);
        logToContainer('computerCounter: ' + computerCounter);

        if (computerCounter > playerCounter) {
            logToContainer('YOU LOSE THE GAME');
        } else if (computerCounter < playerCounter) {
            logToContainer('YOU WIN THE GAME');
        } else {
            logToContainer('IT\'S A TIE! NO ONE WINS (OR MAYBE YOU BOTH DO)');
        } 

        

    }


}

//console.log(playNextRound(playRound))

