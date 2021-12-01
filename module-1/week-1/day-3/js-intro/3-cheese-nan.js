

// NaN Not A Number

console.log(typeof NaN);
console.log(NaN === NaN);
console.log('-----');
console.log(isNaN(12));
console.log(isNaN("23"));
console.log(":/", isNaN(null));
console.log(isNaN(true));
console.log(isNaN("toto"));
console.log('-----');
console.log(false == 0);
console.log(true == 1);
console.log("------>");
console.log(!isNaN(13));
console.log(isFinite("12"));
console.log(isFinite(NaN));