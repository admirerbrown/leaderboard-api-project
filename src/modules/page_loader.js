const scoreManager = () => {
  const scoreList = [
    {
      name: 'Peter Dury',
      score: 100,
    },
    {
      name: 'Allan Jackson',
      score: 80,
    },
    {
      name: 'Moses Adjartey',
      score: 70,
    },
    {
      name: 'Mohammed Dury',
      score: 40,
    },
    {
      name: 'Micheal Jackson',
      score: 20,
    },
    {
      name: 'Peter Pan',
      score: 10,
    },
  ];

  // display scores on the scoreboard to users...
  const scoreboard = document.querySelector('.board');
  scoreboard.innerHTML += scoreList.map((item) => `<div class="board-item">
                    <p class="score-text">${item.name}: ${item.score}</p>
                </div>`).join('');

  // change color of book div if index is not even
  const boardItems = document.querySelectorAll('.board-item');
  for (let i = 0; i < boardItems.length; i += 1) {
    const index = parseInt(i, 10) + 1;
    if (index % 2 === 0) {
      boardItems[i].style.backgroundColor = '#EEEEEE';
    }
  }
};

// TODO nextUp: write a function to automatically sort board items by score...

module.exports = scoreManager;
