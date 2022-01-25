import React, { useState } from "react";
import ListItem from "../Pokemon/ListItem";
import baseState from "./../../pokemons";

const BasicList = () => {
	const [list, setList] = useState(baseState);
	const myNewDisplay = [];

	// list.forEach((poka, i) => {
	// 	myNewDisplay.unshift(
	// 		<li className="ListItem" key={poka.name}>
	// 			<ListItem item={poka} />
	// 		</li>
	// 	);
	// });

	const sortByColorName = () => {
		const copy = [...list];
		copy.sort((a, b) => {
			return a.color.localeCompare(b.color);
		});
		setList(copy);
	};

	const resetList = () => {
		setList(baseState);
	};
	console.log(myNewDisplay);

	return (
		<div>
			{/* <ul>
				{list.map((pokemon) => (
					<li>{pokemon.name}</li>
				))}
			</ul> */}
			{/* <h3>First List</h3>
			<ul>{myNewDisplay}</ul> */}
			<h3>A second list</h3>
			<button onClick={sortByColorName}>Sort by color</button>
			<button onClick={resetList}> Reset</button>
			<ul>
				{list.map((poke) => {
					console.log(poke.name);
					return (
						<li className="ListItem" key={poke.name}>
							<ListItem item={poke} />
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default BasicList;
