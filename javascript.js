function getComputerChoice(strings) {
    const randomIndex = Math.floor(Math.random() * strings.length);
    return strings[randomIndex]
}

const choices = ['rock','paper','scissors'];
const computerChoice = getComputerChoice(choices);
console.log(computerChoice)