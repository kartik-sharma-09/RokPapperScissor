const game = () => {
  let pScore = 0;
  let cScore = 0;

  // start the game
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };

  // play Match
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });

    // computer options
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach((option) => {
      option.addEventListener("click", function () {
        // computer choice

        const computerNumber = Math.floor(Math.random() * 3);
        const computerchoice = computerOptions[computerNumber];

        setTimeout(() => {
          // Here is Where we call compare hands
          comparehands(this.textContent, computerchoice);

          // update images
          playerHand.src = `../asset/${this.textContent}.png`;
          computerHand.src = `../asset/${computerchoice}.png`;
        }, 2000);

        // animation
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  let updateScore = () => {
    let playerScore = document.querySelector(".player-score p");
    let computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  let comparehands = (playerChoice, computerChoice) => {
    // update text
    let winner = document.querySelector(".winner");

    // Checking for a tie
    if (playerChoice === computerChoice) {
      winner.textContent = "It is a tie";
      return;
    }
    // check for rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Player wins";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "computer wins";
        cScore++;
        updateScore();
        return;
      }
    }

    // check for papper
    if (playerChoice === "papper") {
      if (computerChoice === "scissors") {
        winner.textContent = "computer  wins";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "palyer wins";
        pScore++;
        updateScore();
        return;
      }
    }
    //    check for scissors
    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        winner.textContent = "computer wins";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "player  wins";
        pScore++;
        updateScore();
        return;
      }
    }
  };

  // is call the inner function
  startGame();
  playMatch();
};
// start the game funtion
game();
