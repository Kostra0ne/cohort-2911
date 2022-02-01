import FormInput from "../Components/FormInput";
import useForm from "../Hooks/useForm";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const AuthSignup = () => {
	const [values, handleChange] = useForm({ name: "", email: "", password: "" });
	const [error, setError] = useState(null);
	const navigate = useNavigate();
	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post("http://localhost:8080/api/users/signup", values)
			.then((infos) => {
				console.log("This is coming back from the server !", infos.data);
				navigate("/login");
			})
			.catch((error) => {
				setError(error.response.data);
			});
	};

	return (
		<div>
			<form className="form" onSubmit={handleSubmit}>
				<FormInput
					name="name"
					value={values.name}
					handleChange={handleChange}
				/>
				<FormInput
					name="email"
					value={values.email}
					handleChange={handleChange}
				/>
				<FormInput
					name="password"
					type="password"
					value={values.password}
					handleChange={handleChange}
				/>
				<button>Sign Up</button>
			</form>
			{error && <p>{error.message}</p>}
			<p>Already have an account?</p>
			<Link to={"/login"}>Login</Link>
		</div>
	);
};

export default AuthSignup;
