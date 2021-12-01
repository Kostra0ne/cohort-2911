/*

primitives values
// constructors
String
Number
Boolean
null
undefined

// extra (out of course's scope)
Symbol 
BigInt

*/

console.log("--------STRING----------");
console.log(typeof "hello world");
console.log(typeof "hello world");
console.log(typeof `hello world`);
console.log("bonjour Victor");
console.log("--------NUMBER----------");
console.log(typeof 0);
console.log(-1);
console.log(1);
console.log(2.23);
console.log("bonjour Victor, welcome to day " + 3);
console.log("--------BOOLEAN----------");
console.log(typeof true, typeof false);
console.log(true);
console.log(false);
console.log("do you follow ? ", true);
console.log("--------null----------");
// temporary OR definitive absence of value
// null is the result of a writing > somebody or something (program/function) wrote null
var thing = null;
// console.log(thing);
// console.log(typeof thing);
var victorsHobby = null;
console.log(victorsHobby);
/*
... time passes ...
*/

victorsHobby = "music";
console.log(victorsHobby);

console.log("--------undefined----------");
// no value at all > emptyness > nada !
// nobody wrote what
var x;
var y = undefined;

console.log(x === y);

// TABLE OF TRUTH
/*
AND TABLE (false wins)
true and true   => true
false and false => false
true and false  => false
false and true  => false

OR TABLE (true wins)
true or true   => true
false or false => false
true or false  => true
false or true  => true


*/

// Objects
// -------
// litteral
// array
// function

// object represent real world or abstract objects
console.log("--------OBJECTS----------");
var cat = {
  name: "fugee",
  age: 3,
  colors: ["white", "gray"],
  isCute: true,
  isEvil: true,
  favoriteToy: {
    description: "a fluffy toy",
  },
  speak: function () {
    return "meeeeeowww";
  },
};

console.log(cat);
console.log(typeof cat);
// accessors > access any value associated to any key in an object literal via 2 ways

// direct indexing > .
console.log(cat.name);
console.log(cat.colors);

// indirect indexing > [string]
var key = "colors";
console.log(cat[key]);
console.log(cat.name === cat["name"]);

console.log(cat.favoriteToy.description);

console.log(cat.speak())

// typeof operator

// int x = 0
// x = 0.2
