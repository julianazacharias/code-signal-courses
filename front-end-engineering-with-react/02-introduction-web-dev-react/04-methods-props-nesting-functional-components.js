const Spaceship0 = () => {
	const startThrusters = () => {
		console.log("Thrusters are ON");
	};
	return <button onClick={startThrusters}>Start Thrusters</button>;
};

// *****************************************************************************************

const Spaceship1 = () => {
	const fuelStatus = () => {
		let fuelLevel = 70; // in percentage
		if (fuelLevel > 50) {
			return "Fuel Status: Good";
		} else {
			return "Fuel Status: Low";
		}
	};
	return <h3>{fuelStatus()}</h3>;
};

// *****************************************************************************************

const Thruster0 = () => {
	return <p>Thruster is ready!</p>;
};

const Spaceship2 = () => {
	return (
		<div>
			<Thruster />
		</div>
	);
};
// *****************************************************************************************
const Thruster1 = (props) => {
	return <p>{props.status}</p>;
};

const Spaceship3 = () => {
	let thrusterStatus = "Thrusters are functional!";

	return (
		<div>
			<Thruster status={thrusterStatus} />
		</div>
	);
};
// *****************************************************************************************

const Thruster2 = (props) => {
	// The Thruster makes use of the method passed as a prop
	return (
		<div>
			<p>{props.status}</p>
			<button onClick={props.startThrusters}>Start Thrusters</button>
		</div>
	);
};

const Spaceship4 = () => {
	let thrusterStatus = "Thrusters are functional!";

	// Our method 'startThrusters' is defined in the 'Spaceship' component
	const startThrusters = () => {
		console.log("Thrusters are ON");
	};

	// We pass `startThrusters` method to the 'Thruster' component as a prop
	return (
		<div>
			<Thruster status={thrusterStatus} startThrusters={startThrusters} />
		</div>
	);
};
// *****************************************************************************************

// What if we analysed the engine status in our Thruster? Say our parent Spaceship component passes
// an engineStatus prop, we can access it directly by destructuring it from props:

// Before destructuring
const ThrusterA = (props) => {
	console.log(props.engineStatus);
	//...
};

// After destructuring
const ThrusterB = ({ engineStatus }) => {
	console.log(engineStatus);
	//...
};
// *****************************************************************************************

const ThrusterInfo = ({ checkFuelLevel }) => {
	return <p>Fuel Level: {checkFuelLevel()}%</p>;
};

const Spaceship = () => {
	const checkFuelLevel = () => 85; // Fuel level in percentage

	return (
		<div>
			<h2>Galactic Explorer</h2>
			<ThrusterInfo checkFuelLevel={checkFuelLevel} />
		</div>
	);
};

// export default Spaceship;
// *****************************************************************************************

import React from "react";

const ControlPanel = (props) => {
	return (
		<div>
			<p>Status: {props.shipStatus}</p>
			<button onClick={props.launch}>Launch Ship</button>
		</div>
	);
};

const Spaceships = () => {
	let status = "Ready for launch";
	let shipLaunch = () => alert("Launching spaceship!");

	return (
		<div>
			<h1>Galactic Voyager 1 </h1>
			<ControlPanel shipStatus={status} launch={shipLaunch} />
		</div>
	);
};

export default Spaceships;
// *****************************************************************************************
