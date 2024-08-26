function App() {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null); // initialize an error state

	useEffect(() => {
		fetch(
			"https://api-regional.codesignalcontent.com/posting-application-2/posts/"
		)
			.then((response) => {
				// If response is not ok, throw an error, otherwise parse the data to JSON
				if (!response.ok) {
					throw Error(response.statusText);
				}
				return response.json();
			})
			.then((data) => setData(data))
			.catch((error) => setError(error)); // If error occurred, set it to state
	}, []);

	/* Render an error message if it occurs, otherwise render fetched data or loading message */

	return (
		<div className="App">
			{error ? (
				<p>{error.message}</p>
			) : data ? (
				<p>Data fetched successfully!</p>
			) : (
				"Loading..."
			)}
		</div>
	);
}

// **********************************************************************************************

function App() {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [retries, setRetries] = useState(0);

	useEffect(() => {
		if (retries < 3) {
			// Limit the number of retries to 3
			fetch(
				"https://api-regional.codesignalcontent.com/posting-application-2/posts/"
			)
				.then((response) => {
					if (!response.ok) {
						throw Error(response.statusText);
					}
					return response.json();
				})
				.then((data) => setData(data))
				.catch((error) => {
					setError(error);
					setRetries(retries + 1); // Increment the number of retries if an error occurs
				});
		}
	}, [retries]); // Rerun the effect if retries number changed

	// return JSX similar to the previous block
}
// **********************************************************************************************

import { useState, useEffect } from "react";

export default function PostOffice() {
	const [posts, setPosts] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch(
			"https://api-regional.codesignalcontent.com/posting-application-2/posts/"
		)
			.then((response) => {
				if (!response.ok) {
					throw Error("Failed to fetch posts: " + response.statusText);
				}
				return response.json();
			})
			.then((data) => setPosts(data))
			.catch((err) => setError(err.toString()));
	}, []);

	return (
		<div>
			{error ? (
				<p>Error: {error}</p>
			) : posts ? (
				<p>Posts fetched successfully!</p>
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
}
// **********************************************************************************************

import { useState, useEffect } from 'react';

export default function App() {
  const [deliveryStatus, setDeliveryStatus] = useState('Loading digital mail...');
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api-regional.codesignalcontent.com/posting-application-2/posts/')
      .then(response => {
        if (!response.ok) { throw Error('Delivery problem: ' + response.statusText); }
        
        // Mimicing a delay for the processing of the response since our API is very fast
        return new Promise(resolve => setTimeout(resolve, 3000)).then(() => response.json());
      })
      .then(() => setDeliveryStatus('Digital mail received successfully!'))
      .catch(error => setError(error));
  }, []);

  return (
    <div className="App">
      {error ? <p>Failed to send: {error.message}</p> : <p>{deliveryStatus}</p>}
    </div>
  );
}
// **********************************************************************************************

import { useState, useEffect } from 'react';

export default function App() {
  const [status, setStatus] = useState('Loading...');
  
  useEffect(() => {
    fetch('https://api-regional.codesignalcontent.com/posting-application-2/posts/')
      .then(response => {
        if (!response.ok) { setStatus(`Error: ${response.statusText}`); }
        else { setStatus('Data fetched successfully!'); }
      })
      .catch(() => setStatus('Error: Failed to fetch data.'));
  }, []);

  return <div className="App">{status}</div>;
}
// **********************************************************************************************
// **********************************************************************************************
// **********************************************************************************************
