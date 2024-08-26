import React, { useState, useEffect } from "react";

function CounterApp() {
	// useState is used to add a counter state to our component
	// setCounter is a function to update the current counter
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		// useEffect logs the current counter value each time it changes
		console.log(`Counter value: ${counter}`);
	}, [counter]); // observe changes in the counter

	return (
		<div>
			<p>Counter: {counter}</p>
			<button onClick={() => setCounter(counter + 1)}>Increase Count</button>
		</div>
	);
}
// export default CounterApp;

// ******************************************************************************************
//What happens when useEffect lacks a dependency array? It runs after every render,
//regardless of which changes triggered the render.

useEffect(() => {
	console.log(`Component rendered.`);
});

//Here, "Component rendered" is logged on every render
//because useEffect doesn't watch any specific state or props for changes.

// ******************************************************************************************
//When useEffect is used with an empty array, it runs the effect only once when the component
//"mounts" (i.e., appears on the screen for the first time).

useEffect(() => {
	console.log("Component did mount");
}, []);

//In the code above, the message "Component did mount" will be logged only once,
//right after the component is rendered for the first time.

// ******************************************************************************************
//If the dependency array includes states or props,
//useEffect observes these entities and re-runs whenever they change

//In this context, useEffect logs every change in the counter value to the console.

useEffect(() => {
	console.log(`Counter value: ${counter}`);
}, [counter]);

// ******************************************************************************************

// In useEffect, the cleanup function is what allows your component to undo whatever changes it
// made to the environment before it disappears from the screen, or "unmounts". Providing a cleanup
// function helps to prevent memory leaks, provides smoother user experiences,
// and helps to keep your code organized and easy to reason about.

useEffect(() => {
	console.log("Component did mount OR update");

	// cleanup function
	return () => {
		console.log("Component will unmount");
	};
}, []);

// ******************************************************************************************

import { useState, useEffect } from "react";

function SpaceCounter() {
	const [stars, setStars] = useState(100);

	useEffect(() => {
		document.getElementById("count").textContent = `Counting ${stars} stars!`;
	}, [stars]);

	return (
		<div>
			<p id="count"></p>
			<button onClick={() => setStars(stars + 1)}>Add a star</button>
		</div>
	);
}

// export default SpaceCounter;

// ******************************************************************************************

import { useState, useEffect } from "react";

function StarGazer() {
	const [starsCount, setStarsCount] = useState(100);

	useEffect(() => {
		alert("The night sky has rendered with stars!");
	}, [starsCount]); // No dependency array, effect runs on every render

	return (
		<div>
			<p>There are currently {starsCount} twinkling stars in the sky.</p>
			<button onClick={() => setStarsCount(starsCount + 10)}>
				Discover more stars
			</button>
		</div>
	);
}

export default StarGazer;

// ******************************************************************************************
