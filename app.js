const boxOne = document.querySelector(`.box-1`);
const boxTwo = document.querySelector(`.box-2`);
let playerOne = document.querySelector(`.player-1`);
let playerTwo = document.querySelector(`.player-2`);
let playerOneScore = document.querySelector(`.player-1-score`);
let playerTwoScore = document.querySelector(`.player-2-score`);
let currentOneScore = document.querySelector(`.current-one-score`);
let currentTwoScore = document.querySelector(`.current-two-score`);
const newGame = document.querySelector(`.new-game-btn`);
const rollDice = document.querySelector(`.roll-dice-btn`);
const hold = document.querySelector(`.hold-btn`);
let diceDiv = document.querySelector(`.dices`);
let dice = document.querySelector(`.dice-number`);
// let diceAnimationDiv = document.querySelector(`.dice-animation`);
// let diceAnimation = document.querySelector(`.dice-shake`);
let currentScore1 = 0;
let currentScore2 = 0;
let playerScore1 = 0;
let playerScore2 = 0;

rollDice.addEventListener(`click`, function (e) {
  diceDiv.classList.remove(`none`);
  let diceNumber = diceNumbers[getRandomDiceNumber()];
  dice.setAttribute(`src`, `dice-${diceNumber}.png`);
  if (
    (dice.getAttribute(`src`) === `dice-1.png`) &
    boxOne.classList.contains(`main-color`)
  ) {
    switchToPlayerTwo();
  } else if (
    (dice.getAttribute(`src`) === `dice-1.png`) &
    boxTwo.classList.contains(`main-color`)
  ) {
    switchToPlayerOne();
  }
  if (boxOne.classList.contains(`main-color`)) {
    currentScore1 += diceNumber;
    currentOneScore.innerHTML = currentScore1;
  } else {
    currentScore2 += diceNumber;
    currentTwoScore.innerHTML = currentScore2;
  }
  if (dice.getAttribute(`src`) === `dice-1.png`) {
    currentOneScore.innerHTML = 0;
    currentTwoScore.innerHTML = 0;
    currentScore1 = 0;
    currentScore2 = 0;
  }
});

hold.addEventListener(`click`, function () {
  if (boxOne.classList.contains(`main-color`)) {
    playerScore1 += currentScore1;
    playerOneScore.innerHTML = playerScore1;
    // playerScore1 = 0;
    currentScore1 = 0;
    currentOneScore.innerHTML = 0;
    switchToPlayerTwo();
  } else if (boxTwo.classList.contains(`main-color`)) {
    playerScore2 += currentScore2;
    playerTwoScore.innerHTML = playerScore2;
    // playerScore2 = 0;
    currentScore2 = 0;
    currentTwoScore.innerHTML = 0;
    switchToPlayerOne();
  }
  if (playerOneScore.innerHTML >= 100 || playerTwoScore.innerHTML >= 100) {
    if (boxOne.classList.contains(`transparent-color`)) {
      boxOne.classList.replace(`transparent-color`, `won`);
      playerOneScore.style.color = `hsla(0, 0%, 100%, 0.8)`;
      playerOneScore.innerHTML = `WON!!!`;
      playerOne.style.color = `hsla(0, 0%, 100%, 0.8) `;
    } else {
      boxTwo.classList.replace(`transparent-color`, `won`);
      playerTwoScore.style.color = `hsla(0, 0%, 100%, 0.8)`;
      playerTwoScore.innerHTML = `WON!!!`;
      playerTwo.style.color = `hsla(0, 0%, 100%, 0.8)`;
    }
    rollDice.classList.add(`none`);
    hold.classList.add(`none`);
    diceDiv.classList.add(`none`);
  }
});

newGame.addEventListener(`click`, function () {
  rollDice.classList.remove(`none`);
  hold.classList.remove(`none`);
  currentScore1 = 0;
  currentScore2 = 0;
  playerScore1 = 0;
  playerScore2 = 0;
  playerOneScore.innerHTML = 0;
  playerTwoScore.innerHTML = 0;
  currentOneScore.innerHTML = 0;
  currentTwoScore.innerHTML = 0;
  diceDiv.classList.add(`none`);
  dice.setAttribute(`src`, `dice-.png`);
  boxOne.classList.replace(`won`, `main-color`);
  boxTwo.classList.replace(`won`, `transparent`);
  playerOneScore.style.color = `#222`;
  playerTwoScore.style.color = `#222`;
  playerOne.style.color = `#222`;
  playerTwo.style.color = `#222`;
  switchToPlayerOne();
});

function switchToPlayerOne() {
  currentScore1 = 0;
  currentScore2 = 0;
  currentOneScore.innerHTML = 0;
  currentTwoScore.innerHTML = 0;
  boxOne.classList.add(`main-color`);
  boxOne.classList.remove(`transparent-color`);
  boxTwo.classList.add(`transparent-color`);
  boxTwo.classList.remove(`main-color`);
  playerOneScore.classList.add(`weight-bold`);
  playerTwoScore.classList.remove(`weight-bold`);
  playerOneScore.classList.remove(`weight-thin`);
  playerTwoScore.classList.add(`weight-thin`);
  playerOne.classList.add(`weight-bold`);
  playerTwo.classList.remove(`weight-bold`);
  playerOne.classList.remove(`weight-thin`);
  playerTwo.classList.add(`weight-thin`);
}
function switchToPlayerTwo() {
  currentScore1 = 0;
  currentScore2 = 0;
  currentOneScore.innerHTML = 0;
  currentTwoScore.innerHTML = 0;
  boxOne.classList.remove(`main-color`);
  boxOne.classList.add(`transparent-color`);
  boxTwo.classList.remove(`transparent-color`);
  boxTwo.classList.add(`main-color`);
  playerOneScore.classList.remove(`weight-bold`);
  playerTwoScore.classList.add(`weight-bold`);
  playerOneScore.classList.add(`weight-thin`);
  playerTwoScore.classList.remove(`weight-thin`);
  playerOne.classList.remove(`weight-bold`);
  playerTwo.classList.add(`weight-bold`);
  playerOne.classList.add(`weight-thin`);
  playerTwo.classList.remove(`weight-thin`);
}

function getRandomDiceNumber() {
  return Math.floor(Math.random() * diceNumbers.length);
}
const diceNumbers = [1, 2, 3, 4, 5, 6];

//aldigim ders: true/false kullanmaliydim
