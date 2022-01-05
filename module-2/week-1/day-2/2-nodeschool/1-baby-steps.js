// console.log(process.argv);
// console.log(Array.isArray(process.argv));

// let sum = 0;

// for (let i = 2; i < process.argv.length; i++) {
//   sum += Number(process.argv[i]);
// }


const [, , ...numbers] = process.argv;
console.log(numbers.reduce((a, v) => a + +v, 0));
