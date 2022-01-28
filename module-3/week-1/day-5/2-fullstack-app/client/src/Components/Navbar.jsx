import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav>
			<NavLink to="/">Home</NavLink>
			<NavLink to="/list">Rubberducks</NavLink>
			<NavLink to="/create">Create a duck</NavLink>
		</nav>
	);
};

export default Navbar;
