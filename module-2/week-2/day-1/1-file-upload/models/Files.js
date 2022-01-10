const { Schema, model } = require("mongoose");

const fileSchema = new Schema({
  name: String,
  URL: String,
});

const FileModel = model("files", fileSchema);

module.exports = FileModel;
