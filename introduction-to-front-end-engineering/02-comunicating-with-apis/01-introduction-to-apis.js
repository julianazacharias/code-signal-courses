// To understand the anatomy of a URL, let's break down this URL as an example: https:
// www.example.com/products. A URL consists of various components, including:

// https:// - The protocol, which lays out the set of rules for how data is transmitted and received over the internet.
// www. - The subdomain, which is optional and can differentiate distinct sections of the site, such as a blog or shop.
// example.com - The domain name. Consider this as the address of the house and locate it in the city of the internet.
// /products - The path, indicating a specific page or resource on the site. Here, it's pointing to the products page.
// In the context of APIs, these URL components play a critical role in specifying the precise data or functionality
// that we request.

// *******************************************************************************************************

//A Glimpse of JSON: The Universal Data Exchange Format

// {
//     "name": "John",
//     "age": 30,
//     "pets": ["fluffy", "sparky"]
// }

// *******************************************************************************************************

// Making Our First API Request with JavaScript

fetch("https://api.example.com/data") // Step 1
	.then((response) => response.json()) // Step 2
	.then((data) => console.log(data)); // Step 3

// So, there we have it. We have made an API call using JavaScript,
// extracting the JSON data and logging it to the console.

// *******************************************************************************************************

// Async in the Context of API Calls
// Lastly, let's explore the concept of 'async.' Did you notice the .then() in our fetch() example?
// Because fetch() is asynchronous, it starts running, allows the remainder of your code to continue
// while waiting for data, and finishes when it arrives. This multitasking capability is vital when waiting for API data.

// *******************************************************************************************************

function fetchAuthorDetails(authorId) {
	const url = `https://api-regional.codesignalcontent.com/posting-application-2/users/${authorId}`;

	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			document.getElementById(
				"author-details"
			).innerHTML = `Author: ${data.firstName} ${data.lastName}`;
		});
}

// This function call fetches details for a specific author
fetchAuthorDetails("382dffad-4988-45c8-912f-c26477ac0d6d");

// *******************************************************************************************************
