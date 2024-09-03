//Introduction to Arrow Functions

// const functionName = (param1, param2, ..., paramN) => {
//     // code
//   }

//   <button onclick="showHello()">Say Hello!</button>

//   <p id="demo"></p>
//   <script>
//   // Declare 'showHello' as an Arrow Function
//   const showHello = () => {
//     // Change the text inside the paragraph when the function is called
//     document.getElementById("demo").innerHTML = "Hello, I am an Arrow Function!";
//   }
//   </script>

{
	/* <button id="btn">Say Hello!</button>
<script>
// Add an event listener to the button
document.getElementById("btn").addEventListener("click", () => {
  // 'this' refers to the button as expected
  this.innerHTML = "Hello, I am from Event Listener using Arrow Function";
});
</script> */
}

// ********************************************************************************************

// Into The World of Callbacks

{
	/* <button onclick="greetUser(showGreeting)">Say Hi!</button>
<p id="demo"></p>
<script>
function showGreeting(name) {
  // The 'callback' we want to execute after the name is entered
  document.getElementById("demo").innerHTML = "Hi " + name;
}
function greetUser(callback) {
  // The 'prompt' function displays a dialog box that prompts the user for input.
  // It takes two arguments: a message to display, and a default value for the input field.
  let name = prompt("Please enter your name", "Harry Potter");
  callback(name);
}
</script> */
}
// ********************************************************************************************

// Knowing the `setTimeout` Method

{
	/* <button id="btn">Disappear after 3 seconds</button>
<script>
const btn = document.getElementById("btn");
setTimeout(() => {
  // Hide the button after 3 seconds
  btn.style.display = "none";
}, 3000);
</script> */
}
// ********************************************************************************************

// An Encounter with Promises

const isCoffeeMakerReady0 = true;
let orderCoffee0 = () => {
	return new Promise((resolve, reject) => {
		if (isCoffeeMakerReady0) {
			resolve("Coffee is ready!");
		} else {
			reject("Coffee maker is not ready.");
		}
	});
};

orderCoffee0()
	.then((message) => {
		console.log(message); // logs: Coffee is ready!
	})
	.catch((message) => {
		console.log(message); // We would see the message 'Coffee maker is not ready.' if 'isCoffeeMakerReady' boolean was false, since in that case the reject function would be called
	});

// ********************************************************************************************

// Apprehending Async/Await

const isCoffeeMakerReady1 = true;

let orderCoffee1 = () => {
	return new Promise((resolve, reject) => {
		if (isCoffeeMakerReady1) {
			resolve("Coffee is ready!");
		} else {
			reject("Coffee maker is not ready :(");
		}
	});
};

async function getCoffee() {
	try {
		let message = await orderCoffee1();
		console.log(message); // logs: Coffee is ready!
	} catch (message) {
		console.log(message); // logs: Coffee maker is not ready :(
	}
}

getCoffee();
// ********************************************************************************************

// Understanding the Try-Catch Block in Async/Await

async function getCoffee() {
	try {
		let message = await orderCoffee();
		console.log(message); // Executed if orderCoffee fulfills
	} catch (message) {
		console.log(message); // Executed if orderCoffee rejects
	}
}
// ********************************************************************************************

// Simulate updating the web page with new data from the space observatory
async function updateObservatoryStatus() {
	let statusElement = document.getElementById("status");
	try {
		let statusUpdate = await getStatusUpdate();
		statusElement.innerText = `Latest update: ${statusUpdate}`;
	} catch (error) {
		statusElement.innerText = `Update failed: ${error}`;
	}
}

// Simulate fetching status update from the observatory
function getStatusUpdate() {
	return new Promise((resolve, reject) => {
		// Simulate delay and possible error in getting an update
		setTimeout(() => {
			const success = Math.random() > 0.1; // 90% chance of success. Note, Math.random() returns a number between 0 and 1
			if (success) {
				resolve("The telescope has captured new images of Mars!");
			} else {
				reject("Unable to reach the observatory.");
			}
		}, 3000); // 3 second delay to imitate network request
	});
}

updateObservatoryStatus(); // Call the function to update the observatory status on the web page

// ********************************************************************************************

// Simulate the retrieval of details for a newly discovered planet
// Create variable getNewPlanetDetails and assign new arrow function to it
const getNewPlanetDetails = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			const details = {
				name: "CosmoKnot",
				status: "Discovered",
				galaxy: "Milky Way",
			};
			resolve(details);
		}, 1000);
	});
};

// Display planet details on the web page using async/await
async function display() {
	const planetDetails = await getNewPlanetDetails();
	document.getElementById(
		"planet"
	).innerText = `New Planet Found - Name: ${planetDetails.name}, Status: ${planetDetails.status}, Galaxy: ${planetDetails.galaxy}`;
}
display();

// ********************************************************************************************

// Function to simulate the asynchronous retrieval of planet information
function getPlanetInfo(callback) {
	setTimeout(() => {
		const planetData = {
			name: "Mars",
			status: "Habitable zone planet",
			distanceFromSun: "227.9 million km",
		};
		// Calling callback function to show the data in the UI – Can you identify the issue?
		callback(planetData);
	}, 2000); // 2 second delay to imitate data retrieval
}

// Call the function with a callback to update the planet information on the webpage
getPlanetInfo((planetData) => {
	document.getElementById(
		"planetInfo"
	).innerText = `Name: ${planetData.name}, Status: ${planetData.status}, Distance from the Sun: ${planetData.distanceFromSun}`;
});
// ********************************************************************************************
// ********************************************************************************************
