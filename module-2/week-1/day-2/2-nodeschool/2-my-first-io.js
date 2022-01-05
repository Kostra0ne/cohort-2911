const fs = require("fs");
// import the core node API fs => stands for File System : a librairie to deal with i/o on your filesystem
const pathToFile = process.argv[2];
// where is the file we want to read ? 
const buffer = fs.readFileSync(pathToFile);
// console.log(buffer);
// buffer contains the binary representation of the text inside the file
const text = buffer.toString();
// we as human are not that good to read binary : so let's use plain ol' text !
// console.log(text);
const count = text.split("\n").length - 1;

console.log(count);
