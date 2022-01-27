import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav>
			<NavLink to="/">Home </NavLink>
			<NavLink to="/about">About </NavLink>
			<NavLink to="/contact">Contacts </NavLink>
			<NavLink to="/pokemons">Pokemons </NavLink>
		</nav>
	);
};

export default Navbar;
