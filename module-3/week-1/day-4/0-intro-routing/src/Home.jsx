import React from "react";
import { useLocation, useParams } from "react-router-dom";

const Home = () => {
	const location = useLocation();
	const params = useParams();

	return (
		<>
			<h2>Location:</h2>
			<pre>{JSON.stringify(location, null, 2)}</pre>
			<h2>params:</h2>
			<pre>{JSON.stringify(params, null, 2)}</pre>
		</>
	);
};

export default Home;
