const numbers = [1, 1, 1, 10000];

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log("sum with for loop");
console.log(sum);

console.log("--- sum with reduce ---");

const xx = numbers.reduce(function (prevVal, currentVal) {
  console.log(prevVal);
  return prevVal + currentVal;
});

const yy = numbers.reduce((prevVal, currentVal) => prevVal + currentVal);

console.log("sum xx >", xx);
console.log("sum yy >", yy);

const users = [
  { name: "foo", isConnected: true },
  { name: "bar", isConnected: true },
  { name: "baz", isConnected: true },
];

const isEveryBodyConnected = users.reduce((acc, u) => {
  console.log("what is acc", typeof acc);
  return acc && u.isConnected;
}, true);

// const isEveryBodyConnected = users.reduce((previousValue, u) => {
//   console.log("what is acc", typeof previousValue);
//   return typeof previousValue === "object"
//     ? previousValue.isConnected
//     : previousValue && u.isConnected;
// });

console.log("isEveryBodyConnected ?", isEveryBodyConnected);

const smileys = [":)", "^^", "-_-", ":/"];
console.log("-----");
console.log(smileys.reduce((pv, smiley) => pv + " " + smiley));

const words = ["hey", "ho", "let's", "go", "hey"];
const unique = [...new Set(words)];

const unique2 = words.reduce(
  (acc, v) => (acc.includes(v) ? acc : [...acc, v]),
  []
);

console.log(unique2);
