let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;


const generateTarget = () =>{
    return Math.floor(Math.random() * 10);
};
//console.log(generateTarget())

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {

    humanPoint = Math.abs(humanGuess - targetGuess);
    computerPoint = Math.abs( computerGuess -targetGuess);
    //console.log(humanPoint);
    //console.log(computerPoint);

    if (computerPoint >= humanPoint ) {
        return true;
    }else if (computerPoint < humanPoint) {
        return false;
    }
    

};


const updateScore = (winner) => {

    if (winner === 'human') {
        humanScore++
    }else if (winner = 'computer'){
        computerScore++
    } else{
        return 'no one wins'
    }
};

const advanceRound = () => {
    currentRoundNumber++ 

}

