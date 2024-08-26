import React, { useEffect } from "react";

function ControlPanel({ fuelLevel }) {
	// useEffect logs fuelLevel changes
	useEffect(() => {
		console.log(`Fuel level changed to ${fuelLevel}`);
	}, [fuelLevel]);
}

function Spaceship({ fuelLevel }) {
	// Nested ControlPanel component
	return <ControlPanel fuelLevel={fuelLevel} />;
}
//Each time fuelLevel changes in the Spaceship,
//the nested ControlPanel updates and useEffect triggers a log.

// *****************************************************************************************

//Using useEffect for Prop Changes in NESTED COMPONENTS

import React, { useState, useEffect } from "react";

function ControlPanel({ fuelLevel }) {
	useEffect(() => {
		console.log(`Fuel level changed to ${fuelLevel}`);
	}, [fuelLevel]);

	// Rest of component's code
}

function Spaceship() {
	const [fuelLevel, setFuelLevel] = useState(100); // Fuel level state in Spaceship

	// Function to decrease fuel level
	const decreaseFuel = () => {
		setFuelLevel(fuelLevel - 10);
	};

	// Nested Control Panels
	return (
		<div>
			<ControlPanel fuelLevel={fuelLevel} />
			<ControlPanel fuelLevel={fuelLevel} />
			<button onClick={decreaseFuel}>Decrease Fuel</button>
		</div>
	);
}

// *****************************************************************************************

// THREE LEVELS OF NESTED COMPONENTS

import React, { useState, useEffect } from "react";

function FuelGauge({ fuelLevel }) {
	useEffect(() => {
		console.log(`Fuel level in Fuel Gauge changed to ${fuelLevel}`);
	}, [fuelLevel]);

	// Rest of component's code
}

function ControlPanel({ fuelLevel }) {
	useEffect(() => {
		console.log(`Fuel level in Control Panel changed to ${fuelLevel}`);
	}, [fuelLevel]);

	// Nested Fuel Gauge
	return <FuelGauge fuelLevel={fuelLevel} />;
}

function Spaceship() {
	const [fuelLevel, setFuelLevel] = useState(100); // Fuel level state in Spaceship

	// Function to decrease fuel level
	const decreaseFuel = () => {
		setFuelLevel(fuelLevel - 10);
	};

	// Nested Control Panel
	return (
		<div>
			<ControlPanel fuelLevel={fuelLevel} />
			<button onClick={decreaseFuel}>Decrease Fuel</button>
		</div>
	);
}
// *****************************************************************************************

import { useState, useEffect } from "react";

function MissionControl({ missionStatus }) {
	useEffect(() => {
		alert(`Mission status updated: ${missionStatus}`);
	}, [missionStatus]);

	return <h2>Current mission status: {missionStatus}</h2>;
}

function Spacecraft() {
	const [missionStatus, setMissionStatus] = useState("Planning");

	return (
		<div>
			<MissionControl missionStatus={missionStatus} />
			<button onClick={() => setMissionStatus("Launched")}>
				Launch Mission
			</button>
		</div>
	);
}

// export default Spacecraft;
// *****************************************************************************************

import { useState, useEffect } from "react";

export default function Spaceship() {
	const [oxygenLevel, setOxygenLevel] = useState(100);

	return (
		<div>
			<ControlRoom oxygenLevel={oxygenLevel} />
			<p>Oxygen level: {oxygenLevel}</p>
			<button onClick={() => setOxygenLevel(Math.max(0, oxygenLevel - 10))}>
				Decrease Oxygen
			</button>
		</div>
	);
}

function ControlRoom({ oxygenLevel }) {
	const [message, setMessage] = useState("");

	useEffect(() => {
		setMessage(oxygenLevel <= 20 ? "Critical: Oxygen level very low!" : "");
	}, [oxygenLevel]);

	return <p>{message}</p>;
}
// *****************************************************************************************

import { useState, useEffect } from "react";

function ControlModule(props) {
	useEffect(() => {
		alert(`Signal strength is now ${props.signalStrength}`);
	}, [props.signalStrength]);

	return (
		<p>Control Module is receiving signal strength: {props.signalStrength}</p>
	);
}

function Spacecraft() {
	const [signalStrength, setSignalStrength] = useState(10);

	return (
		<div>
			<ControlModule signalStrength={signalStrength} />
			<button onClick={() => setSignalStrength(signalStrength + 1)}>
				Boost Signal
			</button>
		</div>
	);
}

// export default Spacecraft;
// *****************************************************************************************

import { useState, useEffect } from 'react';

export default function Spaceship() {
  const [oxygenLevel, setOxygenLevel] = useState(50);
  const handleDecreaseOxygen = () => {
    setOxygenLevel(prevLevel => prevLevel - 10);
  };

  return (
    <>
      <button onClick={handleDecreaseOxygen}>Decrease Oxygen</button>
      <Cockpit oxygenLevel={oxygenLevel} />
    </>
  );
}

function Cockpit({ oxygenLevel }) {
  useEffect(() => {
    console.log(`Cockpit oxygen level: ${oxygenLevel}%`);
  }, [oxygenLevel]);

  return (
    <LifeSupport oxygenLevel={oxygenLevel} />
  );
}

function LifeSupport({ oxygenLevel }) {
  
    useEffect(() => {
    oxygenLevel <= 20 ? alert("Low oxygen!") : ""
  }, [oxygenLevel]);
  
  
 
  return (
    <div>Oxygen level at: {oxygenLevel}%</div>
  );
}
// *****************************************************************************************

import { useState, useRef } from 'react';

export default function BirthdayGuestBook() {
  const [greetings, setGreetings] = useState([]);
  const inputRef = useRef();

  const addGreeting = () => {
    const newGreeting = {
      id: greetings.length + 1,
      text: inputRef.current.value,
    };

    setGreetings([...greetings, newGreeting]);
    
    inputRef.current.value = '';
    
    
    
  };

  return (
    <div>
      <h1>Virtual Birthday Party</h1>

      <label htmlFor="greetingInput">Write your greeting:</label>
      <input id="greetingInput" ref={inputRef} type="text" placeholder="Write your greeting..." />
    
      <button onClick={addGreeting}>Add Greeting</button>

      <div>
        {greetings.map((greet, index) => (
          <p key={index}>🎉 {greet.text}</p>
        ))}
      </div>
    </div>
  );
}
// *****************************************************************************************
