import axios from "axios";
import React, { useState } from "react";
import useForm from "../Hooks/useForm";
import { Link, useNavigate, useLocation } from "react-router-dom";
import FormInput from "../Components/FormInput";
import useAuth from "../Auth/useAuth";

const LoginPage = () => {
	const [values, setValues] = useForm({ email: "", password: "" });

	const [error, setError] = useState(null);
	const navigate = useNavigate();

	const { storeToken, authenticateUser } = useAuth();
	const location = useLocation();
	const state = location.state;
	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post("http://localhost:8080/api/users/login", values)
			.then((res) => {
				console.log("JWT token:", res.data);
				storeToken(res.data.authToken);
				authenticateUser();
				navigate("/");
			})
			.catch((e) => {
				console.log(e);
				setError(e.response.data);
			});
	};
	return (
		<div>
			<form className="form" onSubmit={handleSubmit} onChange={setValues}>
				<FormInput name="email" value={values.email} />
				<FormInput name="password" type="password" value={values.password} />
				<button>Login</button>
			</form>
			{error && <p>{error.message}</p>}
			<p>Don't have an account yet?</p>
			<Link to={"/signup"}>Sign Up</Link>
			{state && (
				<pre>
					You were redirected from: <br /> {JSON.stringify(state, null, 2)}
				</pre>
			)}
		</div>
	);
};

export default LoginPage;
