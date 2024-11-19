let humanScore = 0;
let computerScore = 0;

document.getElementById("human-score").innerText = "Human: " + humanScore;
document.getElementById("computer-score").innerText = "Computer: " + computerScore;


let buttonContainer = document.getElementById("btn-container");

function handleButtonClick(event) {
    const humanChoice = event.target.id;
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);
    document.getElementById('result').innerText = `You chose ${humanChoice}, computer chose ${computerChoice}. ${result}`;

    document.getElementById("human-score").innerText = "Human: " + humanScore;
    document.getElementById("computer-score").innerText = "Computer: " + computerScore;

    if (humanScore === 5) {
        buttonContainer.style.display = "none";
        document.getElementById('message').innerText = "Congratulations! You won the game! Refresh to play again.";
        alert("Congratulations! You won the game! Refresh to play again.");
    } 
    else if (computerScore === 5){ 
        buttonContainer.style.display = "none";
        document.getElementById('bad-news').innerText = "Sorry, the computer won the game. Refresh to play again.";
        alert("Sorry, the computer won the game. Refresh to play again."); 
    }
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors']; 
    const randomIndex = Math.floor(Math.random() * choices.length);

    return choices[randomIndex];
}

function playRound(humanChoice, computerChoice) {
    switch(humanChoice) {
        case "rock":
            switch (computerChoice) {
                case "rock":
                    return "Tie! Go again!";
                case "paper":
                    computerScore++;
                    return "Computer wins! Paper beats Rock!";
                case "scissors":
                    humanScore++;
                    return "You win!";
            }
            break;
        case "paper":
            switch(computerChoice) {
                case "rock":
                    humanScore++;
                    return "You win!";
                case "paper":
                    return "It's a tie";
                case "scissors":
                    computerScore++;
                    return "Computer wins! Scissors beats paper!";
            }
            break;
        case "scissors":
            switch (computerChoice) {
                case "rock":
                    computerScore++
                    return "Computer wins! Rock beats scissors!";
                case "paper":
                    humanScore++;
                    return "You win!";
                case "scissors":
                    return "It's a tie!";
            }
            break;
        default:
            console.log("Invalid choice. Please restart the browser.");
    }
}
document.getElementById('rock').addEventListener('click', handleButtonClick);
document.getElementById('paper').addEventListener('click', handleButtonClick);
document.getElementById('scissors').addEventListener('click', handleButtonClick);
