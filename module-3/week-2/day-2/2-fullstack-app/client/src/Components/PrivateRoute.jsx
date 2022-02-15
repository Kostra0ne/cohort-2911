import React from "react";
import useAuth from "../Auth/useAuth";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateRoute = () => {
	const location = useLocation();
	const { isLoggedIn, isLoading } = useAuth();
	if (isLoading) return <p>Loading...</p>;
	if (!isLoggedIn)
		return (
			<Navigate
				to="/login"
				state={{ prev: location.pathname, name: "I don't exist" }}
			/>
		);
	else return <Outlet />;
};

export default PrivateRoute;
