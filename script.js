
console.log("Hello Rock Paper Scissors Game!");
// Global score variables
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

console.log(getComputerChoice()); // Could log "rock", "paper", or "scissors"

function getHumanChoice() {
  const choice = prompt("Enter your choice: rock, paper, or scissors");
  return choice;
}

// Test it:
console.log("You chose:", getHumanChoice());


function playRound(humanChoice, computerChoice){
    // make humanChoice case insensitive
    humanChoice = humanChoice.toLowerCase();

  // Determine outcome
  if (humanChoice === computerChoice) {
    console.log(`It's a tie! You both chose ${humanChoice}`);
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}`);
  } else {
    computerScore++;
    console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}`);
  }

  // Display current scores
  console.log(`Scores, You: ${humanScore}, Computer: ${computerScore}`);

}

function playGame() {
    // Play 5 rounds
  for (let i = 1; i <= 5; i++) {
    console.log(`\nRound ${i}`);
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }

  // Declare final winner
  console.log("\nFinal Results:");
  if (humanScore > computerScore) {2
    console.log("🎉 You won the game!");
  } else if (computerScore > humanScore) {
    console.log("💻 The computer won the game!");
  } else {
    console.log("🤝 It's a tie overall!");
  }
}

// Start the game
playGame();



