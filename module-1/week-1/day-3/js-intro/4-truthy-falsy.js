// FALSY
/*
    false
    undefined
    null
    ""
    0
    NaN
*/

console.log(Boolean(false))
console.log(Boolean(undefined))
console.log(Boolean(null))
console.log(Boolean(""))
console.log(Boolean(0))
console.log(Boolean(NaN))

console.log("-------");
console.log(Boolean("toto"))
console.log(Boolean({}))
console.log(Boolean(" "))


let truthy = ":)";
let falsy = 0;

let score = 0;

if (score !== undefined) {
    console.log("in the if")
} else {
    console.log("in the else block");
}