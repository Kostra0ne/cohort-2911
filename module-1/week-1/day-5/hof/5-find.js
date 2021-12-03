const players = [
  { name: "Ellie", score: 10 },
  { name: "Maxine", score: 5 },
  { name: "Karim", score: 50 },
  { name: "Katarina", score: 1000 },
  { name: "Frank", score: 5 },
  { name: "Robyn", score: 100 },
  { name: "Joel", score: 5 },
];

// find the first player with a score that is greater than 5

const foundPlayer = players.findIndex((player) => player.score === 5);

console.log(foundPlayer);