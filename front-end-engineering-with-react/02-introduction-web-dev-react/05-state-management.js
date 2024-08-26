import React, { useState } from "react";

function Counter() {
	const [count, setCount] = useState(0); // Declare 'count' state variable with initial value 0

	return (
		<div>
			<p>You clicked {count} times</p> {/* Display the current count */}
			<button onClick={() => setCount(count + 1)}>Click me</button> // Increment
			count when button is clicked
		</div>
	);
}

// export default Counter;

// *****************************************************************************************
// useState is a React hook that introduces state to functional components. useState is used to declare
// a state variable. It returns a pair: the current state value and a function to update it.

const [myState, setMyState] = useState(initialState);

// *****************************************************************************************

import React, { useState } from "react";

function ColorChanger() {
	const [color, setColor] = useState("red"); // Declare 'color' state variable with initial value 'red'

	return (
		<div>
			<h1>The current color is {color}</h1> {/* Output the color */}
		</div>
	);
}

// export default ColorChanger;

// *****************************************************************************************
import React, { useState } from "react";

function FavoriteColor() {
	const [favoriteColor, setFavoriteColor] = useState("blue");
	// Define 'favoriteColor' with initial (hardcoded) value 'blue'

	return (
		<div>
			<h1>My favorite color is {favoriteColor}</h1>
			{/* Output the favorite color */}
		</div>
	);
}

// export default FavoriteColor;
// *****************************************************************************************

import React, { useState } from "react";

function FavoriteColor() {
	const [favoriteColor, setFavoriteColor] = useState("blue");

	return (
		<div>
			<h1>My favorite color is {favoriteColor}</h1>{" "}
			{/* Output the favorite color */}
			<button onClick={() => setFavoriteColor("green")}>
				{" "}
				{/* Change color on button click */}
				Change Favorite Color
			</button>
		</div>
	);
}

// export default FavoriteColor;
// *****************************************************************************************

import { useState } from "react";

function TrafficLight() {
	const [color, setColor] = useState("red"); // Start with red color

	const switchColor = () => {
		const nextColor =
			color === "red" ? "green" : color === "green" ? "yellow" : "red";
		setColor(nextColor);
	};

	return (
		<div>
			<h1>The traffic light is {color}</h1>
			<button onClick={switchColor}>Change Color</button>
		</div>
	);
}

// export default TrafficLight;
// *****************************************************************************************

import { useState } from "react";

function SpaceshipControl() {
	const [engineState, setEngineState] = useState("off");

	return (
		<div>
			<h1>Spaceship Engine is: {engineState}</h1>
			<button onClick={() => setEngineState("on")}>Start Engine</button>
		</div>
	);
}

// export default SpaceshipControl;
// *****************************************************************************************

import { useState } from "react";

function SpacecraftControl() {
	const [altitude, setAltitude] = useState(100);

	return (
		<div>
			<h1>Spacecraft Altitude: {altitude} km</h1>
			<button onClick={() => setAltitude(altitude + 10)}>
				Increase Altitude
			</button>
		</div>
	);
}

export default SpacecraftControl;
// *****************************************************************************************
// *****************************************************************************************
// *****************************************************************************************
