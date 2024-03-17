const form = document.querySelector(".form");
const input = document.querySelector("#guessField");
const submit = document.querySelector("#subt");
const guesses = document.querySelector(".guesses");
const lowOrHi = document.querySelector(".lowOrHi");
const lastRes = document.querySelector(".lastResult");
const startOver = document.querySelector(".resultParas");
const p = document.createElement("p");
let prevGuesses = [];
let attempts = 10;
let playGame = true;
let randomNumber = Math.floor(Math.random() * 100 + 1);
console.log(playGame);
if (playGame) {
  submit.addEventListener("click", function (event) {
    event.preventDefault();
    const guess = parseInt(input.value);
    validateGuess(guess);
    input.value = "";

    console.log(randomNumber, guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 0) {
    alert("Please enter a number greater than 0");
  } else if (guess > 100) {
    alert("Please enter a number less than 100");
  } else {
    if (attempts >= 1) {
      prevGuesses.push(guess);
      compareGuesses(guess);
      displayGuess();
    } else {
      lowOrHi.innerText = `You Lost, random number was ${randomNumber}`;
      displayGuess();
      endGame();
    }
  }
}

function compareGuesses(guess) {
  let msg;
  if (guess > randomNumber) {
    msg = `Your number is greater than the actual number`;
    displayMessage(msg);
  } else if (guess < randomNumber) {
    msg = `Your number is lesser than the actual number`;
    displayMessage(msg);
  } else {
    msg = `You Won, the random number was ${randomNumber}`;
    lowOrHi.innerText = msg;
    endGame();
  }
  attempts--;
  lastRes.innerText = attempts;
}

function displayGuess(guess) {
  guesses.innerText = prevGuesses;
}

function displayMessage(msg) {
  lowOrHi.innerText = msg;
}

function endGame() {
  input.value = "";

  input.setAttribute("disabled", true);
  p.classList.add("button");
  p.innerHTML = `<button id='newGame'> New Game </button>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const btn = document.querySelector("#newGame");
  btn.addEventListener("click", function (event) {
    attempts = 10;
    prevGuesses = [];
    randomNumber = Math.floor(Math.random() * 100 + 1);
    lowOrHi.innerText = "";
    input.removeAttribute("disabled");
    guesses.innerText = "";
    startOver.removeChild(p);
    playGame = true;
  });
}
