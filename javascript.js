
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
console.log("Computer Choice: " + computerChoice);


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


rockButton.addEventListener('click', function() { 
    playerSelection = 'rock';
   playRound(computerChoice,playerSelection);
   gameCounter(computerChoice,playerSelection);
   roundCounter++
   playNextRound();
});

paperButton.addEventListener('click', function() { 
    playerSelection = 'paper';
    playRound(computerChoice,playerSelection);
    gameCounter(computerChoice,playerSelection);
    roundCounter++
    playNextRound();

});

scissorsButton.addEventListener('click', function() { 
    playerSelection = 'scissors';
    playRound(computerChoice,playerSelection);
    gameCounter(computerChoice,playerSelection);
    roundCounter++
    playNextRound();
    
});

// defines the game function which takes in playround function as a parameter to play a five round game of rock paper scissors 
 
function playNextRound() { 
    if (roundCounter < 5) {
        computerChoice = getComputerChoice(choices);
        console.log("Computer Choice: " + computerChoice);

     }else {
        console.log('playerCounter: ' + playerCounter);
        console.log('computerCounter: ' + computerCounter);

        if (computerCounter > playerCounter) {
            console.log('YOU LOSE THE GAME');
        } else if (computerCounter < playerCounter) {
            console.log('YOU WIN THE GAME');
        } else {
            console.log('IT\'S A TIE! NO ONE WINS (OR MAYBE YOU BOTH DO)');
        }

    }


}

console.log(playNextRound(playRound))

