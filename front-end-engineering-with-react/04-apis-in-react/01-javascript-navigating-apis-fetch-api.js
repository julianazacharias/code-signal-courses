// # Requesting weather data from the WeatherAPI - it's as simple as making a call!
fetch("https://api.weatherapi.com/v1/current.json?q=Rome");

// **********************************************************************************************

fetch("https://api.weatherapi.com/v1/current.json?q=Rome")
	.then((response) => response.json())
	.then((data) => console.log(data));

// **********************************************************************************************

// The useState hook manages the data, often displaying a "Loading…" message while the data is being fetched.
// The useEffect hook performs operations, such as fetching data, which cannot be done during rendering.
function WeatherComponent() {
	const [loading, setLoading] = useState(true);
	const [weatherData, setWeatherData] = useState(null);

	useEffect(() => {
		fetch("https://api.weatherapi.com/v1/current.json?q=Rome")
			.then((response) => response.json())
			.then((data) => {
				setWeatherData(data);
				setLoading(false);
			});
	}, []);

	if (loading) {
		return <p>Loading...</p>;
	}

	return (
		<div>
			<h1>Weather in {weatherData.location.name}</h1>
			<p>{weatherData.current.condition.text}</p>
		</div>
	);
}
export default WeatherComponent;

// Once the data has been fetched, it is stored in the weatherData state variable.
// A "Loading…" message is displayed until the data has been fetched;
// afterward, the data is shown. This check ensures that the data is displayed
// only once it has been fetched and is ready to be viewed.
// **********************************************************************************************

import { useState, useEffect } from "react";

function WeatherForecast() {
	const [forecast, setForecast] = useState({ temp: "", summary: "" });

	useEffect(() => {
		fetch(
			"https://api-regional.codesignalcontent.com/weatherManager/getWeather?lat=41.902782&lng=12.496366"
		)
			.then((response) => response.json())
			.then((data) =>
				setForecast({
					temp: data.weather.temperature,
					summary: data.weather.summary,
				})
			);
	}, []);

	return (
		<p>
			The weather in Rome is {forecast.summary} with a temperature of{" "}
			{forecast.temp}°C.
		</p>
	);
}

// export default WeatherForecast;
// **********************************************************************************************

import { useState, useEffect } from "react";

function ClimateData() {
	const [climate, setClimate] = useState({
		temperature: 0,
		summary: "Loading...",
		city: "",
	});

	useEffect(() => {
		fetch(
			"https://api-regional.codesignalcontent.com/weatherManager/getWeather?lat=41.902782&lng=12.496366"
		)
			.then((response) => response.json())
			.then((data) => {
				// Update the climate state to have 'city' field and take the value from data.city
				setClimate({
					temperature: data.weather.temperature,
					summary: data.weather.summary,
					city: data.city,
				});
			});
	}, []);

	return (
		<div>
			{/* Make sure to show the city name here too */}
			<p>Temperature: {climate.temperature}°C</p>
			<p>Conditions: {climate.summary}</p>
			<p>City: {climate.city}</p>
		</div>
	);
}

// export default ClimateData;
// **********************************************************************************************
// **********************************************************************************************
// **********************************************************************************************
// **********************************************************************************************
// **********************************************************************************************
