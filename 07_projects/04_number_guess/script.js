let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt"); // select submit button
const userInput = document.querySelector("#guessField"); // select user input field
const guessSlot = document.querySelector(".guesses"); // select element to display previous guesses
const remaining = document.querySelector(".lastResult"); // select element to display remaining attempts
const lowOrHi = document.querySelector(".lowOrHi"); // select element to display message if guess is low, high or correct
const startOver = document.querySelector(".resultParas"); // select element to display start new game button

const p = document.createElement("p"); // create p element to display start new game button, will be later appennded as child to startOver element, if game is over

let prevGuess = [];
let attempt = 0; // 10 attempts allowed

let playGame = true; // flag to check if game is active

if (playGame) {
  submit.addEventListener("click", function (e) {
    // add click event listener to submit button
    e.preventDefault(); // prevent form submission
    const guess = parseInt(userInput.value); // get user input
    validateGuess(guess); // call fn to validate user input
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("PLease enter a valid number");
  } else if (guess < 1 || guess > 100) {
    alert("PLease enter a number between 1 and 100");
  } else {
    prevGuess.push(guess); // add guess to array
    if (attempt === 10) {
      // check if attempts are over
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame(); // call fn to end game
    } else {
      displayGuess(guess); // call fn to display guess
      checkGuess(guess); // call fn to check guess against random number
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

// fn to display guess and remaining attempts
function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess}, `;
  attempt++;
  remaining.innerHTML = `${10 - attempt} `;
}

// fn to display message to user if guess is low, high or correct
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p); // add start new game button
  playGame = false;
  newGame();
}

//reset all values and start new game
function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1); //new random number
    prevGuess = [];
    attempt = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${10 - attempt} `;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);

    playGame = true;
  });
}
