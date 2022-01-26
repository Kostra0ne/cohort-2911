import React from "react";

const OneContact = (props) => {
	const { name, email, callbackDelete } = props;
	// console.log(props);
	return (
		<p onClick={() => callbackDelete(email)}>
			<span className="name">{name}</span>
			<span className="email">{email}</span>
		</p>
	);
};

export default OneContact;
