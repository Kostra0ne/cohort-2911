// MODULE SCOPE

const fooRes = foo();
// console.log("fooRes", fooRes);

const x = ":)";
console.log(x);

function foo() {
  // hoisted id declared with function keyword
  const x = 0;
  const y = "hey i'm Y";
  console.log("x in foo", x);

  function fooDeep() {
    const x = 10; // shadowing
    let z = "Zorro";
    console.log("x in fooDeep", x);

    function fooSupaDeep() {
      const x = 100; // shadowing
      z = "Senior Zorro";
      console.log("x in fooSupaDeep", x, y, z);
    }

    fooSupaDeep();
    console.log("after supaDeep execution, z is :", z);
  }

  //   console.log(z); // this will thorw an Error since z is declared in a child func scope
  fooDeep();

  return x;
}

function bar() {
  const x = {};
  console.log("x in bar", x);
}

foo();
bar();

const myModule = (function () {
  // what is module is exactly this > an IIFE

  const secretValue = "no other programs must know about this value";
  const publicValue = "this should be exposed to the outside world";

  function doYouLikeDonuts() {
    return Math.random() > 0.5;
  }

  return {
    publicValue,
    doYouLikeDonuts,
  };
})();

console.log("what is module ?", myModule);
