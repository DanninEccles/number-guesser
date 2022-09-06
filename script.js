let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => Math.floor(Math.random() * 10);

const compareGuesses = (humanGuess, computerGuess, target) =>  {
    return Math.abs(humanGuess - target) <= Math.abs(computerGuess - target);
}

const updateScore = winner => winner === 'human' ? humanScore++ : computerScore++;

const advanceRound = () => currentRoundNumber++;

