console.log("async is powerfull : timeout !");

function sayHello() {
  console.log("Hello Squad (timout) !");
}

// let's execute sayHello in 5 seconds
// time run the provided callback (func) only once
const timeoutId = setTimeout(sayHello, 5000);
// run the provided callback (here > sayHello) in 5000 ms > 5 secs

// clearTimeout(timeoutId);

