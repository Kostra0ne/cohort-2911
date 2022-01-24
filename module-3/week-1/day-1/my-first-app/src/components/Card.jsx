import React from "react";

const Card = (props) => {
	console.log(props);
	return (
		<div className="card">
			<div className="avatar">
				<img src={props.picture} alt={props.name} />
			</div>
			<pre>{JSON.stringify(props, null, 2)}</pre>
			<p>Name: {props.name}</p>
			<p>Age in human age: {props.age * 7}</p>
		</div>
	);
};

export default Card;
