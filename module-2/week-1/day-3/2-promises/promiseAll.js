const run = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("done running");
        reject("work harder");
    }, 2000);
});

const workout = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("workout done");
    }, 1000);
});


Promise.all([run, workout])
.then(res => {
    console.log("--- all done ---");
    console.log(res);
    console.log(res[0]);
    console.log(res[1]);
})
.catch(err => {
    console.error("one promise has been rejected")
    console.log(err);
})