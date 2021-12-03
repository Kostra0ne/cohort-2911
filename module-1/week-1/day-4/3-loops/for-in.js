const user = {
  name: "toto",
  score: 0,
  sayHi: function () {
    return "hi !!!";
  },
};

// console.log(user.name);
// console.log(user.score);
// console.log(user.sayHi);
// console.log(user.sayHi());

for (let key in user) {
  //   console.log(key);
  //   console.log(user[key]);
  if (typeof user[key] === "function") {
    console.log(user[key]());
  }
}
