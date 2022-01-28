import React, { useState, useEffect } from "react";

const Counter = () => {
	const [count, setCount] = useState(0);
	const [name, setName] = useState("");

	useEffect(() => {
		console.log("Component did mount !");
	}, []);

	useEffect(() => {
		console.log("Count did update !");
	}, [count]);

	useEffect(() => {
		console.log("name did update !");
	}, [name]);

	// useEffect(() => {
	// 	console.log("Mounting and updating things");
	// }, [count, name]);

	useEffect(() => {
		return () => {
			console.log("Unmounting Counter component");
		};
	}, []);

	return (
		<>
			<button onClick={() => setCount(count - 1)}>-</button>
			<h2>{count}</h2>
			<button onClick={() => setCount(count + 1)}>+</button>

			<div>
				<input
					type="text"
					name="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</div>
		</>
	);
};

export default Counter;
