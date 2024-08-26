//GET request to fetch spaceship data
fetch("https://api-regional.codesignalcontent.com/spaceships")
	.then((response) => response.json())
	.then((data) => console.log(data));

// *****************************************************************************************************

// The ./useFetchSpaceships.js file that defines a custom hook for fetching spaceship data

const useFetchSpaceships = (url) => {
	// Initialize state variables for storing data and loading status
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Use useEffect to execute the data fetching logic upon initial render
		// Fetch data from the provided URL
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				// Once data is fetched, save it in the data state and set loading to false
				setData(data);
				setLoading(false);
			});
	}, [url]); // Providing URL as a dependency ensures that if the URL changes, useEffect runs again

	return { data, loading }; // Return data and loading status so they can be used in the component that calls this hook
};
// export default useFetchSpaceships;

// *****************************************************************************************************

import React from "react";
import useFetchSpaceships from "./useFetchSpaceships";

const MarsSpaceships = () => {
	// Use the custom hook to fetch Mars spaceship data
	const { data: spaceships, loading } = useFetchSpaceships(
		"https://api-regional.codesignalcontent.com/spaceships/mars"
	);

	return loading ? (
		<div>Loading...</div>
	) : (
		<div>
			{spaceships.map((ship) => (
				<p>{ship.name}</p>
			))}
		</div>
	);
};

// export default MarsSpaceships;

// *****************************************************************************************************
import { useState, useEffect } from "react";

const useFetchData = (url) => {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((jsonData) => {
				setData(jsonData);
				setIsLoading(false);
			});
	}, [url]);

	return { data, isLoading };
};

// export default useFetchData;

import useFetchData from "./useFetchData";

const WeatherDisplay = () => {
	const { data, isLoading } = useFetchData(
		"https://api-regional.codesignalcontent.com/weatherManager/getWeather?lat=41.902782&lng=12.496366"
	);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<h1>Weather in Rome</h1>
			<p>Temperature: {data?.weather?.temperature ?? "N/A"}°C</p>
			<p>Summary: {data?.weather?.summary ?? "N/A"}</p>
		</div>
	);
};

// export default WeatherDisplay;

// *****************************************************************************************************

import { useState, useEffect } from "react";

const useFetchCountry = (url) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null); // Added state for error handling

	useEffect(() => {
		fetch(url)
			.then((response) => {
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				return response.json();
			})
			.then((jsonData) => {
				setData(jsonData.data[0]);
				setLoading(false);
			})
			.catch((e) => {
				setError(e);
				setLoading(false);
			});
	}, [url]);

	return { data, loading, error }; // Return the error as well
};

// export default useFetchCountry;

// import useFetchCountry from "./useFetchCountry";

const CountryDetails0 = () => {
	const {
		data: country,
		loading,
		error,
	} = useFetchCountry(
		"https://api-regional.codesignalcontent.com/countryStats/search?name=Germany"
	);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error.message}</div>; // Render error message
	if (!country || !country.capital || country.capital.length === 0) {
		return <div>Capital information is not available.</div>; // Handling possible undefined access
	}

	return <div>Capital: {country.capital[0]}</div>;
};

// export default CountryDetails0;
// *****************************************************************************************************

import useFetchCountry from "./useFetchCountry";

const CountryDetails = () => {
	const {
		data: country,
		loading,
		error,
	} = useFetchCountry(
		"https://api-regional.codesignalcontent.com/countryStats/search?name=Germany"
	);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error.message}</div>; // Render error message
	if (!country || !country.capital || country.capital.length === 0) {
		return <div>Capital information is not available.</div>; // Handling possible undefined access
	}

	return <div>Capital: {country.capital[0]}</div>;
};

// export default CountryDetails;

// *****************************************************************************************************
import useFetchAuthor from "./useFetchAuthor";

const AuthorDetails = () => {
	const { author, loading } = useFetchAuthor(
		"382dffad-4988-45c8-912f-c26477ac0d6d"
	);

	return loading ? (
		<div>Fetching data from the stars...</div>
	) : (
		<div>
			{author.firstName} {author.lastName}
		</div>
	);
};

// export default AuthorDetails;

import { useState, useEffect } from "react";

const useFetchAuthor = (authorId) => {
	const [author, setAuthor] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch(
			`https://api-regional.codesignalcontent.com/posting-application-2/users/${authorId}`
		)
			.then((response) => response.json())
			.then((data) => {
				setAuthor(data);
				setLoading(false);
			});
	}, [authorId]);

	return { author, loading };
};

export default useFetchAuthor;
// *****************************************************************************************************
const AuthorPosts0 = () => {
	const { posts, loading } = useFetchAuthorPosts(
		"382dffad-4988-45c8-912f-c26477ac0d6d"
	);

	return loading ? (
		<div>Loading...</div>
	) : (
		<ul>
			{posts.map((post) => (
				<li key={post.id}>{post.text}</li>
			))}
		</ul>
	);
};

//   export default AuthorPosts;

import { useState, useEffect } from "react";

const useFetchAuthorPosts = (authorId) => {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch(
			"https://api-regional.codesignalcontent.com/posting-application-2/posts/"
		)
			.then((response) => response.json())
			.then((data) => {
				const filteredPosts = data.filter((post) => post.authorId === authorId);
				setPosts(filteredPosts);
				setLoading(false);
			});
	}, [authorId]);

	return { posts, loading };
};

// export default useFetchAuthorPosts;

// import useFetchAuthorPosts from "./useFetchAuthorPosts";

// *****************************************************************************************************

import { useState, useEffect } from "react";

const useFetchAuthorPosts1 = (authorId) => {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch(
			"https://api-regional.codesignalcontent.com/posting-application-2/posts/"
		)
			.then((response) => response.json())
			.then((data) => {
				const filteredPosts = data.filter((post) => post.authorId === authorId);
				setPosts(filteredPosts);
				setLoading(false);
			});
	}, [authorId]);

	return { posts, loading };
};

// export default useFetchAuthorPosts;

// import useFetchAuthorPosts from './useFetchAuthorPosts';

const AuthorPosts = () => {
	const { posts, loading } = useFetchAuthorPosts(
		"382dffad-4988-45c8-912f-c26477ac0d6d"
	);

	return loading ? (
		<div>Loading...</div>
	) : (
		<ul>
			{posts.map((post) => (
				<li key={post.id}>{post.text}</li>
			))}
		</ul>
	);
};

// export default AuthorPosts;

// *****************************************************************************************************

import { useState, useEffect } from "react";

const useFetchWeather = (url, lat, lng) => {
	const [weather, setWeather] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch(`${url}?lat=${lat}&lng=${lng}`)
			.then((response) => {
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				return response.json();
			})
			.then((data) => {
				setWeather(data.weather);
				setIsLoading(false);
			})
			.catch((err) => {
				setError(err.message);
				setIsLoading(false);
			});

		// No cleanup function needed as nothing to cancel/cleanup here
	}, [url, lat, lng]);

	return { weather, isLoading, error };
};

// export default useFetchWeather;

import useFetchWeather from "./useFetchWeather";

const WeatherInRome = () => {
	const { weather, isLoading, error } = useFetchWeather(
		"https://api-regional.codesignalcontent.com/weatherManager/getWeather",
		"41.902782",
		"12.496366"
	);

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>;

	return (
		<div>
			<p>Temperature: {weather ? weather.temperature : "N/A"}°C</p>
			<p>Condition: {weather ? weather.summary : "Unavailable"}</p>
		</div>
	);
};

// export default WeatherInRome;
// *****************************************************************************************************
// *****************************************************************************************************
