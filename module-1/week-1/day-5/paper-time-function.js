/*
Declare and run a function f
f takes val as argument
f returns val concatenated with it’s type

*/

// function f(val) {
//   return val + " " + typeof val;
// }

// function f(val) {
//   return `${val} ${typeof val}`;
// }

const f = (val) => `${val} ${typeof val}`;

console.log(f("helloooo"));
console.log(f(23));
console.log(f(true));
