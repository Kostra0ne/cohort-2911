function wakeUp() {
  return new Promise((resolve, reject) => {
    const rand = Math.random();
    if (rand < 0.5) {
      resolve("Yawnnn, Time to wake up !");
    } else {
      reject("dang... i forked up :/");
    }
  });
}

function eatBreakfast() {
  return new Promise((resolve, reject) => {
    const rand = Math.random();
    setTimeout(() => {
      if (rand > 0.5) {
        resolve("Yay ! Coffee or Tea ?!!!");
      } else reject("OH man i should stay home today :D");
    }, 2000);
  });
}

function eatLunch() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Yummy, Pizza");
    }, 2000);
  });
}

function eatDiner() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Yummy, Soup");
    }, 2000);
  });
}

function work(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${time} JOB DONE`);
    }, 2000);
  });
}

function relax() {
  console.log("What's to watch on Netlix ??? ;)");
}

// (function thenCatchGAng() {
//   const actions = [];
//   wakeUp()
//     .then((a) => {
//       console.log(a);
//       // actions.push(a);
//       eatBreakfast().then((b) => {
//         console.log(b);
//         // actions.push(b);
//         work("morning").then((c) => {
//           // actions.push(c);
//           console.log(c);
//           eatLunch().then((d) => {
//             // actions.push(d);
//             console.log(d);
//             work("afternoon").then((e) => {
//               // actions.push(e);
//               console.log(e);
//               eatDiner().then((f) => {
//                 // actions.push(f);
//                 console.log(f);
//                 relax();
//               });
//             });
//           });
//         });
//       });
//     })
//     .catch((sleepin) => {
//       console.error(sleepin);
//     });
// })();

(async function asyncAwaitGang() {
  try {
    let res;
    res = await wakeUp();
    console.log(res);

    res = await eatBreakfast();
    console.log(res);

    res = await work("morning");
    console.log(res);

    res = await eatLunch();
    console.log(res);

    res = await work("afternoon");
    console.log(res);

    res = await eatDiner();
    console.log(res);

    relax();
  } catch (error) {
    console.log(error);
  }
})();
