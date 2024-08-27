// In React routing, NavLink is one way to navigate different routes, acting like an advanced Link.

import { BrowserRouter as Router, NavLink } from "react-router-dom";

const Nav = () => (
	<Router>
		<NavLink to="/home" activeClassName="active">
			Home
		</NavLink>
		<NavLink to="/about" activeClassName="active">
			About
		</NavLink>
	</Router>
);

// **********************************************************************************************************

import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";

function Nav() {
	return (
		<Router>
			<Link to="/home">Home</Link>
			<NavLink to="/about" activeClassName="active">
				About
			</NavLink>
		</Router>
	);
}
// **********************************************************************************************************

import { BrowserRouter as Router, NavLink } from "react-router-dom";
import "./App.css";

function Nav() {
	return (
		<Router>
			<NavLink to="/home" className="nav-link" activeClassName="active">
				Home
			</NavLink>
			<NavLink to="/about" className="nav-link" activeClassName="active">
				About
			</NavLink>
		</Router>
	);
}
// **********************************************************************************************************
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import "./App.css";

function Nav() {
	return (
		<Router>
			<NavLink to="/home" className="nav-link" activeClassName="active">
				Home
			</NavLink>
			<NavLink to="/about" className="nav-link" activeClassName="active">
				About
			</NavLink>
		</Router>
	);
}
// **********************************************************************************************************

<NavLink
	to="/dashboard"
	style={({ isActive }) => ({
		color: isActive ? "orange" : "blue",
	})}
>
	Dashboard
</NavLink>;

// **********************************************************************************************************
//replace: This attribute decides whether the spaceship should replace the current location in
// the history stack with a new location. If replace is set to true, the current URL in the history
// stack is replaced with a new URL instead of adding the new URL to the history stack.

// exact: This attribute is used to avoid any ambiguity in NavLink activation.
// It ensures that the NavLink is only considered 'active' if the location is an exact match.
// The exact prop helps us make sure we're only highlighting the NavLink to the exact location
//  we're currently at instead of also highlighting the links to similar, but not the same, locations.

<NavLink to="/home" replace exact>
	Home
</NavLink>;
// **********************************************************************************************************

import { BrowserRouter as Router, NavLink } from "react-router-dom";

function Spaceship() {
	return (
		<Router>
			<NavLink to="/cockpit" replace exact activeClassName="active">
				Cockpit
			</NavLink>
			<NavLink to="/engine-room" replace exact activeClassName="active">
				Engine Room
			</NavLink>
		</Router>
	);
}
// **********************************************************************************************************
import {
	BrowserRouter as Router,
	Routes,
	Route,
	NavLink,
} from "react-router-dom";

function App() {
	return (
		<Router>
			<nav>
				<NavLink
					to="/photos/stars"
					style={({ isActive }) => ({ color: isActive ? "orange" : "black" })}
				>
					Stars
				</NavLink>
			</nav>
			<Routes>
				<Route path="/photos/stars" element={<Stars />} />
			</Routes>
		</Router>
	);
}

function Stars() {
	return <h1>Star Photos</h1>;
}

export default App;
// **********************************************************************************************************
// **********************************************************************************************************
// **********************************************************************************************************
