import React from "react";

import "./ListItem.css";

const ListItem = (props) => {
	return (
		<>
			<p>Name: {props.item.name}</p>
			<img src={props.item.img} alt={props.item.name} />
			<p>color: {props.item.color}</p>
		</>
	);
};

export default ListItem;
