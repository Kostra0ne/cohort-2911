const fruits = ["apple", "banana", "mango", "pear", "peach"];

// filter the fruits list and keep only the ones staring with the letter p

const fruitsStartingWithP1 = fruits.filter(function (fruit) {
  return fruit.startsWith("p");
});

const fruitsStartingWithP2 = fruits.filter((fruit) => fruit.startsWith("p"));

console.log("-------------");
console.log(fruitsStartingWithP1);
console.log("-------------");
console.log(fruitsStartingWithP2);
console.log("-------------");

const players = [
  { name: "Ellie", score: 10 },
  { name: "Maxine", score: 5 },
  { name: "Katarina", score: 1000 },
  { name: "Robyn", score: 100 },
];

// implement a filter to keep only the players with a score greater than equal to 10

function myFilter(player) {
  return player.score >= 10;
}

const playersWithHighScore1 = players.filter(myFilter);

const playersWithHighScore2 = players.filter(function (player) {
  if (player.score >= 10) {
    return true;
  } else return false;
});

const playersWithHighScore3 = players.filter((player) => player.score >= 10);

const playersWithHighScore4 = players.filter(function myFilter(player) {
  return player.score >= 10;
});

// console.log(playersWithHighScore1);
// console.log(playersWithHighScore2);
// console.log(playersWithHighScore3);
console.log(playersWithHighScore4);
