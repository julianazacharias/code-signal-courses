// The JSON.parse() method allows us to convert JSON data into JavaScript objects:

let jsonDataTeste = `{
    "name": "John Doe",
    "age": 30
  }`;

let obj = JSON.parse(jsonDataTeste);

console.log(obj.name); // "John Doe"
console.log(obj.age); // 30

// *******************************************************************************************************

// JavaScript provides powerful methods for array manipulation — filter(), map(), and reduce().

// Understanding JavaScript's Filter, Map, and Reduce Methods

let numbers0 = [23, 45, 14, 66, 94, 33, 4, 9];
let bigNums = numbers0.filter((num) => num > 50);

console.log(bigNums); // [66, 94]

// *******************************************************************************************************

let numbers1 = [1, 2, 3, 4, 5];
let squares = numbers1.map((num) => num ** 2);

console.log(squares); // [1, 4, 9, 16, 25]

// *******************************************************************************************************

let numbers2 = [1, 2, 3, 4, 5];
let sum = numbers2.reduce(
	(accumulator, currentValue) => accumulator + currentValue
);

console.log(sum); // 15

// *******************************************************************************************************

// Understanding the Array Join() Method in JavaScript

//In JavaScript, join() is a handy array method that allows you to convert the elements
// of an array into a string. This method works by concatenating (joining) all the elements
// of the array into one string.

let arr0 = ["Hello", "World"];
let str0 = arr0.join(); // By default, it separates elements with a comma

console.log(str0); // Outputs: "Hello,World"

// -------------------------------------------------------------------------------------------------------

let arr1 = ["Hello", "World"];
let str1 = arr1.join(" "); // Separates elements with a space

console.log(str1); // Outputs: "Hello World"

// *******************************************************************************************************

// Introduction to Error Handling in Data Transformation

try {
	let obj = JSON.parse(someInvalidJsonData);
} catch (error) {
	console.log("Parsing JSON data failed:", error);
}

// *******************************************************************************************************

// Assume we have fetched JSON data related to planets
const jsonDataA = `[
    {"name": "Earth", "orbital_period": 365.26, "diameter": 12742},
    {"name": "Mars", "orbital_period": 687, "diameter": 6779},
    {"name": "Jupiter", "orbital_period": 4333, "diameter": 139820}
  ]`;

try {
	// Transform JSON data into an array of JavaScript objects
	const planets = JSON.parse(jsonDataA);

	// Use map method to create HTML content based on the planets data
	const planetHtml = planets
		.map(
			(planet) =>
				`<p>${planet.name} orbits the sun in ${planet.orbital_period} days and has a diameter of ${planet.diameter} kilometers.</p>`
		)
		.join("");

	// Display the data in the HTML
	document.getElementById("planet-info").innerHTML = planetHtml;
} catch (error) {
	// Handle any errors that may occur during the data transformation
	console.error("Parsing JSON data failed: ", error);
}
// *******************************************************************************************************

// Assume we have fetched JSON data related to moons and their planet
const jsonDados = `[
    {"moon": "Europa", "planet": "Jupiter", "orbital_period_days": 3.55},
    {"moon": "Titan", "planet": "Saturn", "orbital_period_days": 15.95},
    {"moon": "Ganymede", "planet": "Jupiter", "orbital_period_days": 7.15}
  ]`;

try {
	const moons = JSON.parse(jsonDados);
	const jupiterMoons = moons.filter((m) => m.planet === "Jupiter");
	const moonsHtml = jupiterMoons
		.map(
			(m) =>
				`<p>${m.moon} orbits ${m.planet} every ${m.orbital_period_days} days.</p>`
		)
		.join("");
	document.getElementById("space-info").innerHTML = moonsHtml;
} catch (error) {
	console.error("Parsing JSON data failed: ", error);
}

// *******************************************************************************************************

const jsonData = `[
    {"name": "Mercury", "orbital_period_days": 88},
    {"name": "Venus", "orbital_period_days": 225},
    {"name": "Earth", "orbital_period_days": 365},
    {"name": "Mars", "orbital_period_days": 687}
  ]`;

try {
	const planets = JSON.parse(jsonData);

	// Filter planets with 'orbital_period_days' smaller than 365
	const shortOrbitPlanets = planets.filter(
		(planet) => planet.orbital_period_days < 365
	);

	document.getElementById(
		"short-orbit-planets"
	).innerText = `Planets with short orbital periods: ${shortOrbitPlanets
		.map((p) => p.name)
		.join(", ")}.`;
} catch (error) {
	console.error("Failed to parse planet JSON data: ", error);
}

// *******************************************************************************************************
