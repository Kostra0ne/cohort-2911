const users = ["jill", "bill", "will"];

// for (let index = 0; index < users.length; index++) {
//   console.log(index, users[index]);
// }

// console.log("---------");

users.forEach(function (u, i) {
  console.log(i, u);
});

// console.log("---------");

// users.forEach((toto) => {
//   console.log(toto);
// });

// console.log("---------");

// users.forEach((val, index) => console.log(index, val));

// function logUser(user, index, allusers) {
//     console.log("-----");
//     console.log("individual user >", user);
//     console.log("index >", index);
//     console.log("all users >", allusers);
// }

// users.forEach(logUser);

// Array.prototype.myForEach = function (clbk) {
//   console.log("im in my forEach");
// //   console.log("this ???", this);
//   for (let index = 0; index < this.length; index++) {
//     clbk(this[index], index, this);
//   }
// };

// const x = [":)", "^^", ":/"];

// x.myForEach(function (v, i, all) {
//     console.log("in callback");
//     console.log(v, i, all);
//     console.log("----");
// });

const players = [
  { name: "Ellie", score: 10 },
  { name: "Maxine", score: 5 },
  { name: "Robyn", score: 100 },
];

// use the forEach H.O.F to display each player's score !!!

players.forEach((el) => console.log(el.score));

const res = players.forEach(function (el) {
  console.log(el.score);
});

console.log("--------");
console.log(res); // foreach always returns undefined
console.log("--------");

for (let index = 0; index < players.length; index++) {
  const player = players[index];
  console.log(index);
  if (player.score === 5) break;
}

console.log("for loop ends");
