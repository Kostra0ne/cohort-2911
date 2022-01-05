console.log("hello world !");

// PROMISES !!!
// MONGOOSE TO LINK EXPRESS SERVER TO MONGO SERVER
// PERFORM CRUD OPERATIONS
// DEFINE MODELS (Document's Schemas in DB => shape your records )
// MONGOOSE USES PROMISES A LOT !!!

function myFirstPromise() {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.random();
    if (randomNumber > 0.5) resolve("YAY");
    else reject("NAY");
  });
}

myFirstPromise()
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  })
  .finally(x => {
    console.log("done anyway, im passing here")
  })



// const myFirstPromise = (timing) => new Promise((resolve, reject) => {
//     const condition = Math.random();
//     setTimeout(() => {
//         if (condition > .5) resolve({name: "foo"});
//         else reject("failed");
//     }, timing);
//     // resolve => if the async operation is successfull
//     // reject  => if the async operation failed
// });

// myFirstPromise(1000).then(res => {
//     console.log("success : ", res);
// }).catch(error => {
//     console.log("error :", error);
// });

// console.log("life goes on ...");

// // Any promise has 3 states =>
// // A  - pending ... the async operation is beeing performed
// // B  - resolved ...
// // B' - rejected ...

// // console.log(res);
