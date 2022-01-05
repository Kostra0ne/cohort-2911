// OLD SCHOOL WAY : use callbacks
function delayedAction1(clbk) {
  setTimeout(() => {
    clbk("job done @delayedAction1 !");
  }, 5000);
}

function displayResult(res) {
  console.log(res);
}

// delayedAction1(displayResult);

// NEW SCHOOL WAY : use Promises

function delayedAction2() {
  var count = 0;
  return new Promise((resolve, reject) => {
    const intervalId = setInterval(() => {
      count += 1;
      console.log("tick @delayedAction2");

      if (count === 10) {
        clearInterval(intervalId);
        resolve(count);
      }
    }, 1000);
  });
}

delayedAction2().then(res => {
  console.log("count => " + res);
});

function getAsyncResult() {
  return new Promise((resolve, reject) => {
    var score;
    setTimeout(() => {
      // i only win if score is greater than .5
      score = Math.random();
      if (score > 0.5) resolve("ok");
      else reject("not ok");
    }, 5000);
  });
}

getAsyncResult()
  .then(win => console.log(win))
  .catch(loose => console.log(loose));
