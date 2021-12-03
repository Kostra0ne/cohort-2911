const fruits = ["apple", "banana", "mango", "pear", "peach"];
const numbers = [2, 4, 18, 200];

// return the fruits in UPPERCASES in a new array
const toUpperCase = fruits.map((fruit) => {
  console.log("> ", fruit);
  return fruit.toUpperCase();
});

console.log(toUpperCase);

// create a new array containing each number multiply by two
const multiplied = numbers.map((n, i, arr) => n * 2);

console.log(multiplied);

console.log("-------  ITS BLACK FRIDAY TIME  --------");

const products = [
  { brand: "foo-corp", name: "pen", price: 10 },
  { brand: "samsung", name: "phone", price: 200 },
  { brand: "apple", name: "laptop", price: 1500 },
  { brand: "adidas", name: "shoe", price: 120 },
];

// we want to apply a 10% discount to each product

const discounted = products.map(function(product) {
    console.log(product.price * 0.9)
    product.price = product.price * 0.9;
    return product;
})


// WARNING > THE LAST 3 EXAMPLES ARE DOING EXACTLY THE SAME PROCESS
const discounted2 = products.map(function (product) {
  const clone = { ...product };
  //   const fakeClone = product;
  //   console.log("real > ", clone === product);
  //   console.log("fake > ", fakeClone === product);
  clone.price = clone.price * 0.9;
  return clone;
});

const discounted3 = products.map((product) => ({
  ...product,
  price: product.price * 0.9,
}));

const discounted4 = products.map((product) => {
  return { ...product, price: product.price * 0.9 };
});

console.log("-------");
// console.log(products === discounted2);
// console.log(products);
console.log(discounted3);

// spread operator works with array too !!!

const users = ["pat", "emilie", "bob"];
const clonedUsersArray = [...users]; // create a brand new array containing all the values of the original one

console.log(users === clonedUsersArray);
