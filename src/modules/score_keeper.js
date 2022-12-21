/* eslint-disable class-methods-use-this */

class Player {
  constructor(user, score) {
    this.user = user;
    this.score = score;
  }

  // create new player...
    saveScore = async (playerObject) => {
      const endPoint = 'games/yC6mXPc1Vo4spRm9XUzx/scores/';
      const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/${endPoint}`;
      const response = await fetch(url, {
        method: 'post',
        body: JSON.stringify(playerObject),
        headers: { 'Content-Type': 'application/json' },
      });
      await response.json();
    }
}
export default Player;