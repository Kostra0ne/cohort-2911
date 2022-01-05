const promiseInACallbackFashion = (timing, resolve, reject) => {
    const condition = Math.random(); // between 0 and .99
    setTimeout(() => {
        if (condition > .5) resolve("success !");
        else reject("failure !");
    }, timing);
};

const successClbk = (res) => console.log(res);
const errorClbk = (err) => console.error(err);

promiseInACallbackFashion(3000, successClbk, errorClbk);
