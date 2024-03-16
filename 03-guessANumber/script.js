//TODO: Refactor this code

const prevGuesses = [];
const randomNumber = Math.floor(Math.random() * 100 + 1);
const guesses = document.querySelector(".guesses");
const form = document.querySelector(".form");
let attempts = 10;
form.addEventListener("submit", function guessNumber(event) {
  event.preventDefault();

  const input = parseInt(document.querySelector("#guessField").value);
  const winner = document.querySelector(".winner");
  const lowOrHi = document.querySelector(".lowOrHi");
  const lastRes = document.querySelector(".lastResult");
  if (attempts > 0) {
    console.log(input);
    lowOrHi.innerText = "";
    if (input === "" || input < 0 || input > 100 || isNaN(input)) {
      alert("Invalid Input");
      return;
    }
    if (randomNumber < input) {
      lowOrHi.innerText = `Your number is greater than the actual number`;
    }
    if (randomNumber > input) {
      lowOrHi.innerText = `Your number is lesser than the actual number`;
    }
    if (randomNumber === input) {
      winner.innerText = `You won. The number was ${randomNumber}`;
      return;
    }
    prevGuesses.push(input);
    attempts--;
    input = null;
    lastRes.innerText = attempts;
    guesses.innerText = prevGuesses;
  } else {
    winner.innerText = `You have exceeded your chances`;
    return;
  }

  console.log(randomNumber);
});
