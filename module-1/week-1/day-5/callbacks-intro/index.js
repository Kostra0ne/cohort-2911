function a(callback) {
  return "im a : " + callback();
}

function b() {
  return "im the returned value of b";
}

function c() {
  return "im C guys !!!";
}

const x = a(b);
const z = a(c);

console.log(x);
console.log("-----");
console.log(z);

// const y = b();

// function c() {}
// const z = c();

// console.log(x === a());

// console.log(x);
// console.log("-----");
// console.log(y);
// console.log("-----");
// console.log(z);

// const user = {
//   name: "gui",
//   fetchCoffee() {
//     return "yummy coffee !!";
//   },
// };

// console.log(user.fetchCoffee())
