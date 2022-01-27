import React from "react";

import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav>
			{/* <a href="/">Home</a>
			<a href="/about">About</a>
			<a href="/contact">contacts</a> */}
			{/* 
			<Link to="/">Home</Link>
			<Link to="/about">About</Link>
			<Link to="/contact">Contact</Link> */}

			<NavLink to="/">Home</NavLink>
			<NavLink to="/about">About</NavLink>
			<NavLink to="/contact">Contact</NavLink>
		</nav>
	);
};

export default Navbar;
