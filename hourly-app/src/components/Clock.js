//rfce IS SORCERY

import React, { useEffect, useState } from 'react'


function Clock() {
	const [clockState, setClockState] = useState();

	useEffect(() => {
		setInterval(() => {
           
			const date = new Date();
			setClockState(date.toLocaleTimeString());

		}, 1000);
	}, []);

	function printState() {
		console.log(clockState);
		//console.log(initTimeState);
	}

	printState();	
    
return (
		<div
			style={{
				fontSize: "55px",
				margin: "20px",
				color: "pink",
				textAlign: "center",
			}}
		>
			{clockState}
		</div>

	);
}



export default Clock;

