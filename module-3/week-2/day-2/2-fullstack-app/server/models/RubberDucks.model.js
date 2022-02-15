const { model, Schema } = require("mongoose");

const rubberDuckSchema = new Schema({
	name: String,
	material: {
		type: String,
		enum: ["gold", "wood", "plastic"],
	},
	picture: String,
});

module.exports = model("rubberduck", rubberDuckSchema);
