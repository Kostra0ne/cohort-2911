import { NavLink } from "react-router-dom";
import useAuth from "../Auth/useAuth";

const Navbar = () => {
	const { isLoggedIn, currentUser, removeUser } = useAuth();
	return (
		<nav>
			{currentUser && <span>Hello {currentUser.name}</span>}
			<NavLink to="/">Home</NavLink>
			<NavLink to="/list">Rubberducks</NavLink>
			<NavLink to="/create">Create a duck</NavLink>
			{!isLoggedIn && (
				<>
					<NavLink to="/login">Log-in</NavLink>
					<NavLink to="/signup">Sign-Up</NavLink>
				</>
			)}
			{isLoggedIn && <button onClick={removeUser}>Log-Out</button>}
		</nav>
	);
};

export default Navbar;
