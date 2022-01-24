const mongoose = require("mongoose");

mongoose
	.connect(process.env.MONGO_URI)
	.then((db) => console.log(`DB connected: ${db.connection.name}`))
	.catch((e) => console.error(e));
