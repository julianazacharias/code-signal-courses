// let intervalId = setInterval(() => {
// 	console.log("Hello, World!");
// }, 2000);

// clearInterval(intervalId);

// ************************************************************************

let intervalId = setInterval(() => {
	try {
		riskyFunction(); // A function which may fail
	} catch (error) {
		console.error(error);
		clearInterval(intervalId);
	}
}, 2000);

// ************************************************************************

// mathFunctions.js
export function add(a, b) {
	return a + b;
}
export function multiply(a, b) {
	return a * b;
}

// ************************************************************************

// Default exports allow an entity, such as a variable,
// function, or class, to be exported from a module.
// While a module can only have one default export, it can include several named exports.
// greeter.js

export default function greet() {
	return "Hello, JavaScript!";
}

// ************************************************************************

// We make use of the import keyword to import named and default exports. For a named export,
// we enclose the entities to be imported within curly braces {}:

import { add, multiply } from "./mathFunctions.js";
console.log(add(2, 3)); // 5
console.log(multiply(5, 2)); // 10

// ************************************************************************

//For a default export, we can choose any name:

import greet from "./greeter.js";
console.log(greet()); // "Hello, JavaScript!"

// ************************************************************************

let orbitCount = 0;
let planetStatus = document.getElementById("planetStatus");

let orbitInterval = setInterval(() => {
	orbitCount++;
	planetStatus.textContent = `The planet has completed ${orbitCount} orbits!`;

	// Stop the planet after 5 orbits
	if (orbitCount >= 5) {
		clearInterval(orbitInterval);
		planetStatus.textContent = `The planet has stopped after ${orbitCount} orbits.`;
	}
}, 1000);
