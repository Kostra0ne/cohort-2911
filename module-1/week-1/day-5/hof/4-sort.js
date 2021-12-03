const numbers = [1, -1, 1000, 6.7, 12000, -1000];

const players = [
  { name: "Ellie", score: 10 },
  { name: "Maxine", score: 5 },
  { name: "Katarina", score: 1000 },
  { name: "Robyn", score: 100 },
];

console.log("----");
// sort the numbers array in ascending order

const sortedASC = numbers.sort((a, b) => {
  return a - b;
  // must return a positve integer
  // negative integer
  // 0
});

const sortedDESC = numbers.sort((a, b) => {
  return b - a;
});

console.log(sortedASC);

const clone = [...players];
clone.sort((player1, player2) => player2.score - player1.score);

console.log(players);
console.log(clone);
