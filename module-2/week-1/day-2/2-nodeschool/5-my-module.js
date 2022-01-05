const fs = require("fs");

function worker(dirName, fileExt, callback) {
  fs.readdir(dirName, (err, list) => {
    if (err) return callback(err);
    const filtered = list.filter((file) => file.endsWith(`.${fileExt}`));
    callback(null, filtered);
  });
}

module.exports = worker;
