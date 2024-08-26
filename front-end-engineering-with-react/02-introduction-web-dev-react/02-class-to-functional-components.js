// *************************** Class compoenents are DEPRECATED ***************************
class Hello extends React.Component {
	render() {
		// The render function determines what gets displayed
		return <h1>Hello, world!</h1>; // Hello, world! will be shown on the screen
	}
}

// **************************************************************************************************

// *************************** Introduction to FUNCTIONAL COMPONENTS ***************************

function Welcome(props) {
	return (
		<div>
			<h1>Hello, {props.name}</h1>;<p>Welcome to the React Universe!</p>
		</div>
	);
}

// **************************************************************************************************

function Welcome(props) {
	return (
		<>
			<h1>Hello, {props.name}</h1>;<p>Welcome to the React Universe!</p>
		</>
	);
}

// **************************************************************************************************

const someFunction = () => 5;

function Welcome() {
	// Define some variables
	const salutation = "Hello,";
	const object = "Universe!";

	// Here we use a variable and a ternary operation inside the curly braces
	return (
		<div>
			<p>Our someFunction returns {someFunction()}</p>
			<h1>
				{salutation}{" "}
				{object === "Universe!" ? "How vast you are!" : "Who are you?"}
			</h1>
		</div>
	);
}

// Usage: <Welcome />

// **************************************************************************************************

const Greeting = () => {
	return (
		<div>
			<button onClick={() => alert(greeting)}>Greet Me!</button>{" "}
			{/* On click, show an alert with the greeting */}
		</div>
	);
};

// **************************************************************************************************

// Understanding Component Lifecycle
// Like humans, React components have a lifecycle: they are created (Mounting),
//updated (Updating), and finally removed (Unmounting).

// Mounting: The component is created and inserted into the DOM.
// Updating: The component updates due to changes in its state, which we will discuss later.
// Unmounting: The component is removed from the DOM.
// React Hooks allow Functional components to have similar lifecycle capabilities to those of Class components.

// **************************************************************************************************

const status = "ready for launch";
const checkSystems = () =>
	status === "ready for launch" ? "All systems go!" : "Systems check required.";

const SpacecraftStatus = () => {
	return <h2>Mission Control: {checkSystems()}</h2>;
};

// export default SpacecraftStatus;

// **************************************************************************************************

// This is a functional component representing a greet message to astronauts.
const menssage = "Prepare for liftoff!";
const SpacecraftGreeting = () => {
	return (
		<div>
			<h1>Welcome aboard the Galactic Explorer!</h1>
			<button onClick={() => alert(menssage)}>Launch Sequence</button>
		</div>
	);
};

export default SpacecraftGreeting;

// **************************************************************************************************

// **************************************************************************************************

// **************************************************************************************************
