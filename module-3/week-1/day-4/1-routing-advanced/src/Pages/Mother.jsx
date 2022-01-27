import React from "react";
import { Outlet } from "react-router-dom";
const Mother = () => {
	return (
		<div>
			<h1>Mother</h1>
			<Outlet />
		</div>
	);
};

export default Mother;
