//

function foo() {
  // write whaterver logic is involved to to the task
  // ...
  // ...
  // ...
  // ...
  // ...
  // return a value
  // return undefined; // return undefined explicitely
  // return; // will return undefined
  // without a return statement, any func returns undefined by default
  return "im foo function's return value";
}

const toto = foo;

console.log("here is a ref to the fucntion foo");
console.log(toto);

const result = foo();
console.log("--------");

console.log("here is the value returned when function is executed");
console.log(result);

function greeting(who, lang) {
  const messages = {
    de: "Halo",
    en: "Hello",
    es: "Hola",
    fr: "Bonjour",
    it: "Ciao",
  };

  const baseGreeting = messages[lang] || messages["en"];

  return baseGreeting + " " + (who || "stranger");
}

// D.R.Y > Don't Reapeat Yourself



console.log(greeting("Florian", "fr"));
console.log(greeting("Silvia", "it"));
console.log(greeting("Bernard"));

console.log("-----------------");
// let user;

// console.log(greeting("", "ru"));

/**
 * a simple sum function taking 2 arguments and return the sum of it
 * @author gui@foo.com
 * @param {Number} a any number
 * @param {Number} b any number
 * @throw an Error if a or b are not number or string that can be converted as numbers
 * @returns {Number} the sum if a nd b
 */
function sum(a, b) {
  const sum = Number(a) + Number(b);
  if (isNaN(sum)) throw new Error("a and b must be number or not NaN");
  return sum;
}

try {
  const sumResult1 = sum(1, "1"); // should be 2
  const sumResult2 = sum(1, "toto"); // should be 2
} catch (error) {
  console.error(error);
}


console.log("end of the program");

// console.log(sumResult1);
// console.log(typeof sumResult1);
