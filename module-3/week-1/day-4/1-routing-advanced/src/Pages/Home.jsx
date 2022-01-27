import React from "react";

import { useNavigate, useLocation } from "react-router-dom";

const Home = () => {
	const navigate = useNavigate();
	const location = useLocation();
	console.log(navigate);

	return (
		<div>
			<h1>Home</h1>

			<pre>{JSON.stringify(location, null, 2)}</pre>

			<p onClick={() => navigate("/about")}>Hellow</p>
		</div>
	);
};

export default Home;
