const fs = require("fs");

const handleRead = (err, buffer) => {
  const text = buffer.toString();
  const count = text.split("\n").length - 1;
  console.log(count);
};

fs.readFile(process.argv[2], handleRead);
