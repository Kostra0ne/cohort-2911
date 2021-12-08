console.log("async is powerfull : interval!");

function sayHello(who) {
  console.log(`Hello ${who} (interval) !`);
}

// let's execute sayHello in 5 seconds
// setInterval run the provided callback (func) as long as it's not cleared
const intervalId = setInterval(() => {
    sayHello("Victor");
}, 4);
// run the provided callback (here > sayHello) in 5000 ms > 5 secs

setTimeout(() => {
  console.log("--- CANCEL!----");
  clearInterval(intervalId);
}, 3000);
