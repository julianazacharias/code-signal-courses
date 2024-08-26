let result = condition ? "value if true" : "value if false";

// ***************************************************************************************

// let score = 85;
// let message = (score > 50) ? 'Victory!' : 'Try again.';
// console.log(message); // 'Victory!'

// ***************************************************************************************

let number = 5;
let description = number > 0 ? "positive" : number < 0 ? "negative" : "zero";
console.log(description); // 'positive'

// ***************************************************************************************

let customerRegion = "North America";
let cartContains = "Special Item";
let isDiscounted =
	customerRegion === "North America" && cartContains === "Special Item";
console.log(isDiscounted); // true

// ***************************************************************************************

let isSettingsClicked = true;
let isLevelUp = false;
let activateSound = isSettingsClicked || isLevelUp;
console.log(activateSound); // true

// ***************************************************************************************

let firstObject = { name: "John" };
let secondObject = { name: "Jane" };

let resultAnd = firstObject && secondObject;
console.log(resultAnd); // {name: 'Jane'}

let resultOr = firstObject || secondObject;
console.log(resultOr); // {name: 'John'}

// ***************************************************************************************

let text;
let message = text && text.length;
console.log(message); // undefined

// ***************************************************************************************

let currentUser = null;
let defaultUser = "Guest";
let name = currentUser || defaultUser;
console.log(name); // Guest

// ***************************************************************************************

let server;
let local = "Local User";
let user = server || (local && local.toUpperCase());
console.log(user); // LOCAL USER

// ***************************************************************************************

// Let's track which satellites are currently orbiting Earth
let satellites = [
	{ name: "Hubble Space Telescope", isActive: true },
	{ name: "International Space Station", isActive: true },
	{ name: "Voyager 1", isActive: false }, // Voyager 1 is no longer orbiting Earth
];

// Use forEach to show an activity status message for each satellite
satellites.forEach((satellite) => {
	let activityStatus = satellite.isActive ? "active" : "inactive";
	let message = `${satellite.name} is currently ${activityStatus}. `;

	// Create a paragraph element for each satellite message
	let para = document.createElement("p");
	para.textContent = message;

	// Append the paragraph to the satelliteTracker div
	document.getElementById("satelliteTracker").appendChild(para);
});

// ******************************************************************************

// Let's figure out which planets have moons
let planets = [
	{ name: "Mercury", hasMoons: false },
	{ name: "Venus", hasMoons: false },
	{ name: "Earth", hasMoons: true },
];

planets.forEach((planet) => {
	// Replace {{Planet Name}} with the actual name of the planet
	let status = planet.hasMoons ? "Has moon" : "has no moons. ";
	let moonMessage = `${planet.name} ${status}`;
	document.getElementById("cosmicInfo").textContent += moonMessage + " ";
});

// *******************************************************************************

let statusj =
	detectionStatus.isRocky && !detectionStatus.isOrbiting
		? "Asteroid detected!"
		: "No asteroid detected.";
let mensagem = statusj;
document.getElementById("detectionStatus").textContent += mensagem + " ";

// *********************************************************************************
// *********************************************************************************
// *********************************************************************************
