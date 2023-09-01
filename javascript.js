function getComputerChoice(strings) {
    //randomizes which string the computer returns 
    const randomIndex = Math.floor(Math.random() * strings.length);
    // tells the computer to return a random string from an array
    return strings[randomIndex]
}
// the array of choices the computer pulls from in this case
let choices = ['rock','paper','scissors'];
// defines the computerChoice variable that tells the getComputerChoice function to pull from the choices array 
let computerChoice = getComputerChoice(choices);
//logs result of computerChoice variable in console 
console.log(computerChoice)


// defines playerSelection variable for future use, .prompt brings up a form for the user to input text when page loads.
// .toLowerCase at end of prompt statement makes sure all inputs are comparable and case insensitive

// defines playRound function which will take computerChoice and playerSelection as parameters and compare outputs of both to determine a winner 
function playRound(computerChoice, playerSelection) {
   
   
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

 let playerCounter = 0;
 let computerCounter = 0;
    // defines gameCounter function which defines behavior of counters when different conditions are true
 function gameCounter(computerChoice, playerSelection) {

    if (playerSelection === computerChoice) {
 
        return playerCounter && computerCounter; 
    
        
       } else if ( 
        (playerSelection === 'rock' && computerChoice === 'scissors') || 
        (playerSelection === 'paper' && computerChoice === 'rock') || 
        (playerSelection ==='scissors' && computerChoice === 'paper')
    
       ) {
        playerCounter += 1; 
        
       
       } else if ( 
        (playerSelection ==='scissors' && computerChoice === 'rock') || 
        (playerSelection === 'rock' && computerChoice === 'paper') || 
        (playerSelection === 'paper' && computerChoice === 'scissors')
        ) {
            computerCounter += 1 ;
        }
        
        return;
    
 }

 // defines the game function which takes in playround function as a parameter to play a five round game of rock paper scissors 
 
 function game(playRound) { 

    for (let round = 1; round <= 5; round++) {

        //let playerSelection = prompt("this is a game of rock paper scissors, please input your answer").toLowerCase();
        //console.log(playerSelection);
        ////////let playerSelection = [rock,paper,scissors]


        computerChoice = getComputerChoice(choices);
        playRound(computerChoice, playerSelection);
        gameCounter(computerChoice, playerSelection);
        console.log(playRound(computerChoice, playerSelection))
        
        
    };

//test function as is w loop, if working correctly then have playerchoice prompt inside of loop 
// in theory this should allow for user to be prompted for input each time the loop iterates 
    

// ('playerCounter: ' + playerCounter) adds value to string, same with computer counterpart 
    console.log('playerCounter: ' + playerCounter);
    console.log('computerCounter: ' + computerCounter);

    
    // this series of if statements defines win/ lose conditions for when all rounds are played
    // when total computerCounter is more than playerCounter computer wins
    // when reverse is true player wins 
    // when counts are equal a tie statement is returned 
        if (computerCounter > playerCounter) {
            return 'YOU LOSE THE GAME';
        }

        if ( computerCounter < playerCounter) { 
            return 'YOU WIN THE GAME';
        }

        if (computerCounter == playerCounter) {
            return 'ITS A TIE! NO ONE WINS( OR MAYBE U BOTH DO )';
        }


 
 }
  
    
console.log(game(playRound))


 rockButton.addEventListener('click', function() {

    playerSelection = 'Rock';
    playRound(playerSelection,computerChoice);
    
    
 });




 paperButton.addEventListener('click', function() {

    playerSelection = 'paper'
    playRound(playerSelection,computerChoice);
    
    
 });



 scissorsButton.addEventListener('click', function() {

    playerSelection = 'scissors';
    playRound(playerSelection,computerChoice);
    
    
 });

 




