// if statement

let score = 10;
let conditionToCheck = score >= 10;

if (conditionToCheck) {
  console.log("it's a win");
} else {
  console.log("sorry, you lost : try again");
}

let amIHungry = true;

if (amIHungry === true) {
  console.log("time to eat");
}

console.log("bla bla");

const finalResult = -10;
console.log("---------------------");

if (finalResult < 10) {
  console.log("you lost this game friend, try again");
} else if (finalResult > 10 && finalResult < 100) {
  console.log("you did ok friend, keep up !");
} else {
  console.log("you rock at this game ! congratz");
}
