import React from "react";
import { Outlet } from "react-router-dom";
const Old = () => {
	return (
		<div>
			<h1>Old</h1>
			<Outlet />
		</div>
	);
};

export default Old;
