const myFirstPromise = timing =>
  new Promise((resolve, reject) => {
    const condition = Math.random();
    setTimeout(() => {
      if (condition > 0.5) resolve("success");
      else reject("failed");
    }, timing);
    // resolve => if the async operation is successfull
    // reject  => if the async operation failed
  });

async function delayedAction() {
  var result;
  try {
    result = await myFirstPromise(2000);
    // proceed the logic here if success
    doSomethingWithTheResult(result);
  } catch (err) {
    result = err;
    // proceed the logic here if failure
    doSomethingWithTheFailure(result);
  }
}

function doSomethingWithTheSuccess(r) {
  console.log(r);
}

function doSomethingWithTheFailure(r) {
  console.error(r);
}

// setInterval(() => {
delayedAction();
// }, 1000);
