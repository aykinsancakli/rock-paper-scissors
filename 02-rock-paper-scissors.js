/* GAME ALGORITHM
         1) User pick a move with a button
         2) Computer generates a move based on a random number
         3) Compare playermove with computer move for the result
      */

// Object for holding multiple score values
// Get the result
let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

function playGame(playerMove) {
  //Generate Random Number
  const randomNumber = Math.random();

  //Picking a Computer Move
  let computerMove;

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  ///// Game Result
  if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      document.querySelector('.js-results').innerText = 'Tie.';
      score.ties++;
    } else if (computerMove === 'paper') {
      document.querySelector('.js-results').innerText = 'You lose.';
      score.losses++;
    } else if (computerMove === 'scissors') {
      document.querySelector('.js-results').innerText = 'You win.';
      score.wins++;
    }
  }

  if (playerMove === 'paper') {
    if (computerMove === 'paper') {
      document.querySelector('.js-results').innerText = 'Tie.';

      score.ties++;
    } else if (computerMove === 'scissors') {
      document.querySelector('.js-results').innerText = 'You lose.';

      score.losses++;
    } else if (computerMove === 'rock') {
      document.querySelector('.js-results').innerText = 'You win.';
      score.wins++;
    }
  }

  if (playerMove === 'scissors') {
    if (computerMove === 'scissors') {
      document.querySelector('.js-results').innerText = 'Tie.';
      score.ties++;
    } else if (computerMove === 'rock') {
      document.querySelector('.js-results').innerText = 'You lose.';
      score.losses++;
    } else if (computerMove === 'paper') {
      document.querySelector('.js-results').innerText = 'You win.';
      score.wins++;
    }
  }

  // Background change on result display
  if (document.querySelector('.js-results').innerText === 'Tie.') {
    document.querySelector('body').classList.add('bg-color-tie');
    document.querySelector('body').classList.remove('bg-color-lose');
    document.querySelector('body').classList.add('bg-color-win');
  } else if (document.querySelector('.js-results').innerText === 'You lose.') {
    document.querySelector('body').classList.add('bg-color-lose');
    document.querySelector('body').classList.remove('bg-color-win');
    document.querySelector('body').classList.remove('bg-color-tie');
  } else if (document.querySelector('.js-results').innerText === 'You win.') {
    document.querySelector('body').classList.add('bg-color-win');
    document.querySelector('body').classList.remove('bg-color-tie');
    document.querySelector('body').classList.remove('bg-color-lose');
  }

  //Store the result
  localStorage.setItem('score', JSON.stringify(score));

  // Display the result
  document.querySelector('.js-moves').innerHTML = `You<img
          src="images/${playerMove}-emoji.png"
          alt="Scissors sign emoji"
          class="moves-img"
        /> <img
          src="images/${computerMove}-emoji.png"
          alt="Scissors sign emoji"
          class="moves-img"
        />Computer `;

  // Display the score
  document.querySelector(
    '.js-score'
  ).innerText = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

// Display the score (always when the page uploads)
document.querySelector(
  '.js-score'
).innerText = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
