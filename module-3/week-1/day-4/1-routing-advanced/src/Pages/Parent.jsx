import React from "react";
import { Outlet, useLocation } from "react-router-dom";
const Parent = () => {
	const location = useLocation();
	return (
		<div>
			<h3>Current location:</h3>
			<pre>{JSON.stringify(location, null, 2)}</pre>
			<h1>Parent</h1>
			<Outlet />
		</div>
	);
};

export default Parent;
