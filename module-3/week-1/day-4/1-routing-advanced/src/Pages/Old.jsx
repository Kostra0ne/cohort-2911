import React from "react";
import { Outlet, useLocation } from "react-router-dom";
const Old = () => {
	const location = useLocation();
	return (
		<div>
			<h3>Current location:</h3>
			<pre>{JSON.stringify(location, null, 2)}</pre>
			<h1>Old</h1>
		</div>
	);
};

export default Old;
