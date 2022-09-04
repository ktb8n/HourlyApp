//trying to connect this component to the Clock Component.
//currently not functional
import React, { useEffect } from 'react'

function Greet({ name }) {
	const message = `Hello, ${name}!`;
	useEffect(() => {
		// Runs once, after mounting
		document.title = "Greetings page";
	}, []);
    console.log(message);
	return <div>{message}</div>;
};

export default Greet

