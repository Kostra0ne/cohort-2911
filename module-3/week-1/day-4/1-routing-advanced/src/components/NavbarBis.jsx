import React from "react";
import { Outlet, NavLink } from "react-router-dom";
const NavbarBis = () => {
	return (
		<>
			<nav>
				<NavLink to="/old">Old</NavLink>
				<NavLink to="/old/parent">Parent</NavLink>
				<NavLink to="/old/parent/child">Child</NavLink>
				<NavLink to="/old/mother">Mother</NavLink>
			</nav>
			<Outlet />
		</>
	);
};

export default NavbarBis;
