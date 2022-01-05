const mymodule = require("./5-my-module.js");

mymodule(process.argv[2], process.argv[3], (err, filteredList) => {
  if (err) console.error(err);
  else filteredList.forEach((fileName) => console.log(fileName));
});
