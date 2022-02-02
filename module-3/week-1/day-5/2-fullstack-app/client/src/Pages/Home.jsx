// import React, { useContext } from "react";
// import UserContext from "../Auth/UserContext";
import useAuth from "../Auth/useAuth";

const Home = () => {
	const context = useAuth();

	// const context = useContext(UserContext);
	console.log("context: ", context);
	return (
		<>
			<h1>Hey, this is home !</h1>
			<pre>{JSON.stringify(context, null, 2)}</pre>
			{context.isLoggedIn && (
				<>
					<p>And you are... 🔮</p>
					<pre>{JSON.stringify(context.currentUser, null, 2)}</pre>
				</>
			)}
		</>
	);
};

export default Home;
