require("../config/dbConfig.js");

const Duck = require("../models/RubberDuck.model");

const ducks = [
	{
		name: "LazyOne",
		color: "yellow",
		material: "plastic",
		age: "24",
		picture:
			"https://amsterdamduckstore.com/wp-content/uploads/2021/01/Wellness-rubber-duck-front-Amsterdam-Duck-Store-400x400.jpg",
	},
	{
		name: "Worker",
		color: "green",
		material: "wood",
		age: 42,
		picture:
			"https://amsterdamduckstore.com/wp-content/uploads/2017/09/Farmer-rubber-duck-front-Amsterdam-Duck-Store-400x400.jpg",
	},
	{
		name: "Guard",
		color: "red",
		material: "gold",
		age: 35,
		picture:
			"https://amsterdamduckstore.com/wp-content/uploads/2015/07/british-rubber-duck-front-e1569574622812-400x400.jpg",
	},
];

(async function () {
	try {
		await Duck.deleteMany();
		const createdDucks = await Duck.create(ducks);
		console.log(`Just created ${createdDucks.length} 🦆`);
		process.exit();
	} catch (err) {
		console.error(err);
		process.exit();
	}
})();
