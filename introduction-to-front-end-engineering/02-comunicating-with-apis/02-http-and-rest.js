// Exploring API Types and RESTful APIs

// Introduction to GET Requests
// Within the realm of HTTP, GET functions as a method used to retrieve or get data. When you visit a webpage,
// you are essentially making a GET request to the server, asking it for an HTML file.

// In JavaScript, we can invoke a GET request using the Fetch API, as exemplified below:

fetch("https://api-regional.codesignalcontent.com/posting-application-2/posts/") // sends a GET request to the API URL
	.then((response) => response.json()) // when the server responds, we turn the response into a JavaScript object
	.then((data) => console.log(data)); // and then we log this object to the console

// *******************************************************************************************************

fetch("https://api.example.com/users")
	.then((response) => response.json())
	.then((data) => {
		// Here, 'data' is an array of user objects returned from the API
		console.log("Data parsed from JSON:", data);
		displayUsers(data);
	});

// And next, here's the displayUsers function. This function creates new elements for each user's data,
// and adds them to our webpage:

function displayUsers(users) {
	const userList = document.getElementById("userList");

	for (let i = 0; i < users.length; i++) {
		const listItem = document.createElement("li");
		listItem.textContent = users[i].name;
		userList.appendChild(listItem);
	}
}
// *******************************************************************************************************

// Display a post about cosmic exploration on our webpage

fetch("https://api-regional.codesignalcontent.com/posting-application-2/posts")
	.then((response) => {
		return response.json();
	})
	.then((posts) => {
		const post = posts[0];
		document.getElementById("cosmic-post").textContent = post.text;
	});
// *******************************************************************************************************

// Fetching a cosmic post and appending its content as a paragraph in the webpage
fetch("https://api-regional.codesignalcontent.com/posting-application-2/posts/")
	.then((response) => {
		return response.json();
	})
	.then((posts) => {
		const firstPost = posts[0];
		id = document.getElementById("cosmic-info");

		novoParagrafo = document.createElement("p");
		novoParagrafo.textContent = firstPost.text;

		id.appendChild(variavel);
	});
// *******************************************************************************************************

fetch("https://api-regional.codesignalcontent.com/posting-application-2/posts/")
	.then((response) => {
		return response.json();
	})
	.then((posts) => {
		let maxLikes = posts[0].likesCount;
		let mostLikedPost = posts[0];

		for (let i = 0; i < posts.length; i++) {
			let post = posts[i];
			if (post.likesCount > maxLikes) {
				maxLikes = post.likesCount;
				mostLikedPost = post;
			}
		}

		document.getElementById("star-info").textContent =
			"Most liked: " + mostLikedPost.text;
	});
// *******************************************************************************************************

fetch(
	"https://api-regional.codesignalcontent.com/posting-application-2/users/2b0722g9-39d6-4acc-87bb-ee7c7339f880"
)
	.then((response) => {
		return response.json();
	})
	.then((data) => {
		document.getElementById(
			"author"
		).innerHTML = `Author: ${data.firstName} ${data.lastName}`;
	});

// *******************************************************************************************************
