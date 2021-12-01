const x = "1";
const y = "1";

console.log(x === y);

console.log("---------");

const player1 = { name: "foo" };
const player2 = { name: "foo" };

console.log(player1.name === player2.name);


console.log("player1");
console.log(player1);


const player3 = player1;

console.log("-----------");

console.log("player3");
console.log(player3);

player3.name = "gui";

console.log("------after modifying name of player -----");

console.log(player1);
