import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Pokemon = (props) => {
	const location = useLocation();
	const params = useParams();

	const myPokemon = props.pokemons.find(
		(poke) => poke.id === Number(params.id)
	);
	console.log(myPokemon);
	return (
		<div>
			<pre>{JSON.stringify(params, null, 2)}</pre>
			<h1>{myPokemon.name}</h1>

			<img src={myPokemon.picture} alt="" />
			{params.id > 0 && (
				<Link to={"/pokemons/" + String(Number(params.id) - 1)}>Previous</Link>
			)}
			{params.id < 45 && (
				<Link to={"/pokemons/" + String(Number(params.id) + 1)}>Next Link</Link>
			)}
			<pre>{JSON.stringify(location, null, 2)}</pre>
		</div>
	);
};

export default Pokemon;
