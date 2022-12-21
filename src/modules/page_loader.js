const scoreManager = async () => {
  const endPoint = 'games/yC6mXPc1Vo4spRm9XUzx/scores/';
  const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/${endPoint}`;
  const response = await fetch(url);
  const res = await response.json();
  const scoreList = res.result;

  // display scores on the scoreboard to users...
  const scoreboard = document.querySelector('.board');
  scoreboard.innerHTML += scoreList
    .map(
      (item) => `<div class="board-item">
                    <p class="score-text">${item.user}: ${item.score}</p>
                </div>`,
    )
    .join('');

  // change color of book div if index is not even
  const boardItems = document.querySelectorAll('.board-item');
  for (let i = 0; i < boardItems.length; i += 1) {
    const index = parseInt(i, 10) + 1;
    if (index % 2 === 0) {
      boardItems[i].style.backgroundColor = '#EEEEEE';
    }
  }
};

module.exports = scoreManager;
