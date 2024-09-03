// Understanding GET Requests with Parameters

fetch("https://api.example.com/data?name=value");

// *******************************************************************************************************

// Structure of Request Queries

// Request queries follow a structure focused on detail. After the ?,
// we create key-value pairs and use & to add parameters.

fetch("https://api.example.com/data?name1=value1&name2=value2");
// *******************************************************************************************************

// Sending GET Requests with Parameters

fetch(
	"https://api-regional.codesignalcontent.com/weatherManager/getLocation?city=Rome"
)
	.then((response) => response.json())
	.then((data) => console.log(data));

// *******************************************************************************************************

fetch(
	"https://api-regional.codesignalcontent.com/weatherManager/getWeather?lat=49.988358&lng=36.232845"
)
	.then((response) => response.json())
	.then((data) => console.log(data));

// {"city":"Kharkiv","location":{"lat":"49.988358","lng":"36.232845"},"weather":{"temperature":38,"summary":"Rain"}}

// *******************************************************************************************************

// Handling Errors with GET Requests

try {
	fetch(
		"https://api-regional.codesignalcontent.com/weatherManager/getLocation?city=Rome"
	)
		.then((response) => response.json())
		.then((data) => console.log(data));
} catch (error) {
	console.error("Error:", error);
}

// *******************************************************************************************************

function getWeatherForCity(city) {
	fetch(
		`https://api-regional.codesignalcontent.com/weatherManager/getLocation?city=${city}`
	)
		.then((response) => response.json())
		.then((locationData) => {
			const lat = locationData.location.lat;
			const lng = locationData.location.lng;
			return fetch(
				`https://api-regional.codesignalcontent.com/weatherManager/getWeather?lat=${lat}&lng=${lng}`
			);
		})
		.then((response) => response.json())
		.then((weatherData) => {
			document.getElementById(
				"weather-result"
			).innerText = `Weather in ${city}: ${weatherData.weather.summary} with a temperature of ${weatherData.weather.temperature}°C`;
		})
		.catch((error) => {
			console.error("Failed to fetch weather:", error);
		});
}

getWeatherForCity("Kharkiv");

// *******************************************************************************************************

fetch(
	"https://api-regional.codesignalcontent.com/weatherManager/getLocation?city=Rome"
)
	.then((response) => response.json())
	.then((data) => {
		const weatherDiv = document.getElementById("weather-info");
		weatherDiv.innerText = `Coordinates for Rome: Latitude ${data.location.lat}, Longitude ${data.location.lng}`;
	})
	.catch((error) => console.error("Error fetching weather data:", error));

// *******************************************************************************************************

const city = "Yerevan";
fetch(
	`https://api-regional.codesignalcontent.com/weatherManager/getLocation?city=${city}`
)
	.then((response) => response.json())
	.then((data) => {
		const weatherDiv = document.getElementById("forecast");
		weatherDiv.innerText = `Coordinates for ${city}: Latitude ${data.location.lat}, Longitude ${data.location.lng}`;
	})
	.catch((error) => {
		document.getElementById("forecast").innerText =
			"Error fetching location data";
		console.error("Failed to fetch location:", error);
	});

// *******************************************************************************************************
