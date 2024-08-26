// ********************************  INSTALLING AXIOS *****************************

// npm install axios
// import axios from 'axios';

function Posts() {
	const [posts, setPosts] = useState([]); // Initialize state for storing posts

	useEffect(() => {
		async function fetchData() {
			const response = await axios.get(
				"https://api-regional.codesignalcontent.com/posting-application-2/posts/"
			);
			setPosts(response.data); // Fetch posts data and save posts in a state
		}
		fetchData();
	}, []);

	// Render posts data
	return (
		<div>
			{posts.map((post) => (
				<div key={post.id}>
					<h3>{post.text}</h3>
					<p>Likes: {post.likesCount}</p>
				</div>
			))}
		</div>
	);
}
// export default Posts;
// ******************************************************************************************
// ***************************  Reusable Axios Instances  ******************************

// const instance = axios.create({
//     baseURL: 'https://api-regional.codesignalcontent.com/posting-application-2'
//   });
// ******************************************************************************************

const instance0 = axios.create({
	baseURL: "https://api-regional.codesignalcontent.com/posting-application-2",
});

function Posts() {
	const [posts, setPosts] = useState([]); // Initializes posts state
	useEffect(() => {
		async function fetchData() {
			const response = await instance.get("/posts/"); // Uses the axios instance to fetch posts
			setPosts(response.data); // Save fetched posts data in the state
		}
		fetchData();
	}, []);

	return (
		<div>
			{posts.map((post) => (
				<div key={post.id}>
					<h3>{post.text}</h3>
					<p>Likes: {post.likesCount}</p>
				</div>
			))}
		</div>
	);
}
//   export default Posts;
// ******************************************************************************************

import { useState, useEffect } from "react";
import axios from "axios";

function BlogPosts() {
	const [blogPosts, setBlogPosts] = useState([]);

	useEffect(() => {
		async function fetchBlogPosts() {
			try {
				const response = await axios.get(
					"https://api-regional.codesignalcontent.com/posting-application-2/posts/"
				);
				setBlogPosts(response.data);
			} catch (error) {
				console.log(error);
			}
		}
		fetchBlogPosts();
	}, []);

	return (
		<div>
			{blogPosts.map((post) => (
				<div key={post.id}>
					<h3>{post.text}</h3>{" "}
					{/* assuming the API response contains a 'title' field */}
					<p>Author ID: {post.authorId}</p>
				</div>
			))}
		</div>
	);
}

// export default BlogPosts;
// ******************************************************************************************

import { useState, useEffect } from "react";
import axios from "axios";

const instance1 = axios.create({
	baseURL:
		"https://api-regional.codesignalcontent.com/posting-application-2/users/",
});

export default function SpacePosts() {
	const [author, setAuthor] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await instance.get(
					"2b0722g9-39d6-4acc-87bb-ee7c7339f880"
				);
				setAuthor(response.data);
				setLoading(false);
			} catch (err) {
				setError("Failed to load author data");
				setLoading(false);
			}
		}

		fetchData();
	}, []);

	return (
		<div>
			{loading ? (
				<p>Loading...</p>
			) : error ? (
				<p>Error: {error}</p>
			) : (
				<h3>
					Space Explorer: {author.firstName} {author.lastName}
				</h3>
			)}
		</div>
	);
}
// ******************************************************************************************

import { useState, useEffect } from "react";

function CountryStats() {
	const [countryInfo, setCountryInfo] = useState({});
	const [countryName, setCountryName] = useState("France");
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchLocation = () => {
			fetch(
				`https://api-regional.codesignalcontent.com/countryStats/search?name=${countryName}`
			)
				.then((response) => {
					if (!response.ok) {
						throw new Error(
							`Network response was not ok: ${response.statusText}`
						);
					}
					return response.json();
				})
				.then((data) => {
					if (data && data.data && data.data.length > 0) {
						setCountryInfo(data.data[0]);
					} else {
						setCountryInfo({ name: "No data", capital: "No data" });
					}
					setLoading(false);
				})
				.catch((error) => {
					console.error("Fetch error:", error);
					setError(error.toString());
					setLoading(false);
				});
		};

		fetchLocation();
	}, [countryName]);

	return (
		<div>
			<select
				onChange={(e) => setCountryName(e.target.value)}
				value={countryName}
			>
				<option value="France">France</option>
				<option value="Germany">Germany</option>
				<option value="Italy">Italy</option>
				<option value="Spain">Spain</option>
				<option value="United Kingdom">United Kingdom</option>
			</select>

			{loading ? (
				<p>Loading...</p>
			) : error ? (
				<p>Error: {error}</p>
			) : (
				<div>
					<h3>Country: {countryInfo.name}</h3>
					<p>Capital: {countryInfo.capital || "N/A"}</p>
				</div>
			)}
		</div>
	);
}

// export default CountryStats;
// ******************************************************************************************
