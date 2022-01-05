// @ mdn : The await operator is used to wait for a Promise. It can only be used inside an async function.

const holdOnAMoment = time =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Thanks for waiting !");
    }, time);
  });

async function asyncOperation1() {
  const res = await holdOnAMoment(1000);
  console.log(res);
}

function asyncOperation2() {
  holdOnAMoment(1000)
    .then(res => console.log(res))
    .catch(err => console.error(err));
}

// asyncOperation1();
asyncOperation2();
