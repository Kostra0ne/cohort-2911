const promiseInACallbackFashion = (timing, resolve, reject) => {
    const condition = Math.random();
    setTimeout(() => {
        if (condition > .5) resolve("success !");
        else reject("failure !");
    }, timing);
};

const successClbk = (res) => console.log(res);
const errorClbk = (err) => console.log(err);

promiseInACallbackFashion(3000, successClbk, errorClbk);