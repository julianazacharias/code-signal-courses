fetch("https://api-regional.codesignalcontent.com/posting-application-2/posts")
	.then((response) => console.log(response)) // We log the whole response here
	.catch((error) => console.error("Error:", error));

// *******************************************************************************************************

// HTTP status codes are grouped into five classes:

// 1xx (Informational): The API received the request, and the process is continuing.
// 2xx (Successful): The request was successfully received, understood, and accepted.
// 3xx (Redirection): Extra action must be taken to complete the request
// 4xx (Client Error): The request has bad syntax or cannot be fulfilled.
// 5xx (Server Error): The server failed to complete a valid request.

// We can fetch the status code of an API response like this:

fetch("https://api-regional.codesignalcontent.com/posting-application-2/posts")
	.then((response) => console.log(response.status)) // We now log only the status code
	.catch((error) => console.error("Error:", error));

// *******************************************************************************************************

// Dive into Error Handling

try {
	// We're attempting to make an API request
	const response = fetch(
		"https://api-regional.codesignalcontent.com/posting-application-2/posts"
	);
	// If response is not Ok, we throw an Error
	if (!response.ok) {
		throw new Error("API request failed, status: " + response.status);
	}
} catch (error) {
	// If any error occurs, we catch it and log it
	console.error("Error occurred: ", error);
}
// *******************************************************************************************************

// Handle Different UI States: Loading and Success

// Set 'Loading...' message while fetch is in progress.
document.getElementById("posts").textContent = "Loading...";

fetch("https://api-regional.codesignalcontent.com/posting-application-2/posts")
	.then((response) => {
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		} else {
			return response.json();
		}
	})
	.then((data) => {
		document.getElementById("posts").textContent = JSON.stringify(data);
	})
	.catch((error) => {
		console.log(
			"There has been a problem with the fetch operation: ",
			error.message
		);
		document.getElementById("posts").textContent = "Data Unavailable.";
	});
// *******************************************************************************************************

// The `JSON.stringify` method
// In JavaScript, JSON.stringify() is a function that converts a JavaScript object or value to a JSON string.
// This function can be quite useful when you need to send or store the data as JSON,
// or when you want to log an object's contents in a readable format.

const car = {
	name: "Tesla Model 3",
	price: "$35,000",
	weight: "1,611 kg",
};

console.log(JSON.stringify(car));

// In this example, we have a car object. When we call JSON.stringify(car),
// it converts the car object into a JSON string:

('{"name":"Tesla Model 3","price":"$35,000","weight":"1,611 kg"}');
// *******************************************************************************************************

// Begin fetching cosmic post data within a 'try' block to handle fetch promise errors

try {
	fetch(
		"https://api-regional.codesignalcontent.com/posting-application-2/posts/"
	)
		.then((response) => {
			if (response.status === 200) {
				document.getElementById("post-status").textContent =
					"Cosmic insights received successfully!";
			} else {
				throw new Error(`There was a problem: Status Code ${response.status}`);
			}
		})
		.catch((error) => {
			document.getElementById("post-status").textContent =
				"Unexpected problem: " + error.message;
		});
} catch (error) {
	document.getElementById("post-status").textContent =
		"Failed to fetch cosmic insights.";
}
// *******************************************************************************************************

// Send out a 'fetch' mission to retrieve asteroid data
fetch("https://api-regional.codesignalcontent.com/posting-application-2/posts/")
	.then((response) => {
		if (!response.ok) {
			throw new Error(`Error fetching asteroid data ${response.status}`);
		}
		return response.json(); // Decode the JSON from the response
	})
	.then((data) => {
		// Display the data in the HTML
		document.getElementById("asteroid-info").textContent = JSON.stringify(data);
	})
	.catch((error) => {
		document.getElementById("asteroid-info").textContent =
			"Error fetching data: " + error.message;
	});

// *******************************************************************************************************

fetch("https://api-regional.codesignalcontent.com/posting-application-2/posts/")
	.then((response) => {
		if (!response.ok) {
			throw new Error(`Error fetching asteroid data ${response.status}`);
		}
		return response.json(); // Decode the JSON from the response
	})
	.then((data) => {
		document.getElementById("galactic-news").textContent =
			"Posts " + data.length;
		// document.getElementById("galactic-news").textContent = JSON.stringify(data);
	})
	.catch((error) => {
		document.getElementById("galactic-news").textContent =
			"Error fetching data: " + error.message;
	});

// *******************************************************************************************************
// *******************************************************************************************************
// *******************************************************************************************************
