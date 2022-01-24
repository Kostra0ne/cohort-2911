const { model, Schema } = require("mongoose");

const userSchema = new Schema({
	name: String,
	email: {
		type: String,
		unique: true,
		required: true,
	},
	password: String,
});

const User = model("user", userSchema);

module.exports = User;
