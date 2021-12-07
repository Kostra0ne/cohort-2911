// function Foo() {

// }

// const res1 = Foo();
// console.log(typeof res1);

// const res2 = new Foo(); // calling the foo function as a constructor
// console.log(typeof res2);
// console.log(res2 instanceof Foo);
// console.log(res2);

function IronHacker(name, email, hobbies = []) {
  this.name = name || "anonymous hacker";
  this.email = email || null;
  this.cohort = "2911";
  this.hobbies = [...hobbies];
  // hobbies
}

IronHacker.prototype.sayMyName = function () {
  return `Hello ! My name is ${this.name}`;
};

IronHacker.prototype.getMyCohort = function () {
  return this.cohort;
};

const hacker1 = new IronHacker("Anne", "foo@foo.foo", ["snowboard"]);
const hacker2 = new IronHacker("Mamadou", "bar@bar.bar", ["videogame"]);
const hacker3 = new IronHacker();

// console.log(hacker1.sayMyName);

console.log(hacker1.sayMyName());
console.log(hacker2.sayMyName());
console.log(hacker3.sayMyName());

console.log("what is the hacker3's cohort ?", hacker3.getMyCohort())

// console.log(hacker2);
// console.log(hacker3);
