// Child Component
function ChildComponent(props) {
	return <p>{props.message}</p>;
}

// Parent Component
function ParentComponent() {
	return <ChildComponent message="Hello there!" />;
}

ParentComponent(); // Renders: Hello there!

// *****************************************************************************************

import React, { useState } from "react";

function Counter() {
	const [count, setCount] = useState(0);
	const handleClick = () => {
		setCount(count + 1); // Here, count is the previous state
	};
	return (
		<div>
			<p>You clicked {count} times</p> {/* Displays the count */}
			<button onClick={handleClick}>Click me</button>{" "}
			{/* Increments the counter when clicked */}
		</div>
	);
}
// *****************************************************************************************

const handleClick0 = () => {
	setCount((prevCount) => prevCount + 1);
};

// *****************************************************************************************

//   Here, when you press the button, you might expect the counter to increment by 2.
//   But due to the asynchronous nature of setState, both setCount calls see the same value of count.
//   Consequently, they both increment the same initial value by 1, resulting in a total increment of 1, not 2.

function Counter() {
	const [count, setCount] = useState(0);

	const incrementTwice = () => {
		setCount(count + 1);
		setCount(count + 1);
	};

	return (
		<div>
			<p>You clicked {count} times</p>
			<button onClick={incrementTwice}>Click me</button>
		</div>
	);
}

//To ensure each update has the correct previous value, we pass a function to setState, like so:

const incrementTwice = () => {
	setCount((prevCount) => prevCount + 1);
	setCount((prevCount) => prevCount + 1);
};

// *****************************************************************************************

const handleClick1 = () => {
	setCount((prevCount) => {
		// Only increment count if prevCount is less than 10.
		// Otherwise, leave it as it is.
		return prevCount >= 10 ? prevCount : prevCount + 1;
	});
};

// *****************************************************************************************

const handleClick = (operation) => {
	setCount((prevCount) => {
		// If the operation is increment and prevCount is less than 10, increment count.
		// If the operation is decrement and prevCount is greater than 0, decrement count.
		// Otherwise, return count as it is.
		if (operation === "increment" && prevCount < 10) return prevCount + 1;
		if (operation === "decrement" && prevCount > 0) return prevCount - 1;
		return prevCount;
	});
};

// *****************************************************************************************

import { useState } from "react";

export default function SpaceshipControl() {
	const [status, setStatus] = useState("docked");

	const launchSequence = () => {
		setStatus((prevStatus) =>
			prevStatus === "docked" ? "launching" : prevStatus
		);
	};

	return (
		<div>
			<p>The spaceship is currently: {status}</p>
			<button onClick={launchSequence}>Launch</button>
		</div>
	);
}

// *****************************************************************************************]

import { useState } from "react";

function SpaceshipStatus() {
	const [status, setStatus] = useState("Ready");

	const updateStatus = () => {
		setStatus((prevStatus) =>
			prevStatus === "Ready" ? "Launched" : prevStatus === "Launched" ? "Landed" : "Ready"
		);
	};

	return (
		<div>
			<p>The spaceship is {status} for exploration.</p>
			<button onClick={updateStatus}>Toggle Status</button>
		</div>
	);
}

// export default SpaceshipStatus;

// *****************************************************************************************

import { useState } from 'react';

export default function SpaceshipControl() {
  const [speed, setSpeed] = useState(0);

  const increaseSpeed = () => {
    setSpeed(prevSpeed => (prevSpeed < 100 ? prevSpeed +  1 : prevSpeed));
  };

  const decreaseSpeed = () => {
    setSpeed(prevSpeed => (prevSpeed > 0 ? prevSpeed - 1 : prevSpeed));
  };

  return (
    <div>
      <p>Current speed: {speed} lightyears/hour</p>
      <button onClick={increaseSpeed}>Increase Speed By 1</button>
      <button onClick={decreaseSpeed}>Decrease Speed By 1</button>
    </div>
  );
}

// *****************************************************************************************

import { useState } from 'react';

export default function SpaceshipFuel() {
  const [fuelLevel, setFuelLevel] = useState(100);
  const [isEngineOn, setIsEngineOn] = useState(false);

  const toggleEngine = () => {
    setIsEngineOn(prevIsEngineOn => !prevIsEngineOn);
  }

  const adjustFuel = () => {
    setFuelLevel(prevFuelLevel => (isEngineOn ? prevFuelLevel - 1 : prevFuelLevel))
  }

  return (
    <div>
      <p>Engine Status: {isEngineOn ? "On" : "Off"}</p>
      <p>Fuel Level: {fuelLevel}</p>
      <button onClick={toggleEngine}>Toggle Engine</button>
      <button onClick={adjustFuel}>Consume Fuel</button>
    </div>
  );
};

// *****************************************************************************************
import { useState } from 'react';

export default function SpaceshipDashboard() {
  
    const [fuelLevel, setFuelLevel] = useState(100);
    const [hullIntegrity, setHullIntegrity] = useState("Stable");
    
      const updateSpaceshipStatus = () => {
        setFuelLevel(prevFuel => (prevFuel > 20 ? prevFuel - 10 : prevFuel));
          
        setHullIntegrity (prevHull => (prevHull && fuelLevel <= 20 ? "Critical" : "Stable"));  
      };
    
      return (
      <div>
        <p>Current fuel: {fuelLevel}</p>
        <p>Integrity status: {hullIntegrity}</p>
        <button onClick={updateSpaceshipStatus}>Update Spaceship status</button>
      </div>
    );
  }

// *****************************************************************************************
// *****************************************************************************************
