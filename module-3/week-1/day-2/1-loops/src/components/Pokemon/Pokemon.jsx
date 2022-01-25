import React from "react";

const Pokemon = ({ pokemon }) => {
	return (
		<>
			<p>Name: {pokemon.name}</p>
			<img src={pokemon.img} alt={pokemon.name} />
			<p>color: {pokemon.color}</p>
		</>
	);
};

export default Pokemon;
