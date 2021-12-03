const fruits = ["pear", "peach", "banana", "orange"]; // l(4)
//    0        1         2        3 (l - 1)
console.log(typeof fruits);
console.log(fruits);

console.log(fruits.length);

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits[4]);
fruits[4] = "mango";
console.log(fruits[4]);
console.log(fruits[fruits.length - 1]);

//
fruits.push("pineapple");

console.log(fruits);

fruits.unshift("strawberry");
console.log(fruits);

console.log("---------------");

for (let i = 0; i < fruits.length; i += 1) {
  console.log("count > ", i);
  // console.log("count > ", fruits);
  console.log("count > ", fruits[i]);
}

console.log("---------------");

console.log("end of the loop");

const players = ["bill", "jill", "will", "hill"];

for (let i = 0; i < players.length; i++) {
  console.log(players[i]);
}

console.log("-------try with while loop --------");

let count = 0;

while (count < players.length) {
  console.log(players[count]);
  count++;
}

const alphabet = "abcdefghijklmnopqrstuvwxyz";

for (let i = 0; i < alphabet.length; i++) {
  console.log(alphabet[i]);
}

console.log("------");

for (let letter of alphabet) {
  console.log(letter);
}

console.log("loop through array of objects");

const playersObj = [
  { name: "bill", score: 10 },
  { name: "will", score: 1 },
  { name: "kill", score: 100 },
  { name: "jill", score: 10000 },
];

console.log(playersObj);

for (let index = 0; index < playersObj.length; index++) {
  console.log(index);
  // console.log(playersObj[index]);
  // "how can i print the name ?";
  console.log(playersObj[index].name);
}

const bookShelf = [
  // 0
  { author: "doug crockford", title: "js basics" },
  // 1
  { author: "sun tzu", title: "the art of war" },
  // 2
  { author: "himannen pekka", title: "the hack's ethic" },
  // 3
  { author: "johny nil", title: "foo bar baz" },
];

console.log("-----");

for (let index = 0; index < bookShelf.length; index++) {
  console.log(bookShelf[index].title);
}

const numbers1 = [1, "banana", 23, 88, 123, 42];
//                0   1   2    3    4
const numbers2 = [3, -100, 8, 0.23, 42 / 2, -3000, 30000, 23, 23.1];
//                0    1   2   3       4     5     6      7   8

// write a function taking an array as parameter
// this function returns the smallest number of the array
// bonus : it should throw an TypeError if the parameter is not an array

function findSmallestNumber(numbers) {
  if (!Array.isArray(numbers))
    throw new TypeError("numbers should be an array");
  // declare a let smallest containing the first value of numbers
  let smallest = numbers[0];
  // do a loop (starting index 1)
  for (let index = 1; index < numbers.length; index++) {
    // to check compare smallest to each value in the array
    if (numbers[index] < smallest) {
      // if the current value is less than smallest, smallest becomes the current value
      // reassign smallest with the current value since we passed the test !
      smallest = numbers[index];
    }
  }
  return smallest;
  // when the loop ends, return smallest
}

function convertAllValuesToNumbers(array) {
  const tmp = [];
  for (let index = 0; index < array.length; index++) {
    const conversion = Number(array[index]);
    if (isNaN(conversion)) throw new TypeError(array[index] + " is not a number friend");
    tmp.push(conversion);
  }
  return tmp;
}

try {
  let res1 = findSmallestNumber(convertAllValuesToNumbers(numbers1));
  let res2 = findSmallestNumber(numbers2);
  console.log("smallest numbers >", res1, res2);
} catch (err) {
  console.log(err);
}

console.log("end of the program");
