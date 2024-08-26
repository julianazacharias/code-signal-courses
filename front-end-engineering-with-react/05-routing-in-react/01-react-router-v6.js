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
// **********************************************************************************************************
// **********************************************************************************************************
// **********************************************************************************************************
// **********************************************************************************************************
