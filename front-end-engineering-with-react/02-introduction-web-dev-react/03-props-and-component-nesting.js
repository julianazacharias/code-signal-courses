// Define a functional component named 'Welcome' that accepts a prop 'name'.
function Welcome(props) {
	// Return a greeting message that includes the 'name' prop.
	return <h1>Hello, {props.name}</h1>;
}

// **************************************************************************************************

// Define a function 'App' that renders a 'Welcome' component nested in a 'div' element.
function App() {
	return (
		<div>
			<Welcome name="Galactic Student" />
		</div>
	);
}

// **************************************************************************************************

// Passing a string 'Galactic Student' to our 'Welcome' component.
{
	/* <Welcome name='Galactic Student' /> */
}

//And, for numbers and booleans, we use braces rather than quotes:

{
	/* <DisplayNumber value={123} />
<DisplayTruth value={true} /> */
}
// **************************************************************************************************

//React components can have default props. These are the values that props fall back on when they are
//not supplied by the parent. Here's a modified Welcome component with a default name:

// Define a functional component named 'Welcome' that accepts a prop 'name'.
function Welcome(props) {
	return <h1>Hello, {props.name}</h1>;
}

// Setting a default value for the 'name' prop.
Welcome.defaultProps = {
	name: "Galactic Traveler",
};

// **************************************************************************************************

function PlanetCard(props) {
	return (
		<div>
			Welcome to {props.planetName}, which is {props.distance} light years away!
		</div>
	);
}

PlanetCard.defaultProps = {
	planetName: "Mystery Planet",
	distance: "unmeasured",
};

function App() {
	return (
		<div>
			<PlanetCard planetName="Jupiter" distance="390.5" />
			<PlanetCard />
		</div>
	);
}

// export default App;

// **************************************************************************************************

// Define a functional component to greet planets
function PlanetGreeting(props) {
	return <p>Welcome to {props.planet}!</p>;
}

// Set default props in case no planet is provided
PlanetGreeting.defaultProps = {
	planet: "Mars",
};

export default PlanetGreeting;
// **************************************************************************************************

// Spaceship component accepting 'name' and 'speed' props
function Spaceship(props) {
	return (
		<p>
			{props.name} cruises at {props.speed} lightyears per hour.
		</p>
	);
}

// Defining default props for Spaceship
Spaceship.defaultProps = {
	name: "Explorer",
	speed: 5000,
};

//   export default Spaceship;
// **************************************************************************************************
// **************************************************************************************************
