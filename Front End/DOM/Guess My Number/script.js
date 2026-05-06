'use strict';

/*
document.querySelector(`.message`).textContent = 'Hello, World!';
console.log(document.querySelector(`.message`));

document.querySelector('.number').textContent = 11;
console.log(document.querySelector('.number'));

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess'));
*/

//These are some global functions and declarations for better understanding:

let displayMessage = message => {
  document.querySelector('.message').textContent = String(message);
};

let guessBox = document.querySelector('.number');
let randomNumber = Math.trunc(Math.random() * 20) + 1; //(Hidden)
let scoreLeft = Number(document.querySelector('.score').textContent);
let highScore = 0;
let btnHandler = document.querySelector('.check');

// Main Game Logic starts from here (All depends on the check button)

btnHandler.addEventListener('click', function () {
  var val = Number(document.querySelector('.guess').value);

  if (!val) {
    displayMessage('⛔ No Number Entered.');
    document.body.style.backgroundColor = '#8B0000';
  } else if (randomNumber - val === 0) {
    displayMessage('🥳 Your Answer is Correct');
    document.body.style.backgroundColor = '#388004';
    guessBox.style.width = '30rem';
    guessBox.textContent = randomNumber;

    if (scoreLeft > highScore) {
      highScore = scoreLeft;
      document.querySelector('.highscore').textContent = String(highScore);
    }
  } else {
    // Wrong Guess Handling with Score
    if (scoreLeft > 1) {
      displayMessage(val > randomNumber ? '📈 Too high!' : '📉 Too Low!'); // Short form of if else statement called ternary oparator.;
      scoreLeft--;
      document.querySelector('.score').textContent = String(scoreLeft);
    } else {
      displayMessage('😥 You lost the game');
      document.querySelector('.score').textContent = '0';
      btnHandler.disabled = true;
    }
  }
});

//Let's build the again button logic
let againBtn = document.querySelector('.again');

// againBtn.addEventListener('click', () => window.location.reload()); // That code would reload the whole page (and lose high score), which we don't want.

//So here I am resetting the thing without refreshing the window:
againBtn.addEventListener('click', () => {
  randomNumber = Math.trunc(Math.random() * 20) + 1; //(again)
  displayMessage('Start guessing...');
  scoreLeft = 20;
  document.querySelector('.score').textContent = '20';
  document.body.style.background = '#222';
  guessBox.textContent = '?';
  document.querySelector('.guess').value = '';
  btnHandler.disabled = false;
  guessBox.style.width = '15rem';
});
