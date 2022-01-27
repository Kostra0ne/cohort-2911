import React from "react";
import { Outlet } from "react-router-dom";
const Child = () => {
	return (
		<div>
			<h1>Child</h1>
			<Outlet />
		</div>
	);
};

export default Child;
