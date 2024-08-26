fetch("https://api-regional.codesignalcontent.com/posting-application-2/posts/")
	.then((response) => response.json())
	.then((data) => console.log(data))
	.catch((error) => console.error("Error:", error));

// ******************************************************************************************

function PostsSearch() {
	const [inputValue, setInputValue] = useState("");
	const [posts, setPosts] = useState([]);

	const fetchPosts = () => {
		fetch(
			`https://api-regional.codesignalcontent.com/posting-application-2/posts/${inputValue}`
		)
			.then((response) => {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				return response;
			})
			.then((response) => response.json())
			.then((data) => setPosts(data))
			.catch((error) => console.error("Error:", error));
	};

	return (
		<div>
			<input
				type="text"
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
			/>
			<button onClick={fetchPosts}>Search</button>
			<ul>
				{posts.length > 0 ? (
					posts.map((post) => <li key={post.id}>{post.title}</li>)
				) : (
					<li>No posts found.</li>
				)}
			</ul>
		</div>
	);
}
// export default PostsSearch;
// ******************************************************************************************

import { useState, useEffect } from "react";

function DisplayAuthorPosts() {
	const [authorPosts, setAuthorPosts] = useState([]);
	const [error, setError] = useState(null);
	const authorId = "382dffad-4988-45c8-912f-c26477ac0d6d";

	useEffect(() => {
		fetch(
			`https://api-regional.codesignalcontent.com/posting-application-2/posts/`
		)
			.then((response) => {
				if (!response.ok) {
					throw new Error(`Error: ${response.status}`);
				}
				return response.json();
			})
			.then((data) =>
				setAuthorPosts(data.filter((p) => p.authorId === authorId))
			)
			.catch((error) => {
				console.error("Fetch error:", error);
				setError(error.toString());
			});
	}, []);

	if (error) {
		return <div>Error fetching posts: {error}</div>;
	}

	return (
		<ul>
			{authorPosts.length > 0 ? (
				authorPosts.map((post) => <li key={post.id}>{post.text}</li>)
			) : (
				<div>No posts found!</div>
			)}
		</ul>
	);
}

// export default DisplayAuthorPosts;
// ******************************************************************************************

import { useState } from "react";

function CityWeather() {
	const [city, setCity] = useState("Rome"); // Default selection
	const [location, setLocation] = useState({});

	const fetchLocation = () => {
		fetch(
			`https://api-regional.codesignalcontent.com/weatherManager/getLocation?city=${city}`
		)
			.then((response) => response.json())
			.then((data) => setLocation(data.location))
			.catch((error) => console.error("Oops! There was an error:", error));
	};

	let displayLocation =
		location.lat && location.lng
			? `Latitude: ${location.lat}, Longitude: ${location.lng}`
			: "Location data not available";

	return (
		<div>
			<select value={city} onChange={(e) => setCity(e.target.value)}>
				<option value="Rome">Rome</option>
				<option value="Kharkiv">Kharkiv</option>
			</select>
			<button onClick={fetchLocation}>Check Location</button>
			<div>{displayLocation}</div>
		</div>
	);
}

// export default CityWeather;
// ******************************************************************************************

import { useState, useEffect } from "react";

function SocialMediaPosts() {
	const [posts, setPosts] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");

	useEffect(() => {
		fetch(
			"https://api-regional.codesignalcontent.com/posting-application-2/posts/"
		)
			.then((response) => response.json())
			.then((data) => setPosts(data))
			.catch((error) => console.error("Oops! There was an error:", error));
	}, []);

	const filterPosts = (word) => {
		return posts.filter((post) =>
			post.text.toLowerCase().includes(word.toLowerCase())
		);
	};

	return (
		<div>
			<input
				type="text"
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
				placeholder="Search by words in post"
			/>
			<ul>
				{filterPosts(searchTerm).map((post) => (
					<li key={post.id}>{post.text}</li>
				))}
			</ul>
		</div>
	);
}

export default SocialMediaPosts;
// ******************************************************************************************

import { useState } from "react";

function WeatherApp() {
	const [weatherData, setWeatherData] = useState(null);

	const handleSelectCity = (event) => {
		const city = event.target.value;

		fetch(
			`https://api-regional.codesignalcontent.com/weatherManager/getLocation?city=${city}`
		)
			.then((response) => response.json())
			.then((data) => setWeatherData(data))
			.catch((error) => console.error("Error:", error));
	};

	return (
		<div>
			<select onChange={handleSelectCity}>
				<option value="">Select a city</option>
				<option value="Rome">Rome</option>
				<option value="Kharkiv">Kharkiv</option>
			</select>
			{weatherData && (
				<div>
					{weatherData.city} is located at latitude {weatherData.location.lat}{" "}
					and longitude {weatherData.location.lng}.
				</div>
			)}
		</div>
	);
}

// export default WeatherApp;

// ******************************************************************************************
// ******************************************************************************************
// ******************************************************************************************
