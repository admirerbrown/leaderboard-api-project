import Player from './score_keeper.js';

// get form data...
const formDetails = () => {
  const userName = document.querySelector('.name');
  const userScore = document.querySelector('.score');

  document.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = userName.value;
    const score = userScore.value;
    const newPlayer = new Player(name, score);
    newPlayer.saveScore(newPlayer);

    // toast notification ...
    const x = document.getElementById('snackbar');
    x.className = 'show';
    setTimeout(() => { x.className = x.className.replace('show', ''); }, 3000);

    userName.value = '';
    userScore.value = '';
  });
};

export default formDetails;