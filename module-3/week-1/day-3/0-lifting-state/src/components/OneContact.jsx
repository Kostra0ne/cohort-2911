import React from "react";

const OneContact = (props) => {
	const { name, email } = props;

	return (
		<p>
			<span className="name">{name}</span>
			<span className="email">{email}</span>
		</p>
	);
};

export default OneContact;
