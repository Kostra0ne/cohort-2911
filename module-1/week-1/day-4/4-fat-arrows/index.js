function foo() {
  return "foo";
}

const bar = function bar() {
  return "bar";
};

const baz = () => {
  return "bar";
};

// in JS an expression is an instruction that resolves to a value
// if a fat arrow function return only one expression, you can even omit the return 
// keyword > the fat arrow will return the first expression by default
const nil = () => "nil";

console.log(foo());
console.log(bar());
console.log(baz());
console.log(nil());

// remember : in JS, functions are objects, meaning they can be referenced (stored)
// for later reuse
// or passed as arguments to other function (as callbacks)
const funcs = [foo, bar, baz, nil]; // here we store the reference to 4 functions in an array

console.log(funcs); // an array full of executables 

console.log("should be foo >", funcs[0]()); // executed solo ...

for (let func of funcs) {
  console.log(func()); // or in a loop : )
}

const sum = (a, b) => a + b;

function sumLong(a, b) {
  return a + b;
}

console.log(sum(10, 10));
console.log(sumLong(10, 10));
console.log(sumLong(10, 10) === sum(10, 10));
