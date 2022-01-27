import React from "react";
import { Link, Outlet } from "react-router-dom";

const Pokemons = ({ pokemons }) => {
	return (
		<div>
			<Outlet />
			<ul>
				{pokemons.map((pokemon) => {
					const id = String(pokemon.id);
					return (
						<li className="pokemon" key={pokemon.id}>
							<img src={pokemon.picture} alt={pokemon.name} />
							<Link to={id}>{pokemon.name}</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Pokemons;
