const matrix = [
  ["hello", "how", "are", "you", "today", "?"], // 0
  //  0         1      2      3       4
  ["wassup", "mate", "yo", "all", "gaaad"], // 1
  //   0           1     2     3       4
  ["foo", "bar", "baz", "nil"], // 2
  //   0      1      2      3
]; // length(3)

// let read each individual value in the matrix (nested array)
for (let i = 0; i < matrix.length; i++) {
  // console.log(i, matrix[i]);
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(i, j);
    console.log(matrix[i][j]);
  }
  console.log("----");
}

const booleans = [
  [true, false, false, true],
  [1 === 1, 1 == "1", 1 != 2, 1 !== "1"],
  [Boolean("hello"), Boolean(0), Boolean([]), !!42, !!"toto", !!"amine"],
];

console.log("--- the full boolean matrix ---");
console.log(booleans);
console.log("--- lets access each first level values (arrays) ---");

for (let i = 0; i < booleans.length; i++) {
  console.log(`--- level ${i} ---`);
  for (let j = 0; j < booleans[i].length; j++) {
    console.log(booleans[i][j]);
  }
}

console.log("loop ends");

console.log("--- bootcamps  ! ---");

const ironhackCamps = [
  [{ name: "samir" }, { name: "anne" }, { name: "joss" }, { name: "arthur" }],
  [
    { name: "pauline" },
    { name: "marie" },
    { name: "marc" },
    { name: "hang" },
    { name: "jeremie" },
  ],
  [{ name: "nina" }, { name: "frank" }, { name: "anthony" }, { name: "david" }],
  [
    { name: "frank" },
    { name: "miguel" },
    { name: "yagmur" },
    { name: "myriam" },
    { name: "foo" },
    { name: "toto" },
  ],
];

console.log("********");
// code a nested for loop to display each ironhacker's name

for (let i = 0; i < ironhackCamps.length; i++) {
  console.log(`boot camp ${i + 1}`);
  for (let j = 0; j < ironhackCamps[i].length; j++) {
    const name = ironhackCamps[i][j].name;
    console.log( ironhackCamps[i][j].name === name);
    console.log(name);
  }
  console.log("-----");
}

// const hacker = {
//   name: "Franck",
//   age: 30,
//   height: "1.95",
// };

// function accessObjectValue(obj, key) {
//   return obj[key] || "key wasn't found on this object";
// }

// const height = accessObjectValue(hacker, "name");
// const unfound = accessObjectValue(hacker, "toto");

// console.log(height, " | ", unfound);
