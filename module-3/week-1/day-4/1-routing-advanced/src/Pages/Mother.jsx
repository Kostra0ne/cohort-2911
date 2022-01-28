import React from "react";
import { Outlet, useLocation } from "react-router-dom";
const Mother = () => {
	const location = useLocation();
	return (
		<div>
			<h3>Current location:</h3>
			<pre>{JSON.stringify(location, null, 2)}</pre>
			<h1>Mother</h1>
			<Outlet />
		</div>
	);
};

export default Mother;
