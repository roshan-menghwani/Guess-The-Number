"Use Strict";
// console.log(`hello World`);

// GRABBING ALL THE ELEMENTS FROM APP...
let chancesLeft = 10;
const againBtn = document.querySelector(".again");
const checkScore = document.querySelector(".check");
// const randomNumber = document.querySelector("number");
// let score = document.querySelector(".chances-left");
let message = document.querySelector(".message");
// let highScore = document.querySelector(".label-highscore");
let guess = document.querySelector(".guess");
let randomNumber = Math.trunc(Math.random() * 20) + 1;
let userGuesses = document.querySelector(".user-guesses");
let highScore = 0;

// ADDING RANDOM NUMBER TO DOM..

console.log(randomNumber);
// document.querySelector(".number").textContent = randomNumber;

// ADDING EVENT LISTERNER TO GUESS BUTTON
checkScore.addEventListener("click", function () {
	let guessValue = Number(guess.value);
	console.log(guessValue);
	if (!guessValue) {
		alert(`Please Enter a Valid Number...`);
	} else if (guessValue < 1 || guessValue > 20) {
		alert(`Please Enter a Number between 1 and 20...`);
	} else if (guessValue === randomNumber) {
		winner();
	}
	if (guessValue > randomNumber || guessValue < randomNumber) {
		gameLost();
	}
	guess.value = "";
});

againBtn.addEventListener("click", playAgain);

// FUNCTIONSS.....
// PLAY AGAIN FUNCTION
function playAgain() {
	document.body.style.backgroundColor = "#222";
	chancesLeft = 10;
	userGuesses.textContent = "";
	document.querySelector(".chances").textContent = chancesLeft;
	message.textContent = "start guessesing...";
	document.querySelector(".number").style.width = "15rem";
	document.querySelector(".number").textContent = "?";
	randomNumber = Math.trunc(Math.random() * 20) + 1;
	console.log(randomNumber);
	guess.disabled = false;
}

// IF USER WON THE GAME....

function winner() {
	document.body.style.backgroundColor = "green";
	message.textContent = `You Won the Game..`;
	if (chancesLeft > highScore) {
		highScore = chancesLeft;
		document.querySelector(".highscore").textContent = highScore;
	}
	gameReset();
}

function gameLost() {
	chancesLeft--;
	document.querySelector(".chances").textContent = chancesLeft;
	message.textContent = `Your Guesses....`;
	userGuesses.innerHTML += ` ${guess.value}`;
	if (chancesLeft === 0) {
		message.textContent = `Game Over....`;
		document.body.style.backgroundColor = "red";
		gameReset();
	}
}

function gameReset() {
	document.querySelector(".number").textContent = randomNumber;
	document.querySelector(".number").style.width = "30rem";
	userGuesses.textContent = "";
	guess.disabled = true;
}
