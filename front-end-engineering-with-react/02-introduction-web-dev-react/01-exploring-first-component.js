// const element = <h1>Hello, World!</h1>;

// **************************************************************************************************

// import React from "react";

// function WelcomeMessage() {
// 	return <div>Welcome to React!</div>;
// }

// export default WelcomeMessage;

// **************************************************************************************************

// *************************** DEPRECATED EXAMPLE ***************************

import React from "react";
import ReactDOM from "react-dom";
import WelcomeMessage from "./WelcomeMessage"; // assuming the WelcomeMessage is in the same folder

ReactDOM.render(<WelcomeMessage />, document.getElementById("root")); // DEPRECATED

// **************************************************************************************************

import React from "react";
import ReactDOM from "react-dom/client";
import WelcomeMessage from "./WelcomeMessage"; // Adjust the import based on your file structure

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<WelcomeMessage />);

// **************************************************************************************************

// This is a single line comment in JavaScript
<div>Welcome to React! {/* This is a single line comment in JSX */}</div>;

// **************************************************************************************************

/*
This is a multi-line comment
in JavaScript
*/

<div>
	{/*
    This is a multi-line comment
    in JSX
    */}
	Welcome to React!
</div>;

// **************************************************************************************************

function GreetingCard() {
	return (
		<div>
			Welcome aboard the Galactic Gateway, explorer!
			<h2>Embark on your coding journey!</h2>
		</div>
	);
}

export default GreetingCard;

// **************************************************************************************************

// function Countdown() {
//     return <h1>Prepare for launch in 3... 2... 1... Liftoff!</h1>;
// }
// export default Countdown

// **************************************************************************************************
