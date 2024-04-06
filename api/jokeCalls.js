const endPoint = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw&type=twopart';

const getAJoke = () => new Promise((resolve, reject) => {
  fetch(endPoint, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve({ setup: data.setup, delivery: data.delivery }))
    .catch(reject);
});

export default getAJoke;
