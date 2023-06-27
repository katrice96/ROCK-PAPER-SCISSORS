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
let playerSelection = prompt("this is a game of rock paper scissors, please input your answer").toLowerCase();
console.log(playerSelection)

function playRound(computerChoice, playerSelection) {

    



}
    



    
