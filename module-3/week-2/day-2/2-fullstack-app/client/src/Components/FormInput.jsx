import React, { useState } from "react";

const FormInput = ({ name, type = "text", value, handleChange }) => {
	return (
		<div className="label">
			<label htmlFor={name}></label>
			<input
				type={type}
				name={name}
				id={name}
				value={value}
				onChange={handleChange}
				placeholder={name}
			/>
		</div>
	);
};

export default FormInput;
