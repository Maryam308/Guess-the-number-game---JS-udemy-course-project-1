'use strict';
//function to display a message
const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};
//define a random number between 1 and 20
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
//when the again button is clicked
const againButton = document
  .querySelector('.again')
  .addEventListener('click', function () {
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = 20;
    number = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
  });
//select the random number
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('💔 No number!:(');
  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(guess > number ? 'Too high:)' : 'Too low :(');
      /* document.querySelector('.message').textContent =
        guess > number ? 'Too high:)' : 'Too low :(';*/
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('🫨 You lost the game :(');
      document.querySelector('.score').textContent = 0;
    }
  }
  //when the player wins
  else if (guess === number) {
    displayMessage('😍 Correct Number :)');
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = number;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
});
