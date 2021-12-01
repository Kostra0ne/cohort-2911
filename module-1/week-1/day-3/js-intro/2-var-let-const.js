var foo = "bar";

console.log(foo);

// variable > change over time
// can start with [a-z|A-Z|$|_];

// var User = "toto"; values starting with uppercases are constructor

foo = "baz";

// camelCase (against PascalCase versus kebab-case )

var userAdmin = "gui";

console.log(foo);

// let modern option to declare variable
// the behave like vars but with constraints

let userCat = { name: "Mina" };
console.log(userCat);

userCat = { name: "Fugee" };
console.log(userCat);

console.log(lunch);

var lunch = "kebab";

console.log(lunch);

const artist = "banksy";

// console.log(artist);
// artist = "toto"; // this will throw an Error() > cannot reassign const

const userDog = {
  name: "Wako",
  age: 10,
};

userDog.hobbies = "chew a bone";
console.log(userDog);

// userDog = {name: "Snoopy"}

let titi = "toto";

console.log(titi);
