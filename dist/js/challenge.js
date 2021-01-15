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
const dice01 = document.getElementById('dice-1');
const dice02 = document.getElementById('dice-2');
const btnNeW = document.querySelector('.btn-new');
const btnRoll = document.querySelector('.btn-roll');
const btnHold = document.querySelector('.btn-hold');
const input = document.querySelector('.final-score');
// Settign out things that will be in the global score such as the score and active playig

// Setting the starting conditons
let scores, currentScore, activePlayer, playing;

// Staring conditions and wrapping them in a function called init

function dicestyle(dice0_1, dice0_2) {
  dice0_1.style.display = 'none';
  dice0_2.style.display = 'none';
}
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score1.textContent = 0;
  score2.textContent = 0;
  current1.textContent = 0;
  current2.textContent = 0;

  //   dice01.classList.add('hidden');
  //   dice02.classList.add('hidden');
  //   dice01.style.display = 'none';
  //   dice02.style.display = 'none';
  dicestyle(dice01, dice02);
  player1.classList.remove('player-winner');
  player2.classList.remove('player-winner');
  player1.classList.add('player-active');
  // player1.style.background = 'yellow';
  player2.classList.remove('player-active');
};

init();

let lastDice;
let winningScore;

// Function to switch player
const switchPlayer = () => {
  activePlayer = activePlayer === 0 ? 1 : 0;
  document.querySelector(`#current-${activePlayer}`).textContent = 0;
  currentScore = 0;
  // activePlayer = activePlayer === 0 ? 1 : 0;
  player1.classList.toggle('player-active');
  player2.classList.toggle('player-active');
  //   dice01.style.display = 'none';
  //   dice02.style.display = 'none';
  //   dicestyle(dice01, dice02);
};
function calc() {
  const dice1 = Math.trunc(Math.random() * 6) + 1;
  const dice2 = Math.trunc(Math.random() * 6) + 1;
  dice01.style.display = 'block';
  dice02.style.display = 'block';
  //   winningScore = inputs;
  if (dice01 != 1 && dice02 != 1) {
    currentScore += dice1 + dice2;
    document.querySelector(
      `#current-${activePlayer}`
    ).textContent = currentScore;
    if (playing) {
      scores[activePlayer] = scores[activePlayer] + currentScore;

      document.querySelector(`#score-${activePlayer}`).textContent =
        scores[activePlayer];

      let inputs = input.value;
      // let winningScore;

      if (inputs === '') {
        winningScore = 100;
      } else {
        winningScore = inputs;
      }
      if (scores[activePlayer] >= winningScore) {
        // Chrck if players score is >= 100
        playing = false;
        dice.classList.add('hidden');
        document
          .querySelector(`.player-${activePlayer}`)
          .classList.add('player-winner');
        //   dice01.style.display = 'none';
        //   dice02.style.display = 'none';
        dicestyle(dice01, dice02);
        document
          .querySelector(`.player-${activePlayer}`)
          .classList.remove('player-active');
        document.querySelector(
          `#name-${activePlayer}`
        ).textContent = ` WINNER!`;
      }
    }
  } else {
    switchPlayer();
  }
}

// Function when dice is rolled
btnRoll.addEventListener('click', diceRoll);

function diceRoll() {
  // control structure, check if the player is playing
  if (playing) {
    // Generate a random number for dice
    const dice1 = Math.trunc(Math.random() * 6) + 1;
    const dice2 = Math.trunc(Math.random() * 6) + 1;
    // The vaiable above eill give us values from 0-6
    // If playing display the dice now

    // const dice01 = document.getElementById('dice-1');
    // const dice02 = document.getElementById('dice-2');
    dice01.style.display = 'block';
    dice02.style.display = 'block';
    // dice.style.display = 'block';
    dice01.classList.remove('hidden');
    dice01.src = `./img/dice-${dice1}.png`;
    dice02.src = `./img/dice-${dice2}.png`;
    let inputs = input.value;
    // check if dice rolled 1
    if (inputs === '') {
      winningScore = 100;
      calc();
    } else if ((winningScore = inputs)) {
      calc();
      //   dice01.style.display = 'block';
      //   dice02.style.display = 'block';
      //   //   winningScore = inputs;
      //   if (dice01 != 1 && dice2 != 1) {
      //     currentScore += dice1 + dice2;
      //     document.querySelector(
      //       `#current-${activePlayer}`
      //     ).textContent = currentScore;
      //     if (playing) {
      //       scores[activePlayer] = scores[activePlayer] + currentScore;

      //       document.querySelector(`#score-${activePlayer}`).textContent =
      //         scores[activePlayer];

      //       let inputs = input.value;
      //       // let winningScore;

      //       if (inputs === '') {
      //         winningScore = 100;
      //       } else {
      //         winningScore = inputs;
      //       }
      //       if (scores[activePlayer] >= winningScore) {
      //         // Chrck if players score is >= 100
      //         playing = false;
      //         dice.classList.add('hidden');
      //         document
      //           .querySelector(`.player-${activePlayer}`)
      //           .classList.add('player-winner');
      //         //   dice01.style.display = 'none';
      //         //   dice02.style.display = 'none';
      //         dicestyle(dice01, dice02);
      //         document
      //           .querySelector(`.player-${activePlayer}`)
      //           .classList.remove('player-active');
      //         document.querySelector(
      //           `#name-${activePlayer}`
      //         ).textContent = ` WINNER!`;
      //       }
      //     }
      //   }
    }
  } else {
    switchPlayer();
  }

  // if (dice01 != 1 && dice2 != 1) {
  //   currentScore += dice1 + dice2;
  //   document.querySelector(
  //     `#current-${activePlayer}`
  //   ).textContent = currentScore;
  //   // } else {
  //   switchPlayer();
}

//     if (lastDice === 6 && dices === 6) {
//       // Player looses score

//       scores[activePlayer] = 0;
//       document.querySelector(`#score-${activePlayer}`).textContent = '0';
//       switchPlayer();
//     } else if (dices != 1) {
//       currentScore += dices;
//       document.querySelector(
//         `#current-${activePlayer}`
//       ).textContent = currentScore;
//     } else {
//       switchPlayer();
//     }
//     lastDice = dices;
//   }

// Working on the btnHold
// btnHold.addEventListener('click', hold);

function hold() {
  if (playing) {
    // Add current score to active player score
    scores[activePlayer] = scores[activePlayer] + currentScore;

    document.querySelector(`#score-${activePlayer}`).textContent =
      scores[activePlayer];

    let inputs = input.value;
    // let winningScore;

    if (inputs === '') {
      winningScore = 100;
    } else {
      winningScore = inputs;
    }
    if (scores[activePlayer] >= winningScore) {
      // Chrck if players score is >= 100
      playing = false;
      dice.classList.add('hidden');
      document
        .querySelector(`.player-${activePlayer}`)
        .classList.add('player-winner');
      //   dice01.style.display = 'none';
      //   dice02.style.display = 'none';
      dicestyle(dice01, dice02);
      document
        .querySelector(`.player-${activePlayer}`)
        .classList.remove('player-active');
      document.querySelector(`#name-${activePlayer}`).textContent = ` WINNER!`;
    } else {
      switchPlayer();
    }
  }
}
btnHold.addEventListener('click', hold);
btnNeW.addEventListener('click', init);
