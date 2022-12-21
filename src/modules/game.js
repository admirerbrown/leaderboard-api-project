// create new game...
const game = async () => {
  const gameName = {
    name: 'new score keeping game',
  };
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';
  const response = await fetch(url, {
    method: 'post',
    body: JSON.stringify(gameName),
    headers: { 'Content-Type': 'application/json' },
  });
  await response.json();
};
export default game;