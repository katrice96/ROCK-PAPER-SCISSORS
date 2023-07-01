function getComputerChoice(strings) {
    //randomizes which string the computer returns 
    const randomIndex = Math.floor(Math.random() * strings.length);
    // tells the computer to return a random string from an array
    return strings[randomIndex]
}
// the array of choices the computer pulls from in this case
const choices = ['rock','paper','scissors'];
// defines the computerChoice variable that tells the getComputerChoice function to pull from the choices array 
const computerChoice = getComputerChoice(choices);
//logs result of computerChoice variable in console 
console.log(computerChoice)


// defines playerSelection variable for future use, .prompt brings up a form for the user to input text when page loads.
// .toLowerCase at end of prompt statement makes sure all inputs are comparable and case insensitive
let playerSelection = prompt("this is a game of rock paper scissors, please input your answer").toLowerCase();
console.log(playerSelection)
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
    



    
