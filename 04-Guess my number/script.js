'use strict';

let randomNumber = Math.trunc(Math.random() * 20) + 1;
console.log(randomNumber);
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const theSecretNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const theScore = function (score) {
  document.querySelector('.score').textContent = score;
};
const bgColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};
const theWidth = function (width) {
  document.querySelector('.number').style.width = width;
};

document.querySelector('.check-button').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //console.log(typeof guess);
  /*else if (guess < randomNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💔Sorry! You lost';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess > randomNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💔Sorry! You lost';
      document.querySelector('.score').textContent = 0;
    }
  }*/

  if (!guess) {
    document.querySelector('.message').textContent = '🚫No number entered!';
    //  alert('Please enter a Number!');
  } else if (guess !== randomNumber) {
    if (score > 1) {
      displayMessage(guess > randomNumber ? '📈Too High!' : '📉Too Low!');

      score--;
      theScore(score);
    } else {
      displayMessage('💔Sorry! You lost');
      theScore(0);
    }
  } else if (guess === randomNumber) {
    theSecretNumber(randomNumber);
    displayMessage('🎉Congratulations, Number matched!');
    bgColor('#60b347');
    theWidth('200px');

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
});

document.querySelector('.again-button').addEventListener('click', function () {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(randomNumber);
  score = 20;
  displayMessage('✌️Start guessing again!');
  bgColor('black');
  theSecretNumber('?');
  theScore(score);
  theWidth('150px');
  document.querySelector('.guess').value = '';
});
