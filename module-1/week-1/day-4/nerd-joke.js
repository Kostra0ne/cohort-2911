// console.log(Array.isArray(arr))
// Array.isArray is not tied to Array.prototype
// it's an Abstract Operation
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-isarray

/*
https://262.ecma-international.org/6.0/#sec-abstract-operations

These operations are not a part of the ECMAScript language; they are defined here to solely to aid the specification of the semantics of the ECMAScript language. Other, more specialized abstract operations are defined throughout this specification.
*/

// so my joke can not work :/

// still we can access the methods associated to the prototype

Array.prototype.push = function () {
  return "foo";
};

const arr = [];

const x = arr.push("hey");
console.log("new length > ", x);
console.log("no value added", arr);
