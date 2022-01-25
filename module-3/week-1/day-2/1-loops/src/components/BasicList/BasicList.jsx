import React from "react";
import Pokemon from "../Pokemon/Pokemon";

const BasicList = ({ pokemons }) => {
	const myNewDisplay = [];

	pokemons.forEach((poka, i) => {
		myNewDisplay.push(
			<li key={poka.name}>
				<Pokemon pokemon={poka} />
			</li>
		);
	});
	console.log(myNewDisplay);
	return (
		<div>
			{/* <ul>
				{pokemons.map((pokemon) => (
					<li>{pokemon.name}</li>
				))}
			</ul> */}
			<ul>{myNewDisplay}</ul>
			{/* <ul>
				{pokemons.map((poke) => {
					console.log(poke.name);
					return (
						<li>
							<Pokemon pokemon={poke} />
						</li>
					);
				})}
			</ul> */}
		</div>
	);
};

export default BasicList;
