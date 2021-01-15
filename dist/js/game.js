'use strict';

// Sel;ecting UI variasbles"
const player1 = document.querySelector('.player-0');
const player2 = document.querySelector('.player-1');
const score1 = document.querySelector('#score-0');
const score2 = document.querySelector('#score-1');
const current1 = document.querySelector('#current-0');
const current2 = document.querySelector('#current-1');

// Selecting the dice, and the button
const dice = document.querySelector('.dice');
const btnNeW = document.querySelector('.btn-new');
const btnRoll = document.querySelector('.btn-roll');
const btnHold = document.querySelector('.btn-hold');

// Settign out things that will be in the global score such as the score and active playig

// Setting the starting conditons
let scores, currentScore, activePlayer, playing;

// Staring conditions and wrapping them in a function called init

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score1.textContent = 0;
  score2.textContent = 0;
  current1.textContent = 0;
  current2.textContent = 0;

  dice.classList.add('hidden');
  player1.classList.remove('player-winner');
  player2.classList.remove('player-winner');
  player1.classList.add('player-active');
  // player1.style.background = 'yellow';
  player2.classList.remove('player-active');
};

init();

// Function to switch player
const switchPlayer = () => {
  activePlayer = activePlayer === 0 ? 1 : 0;
  document.querySelector(`#current-${activePlayer}`).textContent = 0;
  currentScore = 0;
  // activePlayer = activePlayer === 0 ? 1 : 0;
  player1.classList.toggle('player-active');
  player2.classList.toggle('player-active');
};

// Function when dice is rolled
btnRoll.addEventListener('click', diceRoll);

function diceRoll() {
  // control structure, check if the player is playing
  if (playing) {
    // Generate a random number for dice
    const dices = Math.trunc(Math.random() * 6) + 1;
    // The vaiable above eill give us values from 0-6
    // If playing display the dice now
    dice.classList.remove('hidden');
    dice.src = `./img/dice-${dices}.png`;

    // check if dice rolled 1
    if (dices != 1) {
      currentScore += dices;
      document.querySelector(
        `#current-${activePlayer}`
      ).textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
}

// Working on the btnHold
// btnHold.addEventListener('click', hold);

function hold() {
  if (playing) {
    // Add current score to active player score
    scores[activePlayer] = scores[activePlayer] + currentScore;

    document.querySelector(`#score-${activePlayer}`).textContent =
      scores[activePlayer];
    // Chrck if players score is >= 100
    if (scores[activePlayer] >= 10) {
      playing = false;
      dice.classList.add('hidden');
      document
        .querySelector(`.player-${activePlayer}`)
        .classList.add('player-winner');
      document
        .querySelector(`.player-${activePlayer}`)
        .classList.remove('player-active');
    } else {
      switchPlayer();
    }
  }
}
btnHold.addEventListener('click', hold);
btnNeW.addEventListener('click', init);
