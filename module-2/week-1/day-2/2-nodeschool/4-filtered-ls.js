const fs = require("fs");
const folderPath = process.argv[2]; // lets accesss the folder path
const fileExtension = process.argv[3]; // let's access the file extension we want to use to filter the list of files contaiined in the target folder

fs.readdir(folderPath, (err, list) => {
  if (err) throw new Error(err);
  list // all the files contained in the target folder porovided as an array of strings
    .filter((file) => file.endsWith(`.${fileExtension}`)) // keep only those that end with the desired extension
    .forEach((f) => console.log(f)); // display each of the fiktered files
});
