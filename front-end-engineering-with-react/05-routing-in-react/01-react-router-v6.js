import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/contact" element={<ContactPage />} />
			</Routes>
		</Router>
	);
}

function HomePage() {
	return <h1>Welcome Home</h1>;
}

function AboutPage() {
	return <h1>About Us</h1>;
}

function ContactPage() {
	return <h1>Contact Us</h1>;
}

// **********************************************************************************************************

// In a single-page application, we aim to navigate between different pages without a full-page reload.
// The Link component helps us achieve this goal. It represents a navigational link and allows us to change the URL,
// thus displaying the corresponding router-connected component.

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
	return (
		<Router>
			<nav>
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
				<Link to="/contact">Contact</Link>
			</nav>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/contact" element={<ContactPage />} />
			</Routes>
		</Router>
	);
}
// **********************************************************************************************************

// React Router has a powerful feature that lets us handle unexpected paths or errors elegantly — the "catch-all" * path.
// This is like a net that catches all paths that haven't been defined in our application. When a user tries to
// navigate to a path that doesn't exist, the '* path' is matched, and we can decide what to render or where to redirect the user.

// Let's update our weather forecasting app to include a '404 Page Not Found' route. Any non-defined paths
// will be caught by this route, and a relevant message will be displayed to the user.

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
	return (
		<Router>
			<nav>
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
				<Link to="/contact">Contact</Link>
			</nav>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/contact" element={<ContactPage />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</Router>
	);
}

function PageNotFound() {
	return (
		<h1>
			404 Page Not Found. Whoops! We can't find the page you're looking for.
		</h1>
	);
}

// In this code, the * in <Route path="*" element={<PageNotFound />} will match any path not defined yet,
// and render the PageNotFound component.

// Remember to place the * path Route at the end of all other routes. The router goes through the Routes sequentially.
// If we don't put the * path Route at the end, it will match all routes, and the user will always
// see the 'Page Not Found' instead of the desired page.

// **********************************************************************************************************

import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Stars from "./Stars";
import Planets from "./Planets";

function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path="/stars" element={<Stars />} />
				<Route path="/planets" element={<Planets />} />
			</Routes>
		</BrowserRouter>
	);
}

// export default App;
// --------------------------------------------------------------------------------------------------------
import { Link } from "react-router-dom";

function NavBar() {
	return (
		<nav>
			<Link to="/stars">Stars</Link> <br />
			<Link to="/planets">Planets</Link>
		</nav>
	);
}

// export default NavBar;

// --------------------------------------------------------------------------------------------------------

function Stars() {
	return <h2>Welcome to the Stars gallery!</h2>;
}

//   export default Stars;
// --------------------------------------------------------------------------------------------------------
function Planets() {
	return <h2>Welcome to the Planets exhibition!</h2>;
}

//   export default Planets;

// **********************************************************************************************************
// ******************************* NOT FOUND PAGE EXAMPLE ************************************

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const SpacePage = () => <h1>Welcome to the Space Page!</h1>;
const NotFoundPage = () => <h1>This page not found in our system :(</h1>;

export default function App() {
	return (
		<Router>
			<nav>
				<Link to="/space">Explore Space</Link>
				<br />
				<Link to="/unknown-galaxy">Unknown Galaxy</Link>
			</nav>
			<Routes>
				<Route path="/space" element={<SpacePage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</Router>
	);
}

// **********************************************************************************************************
