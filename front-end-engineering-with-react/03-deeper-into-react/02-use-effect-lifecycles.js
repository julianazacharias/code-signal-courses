// 1 . Mounting with useEffect: By using useEffect and specifying an empty array [] as the dependency,
//the effect runs once after the initial render.

// 2. Updating with useEffect: All the data the effect needs to 'watch' should be specified in the dependency array.

// 3. Unmounting with useEffect: A cleanup function returned from the effect helps prevent memory leaks during this phase.

import React, { useState, useEffect } from "react";

function MyComponent() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		// Mounting and updating:
		document.title = `You clicked ${count} times`;

		// Unmounting:
		return function cleanup() {
			document.title = `React App`; // Original title restored
		};
	}, [count]); // When count updates, re-run the effect

	return (
		<div>
			<p>You clicked {count} times</p>
			<button onClick={() => setCount(count + 1)}>Click me</button>
		</div>
	);
}

// export default MyComponent;

// *****************************************************************************************

// The cleanup part of useEffect comes into play here. Upon returning a function from a useEffect hook,
// React interprets this as a cleanup function and invokes it before the component
// is removed from the UI to prevent memory leaks.

// So never forget, when performing tasks such as setting up a subscription in an effect,
// always provide a cleanup function to release resources if/when the component unmounts!

import React, { useState, useEffect } from "react";

function MyComponent() {
	const [size, setSize] = useState(window.innerWidth);

	// Effect to update state
	useEffect(() => {
		const handleResize = () => setSize(window.innerWidth);
		window.addEventListener("resize", handleResize); // Set up subscription

		// Cleanup function to remove subscription
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []); // Empty array ensures the effect runs only once

	return (
		<div>
			<p>Window Size: {size} px</p>
		</div>
	);
}

// export default MyComponent;
// *****************************************************************************************

// UseEffect doesn't support async functions as its parameter directly.
// This is because useEffect expects its parameter function to return a cleanup function or nothing at all.
// However, async functions always return a promise, which leads to a warning or error.

// import React, { useState, useEffect } from "react";

// function MyComponent() {
// 	const [state, setState] = useState("Initial State");

// 	// A mock async function
// 	const asyncFunc = async () => {
// 		return Promise.resolve("Updated state"); // INCORRECT APPROACH
// 	};

// 	useEffect(async () => {
// 		let result = await asyncFunc(); //CAUSES ISSUES
// 		setState(result);
// 	}, []);

// 	return <div>{state}</div>;
// }

// In the above example, the async function asyncFunc returns a promise,
// but this causes issues when used directly inside useEffect.

// export default MyComponent;
// *****************************************************************************************

import React, { useState, useEffect } from "react";

function MyComponent() {
	const [state, setState] = useState("Initial State");

	// Mock async function
	const asyncFunc = async () => {
		return Promise.resolve("Updated state");
	};

	useEffect(() => {
		//ENVOLVER NESSE 'callAsyncFunc'

		const callAsyncFunc = async () => {
			let val = await asyncFunc();
			setState(val);
		};

		callAsyncFunc(); //CORRECT APPROACH - chamar 'callAsyncFunc' no final
	}, []);

	return <div>{state}</div>;
}

// export default MyComponent;

// *****************************************************************************************

import { useState, useEffect } from "react";

function PhotoCounter() {
	const [photoViews, setPhotoViews] = useState(0);
	const [message, setMessage] = useState("");

	useEffect(() => {
		setMessage(`Photo has been viewed ${photoViews} times.`);
		return () => console.log("The component is being removed");
	}, [photoViews]);

	return (
		<div>
			<p>{message}</p>
			<button onClick={() => setPhotoViews(photoViews + 1)}>View Photo</button>
		</div>
	);
}

// export default PhotoCounter;

// *****************************************************************************************

import { useState, useEffect } from "react";

export default function Gallery() {
	const [imageCount, setImageCount] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setImageCount((currentCount) => currentCount + 1);
		}, 2000);

		return () => clearInterval(interval);
	}, []);

	return <div>Images in gallery: {imageCount}</div>;
}
// *****************************************************************************************

import { useState, useEffect } from "react";

function PortfolioGallery() {
	const [photoCount, setPhotoCount] = useState(0);

	useEffect(() => {
		if (photoCount >= 5) {
			alert(`You have ${photoCount} photos in your portfolio.`);
		}

		return () => console.log("Your portfolio will be closed now.");
	}, [photoCount]);

	return (
		<div>
			<p>Number of photos in portfolio: {photoCount}</p>
			<button onClick={() => setPhotoCount(photoCount + 1)}>Add a photo</button>
		</div>
	);
}

// export default PortfolioGallery;

// *****************************************************************************************

import { useState, useEffect } from 'react';

export default function PortfolioGallery() {
  const [photoLabel, setPhotoLabel] = useState("Loading...");

  useEffect(() => {
    const loadPhotoInfo = async () => {
      const label = await new Promise(resolve =>
        setTimeout(() => resolve('Astrophotography Collection'), 1000)
      );      
      return label;
    };
    
      loadPhotoInfo().then(label => {
    setPhotoLabel(label);
  });
    return () => setPhotoLabel("Loading...");
  }, []);

  return <h1>{photoLabel}</h1>;
}

// *****************************************************************************************

import { useState, useEffect } from 'react';

function PhotosCount() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    // Simulate adding photos when the component mounts
    setPhotos(['sunset.jpg', 'mountains.png']);

    // Cleanup function to run when the component unmounts
    return () => setPhotos([]);

  }, []); // Empty array means this effect runs once on mount and unmount

  return (
    <div>
      <p>There are {photos.length} photos in your portfolio.</p>
    </div>
  );
}

// export default PhotosCount;

// *****************************************************************************************
// *****************************************************************************************