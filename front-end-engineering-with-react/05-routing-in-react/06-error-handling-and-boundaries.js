import { useNavigate } from "react-router-dom";

function LoginPage() {
	const navigate = useNavigate(); // Initialize navigate
	const handleLogin = async () => {
		const isLoginSuccessful = await login(); // Invoke login function
		if (isLoginSuccessful) {
			navigate("/main"); // Redirects to the main page
		}
	};
	return <button onClick={handleLogin}>Login</button>; // Invoke handleLogin on button click
}

// **********************************************************************************************************
//Handling Unexpected Errors with Navigate

async function LoginPage() {
	const navigate = useNavigate();
	const handleLogin = async () => {
		try {
			const isLoginSuccessful = await login();
			if (isLoginSuccessful) await navigate("/main"); // Navigation to main page
		} catch (err) {
			console.error(`Navigation error: ${err}`); // log error
		}
	};
	return <button onClick={handleLogin}>Login</button>;
}

// **********************************************************************************************************

//Error Boundary with Functional Components

//Thanks to the react-error-boundary library, we can efficiently implement Error Boundaries in
// functional components. The library provides a simple yet powerful tool, called ReactErrorBoundary.
// This seems complex, but in essence, it's quite straightforward.
// The ReactErrorBoundary component wraps around any other components we'd like to protect from potential errors.
// If an error occurs in any of the wrapped components, the ReactErrorBoundary gracefully handles it,
// preventing the whole application from crashing.

//Inside the ReactErrorBoundary component, we have a fallback prop. The fallback prop allows us
// to define a component or elements that should be rendered when an error occurs.
// It provides a seamless user experience by avoiding blank screens or error messages
// that can be confusing to non-technical end users. Instead, a friendly user interface indicating an issue is displayed.

import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";

function ComponentWithError() {
	throw new Error("Unexpected error occurred in the component."); // This component throws an error
}

function LoginPage() {
	return (
		<ReactErrorBoundary fallback={<h2>Oops...something went wrong.</h2>}>
			// Using ReactErrorBoundary to wrap our component
			<ComponentWithError />
		</ReactErrorBoundary>
	);
}
// **********************************************************************************************************
//When twinned together, Navigate and Error Boundary help
// create a robust and user-friendly application in React Router v6.
//  Here's how we can implement them together in React Router v6:

import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";

function HomePage() {
	/*...*/
}
function LoginPage() {
	/*...*/
}

function App() {
	return (
		<Router>
			<ReactErrorBoundary
				FallbackComponent={() => <Navigate to="/error" replace />}
			>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route
						path="/error"
						element={<h2>Oops... something went wrong.</h2>}
					/>
					{/* You can add more routes as needed */}
				</Routes>
			</ReactErrorBoundary>
		</Router>
	);
}
// **********************************************************************************************************

//Understanding Fallback Component and React Error Boundary

import { ErrorBoundary } from "react-error-boundary";

function ComponentWithError() {
	throw new Error("Oops! Something went wrong.");
}

function ErrorFallback({ error, resetErrorBoundary }) {
	return (
		<div>
			<p>Error: {error.message}</p>
			<button onClick={resetErrorBoundary}>Try again</button>
		</div>
	);
}

function MyApp() {
	return (
		<ErrorBoundary FallbackComponent={ErrorFallback}>
			<ComponentWithError />
		</ErrorBoundary>
	);
}

// export default MyApp;

// **********************************************************************************************************

// ------------ EXERCICIO ----------------

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import LoginPage from "./LoginPage";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LoginPage />} />
				<Route path="/error" element={<ErrorPage />} />
			</Routes>
		</BrowserRouter>
	);
}

// --------------------------------------------------------------------------------------------------------


import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = async () => {
    // Simulate a login attempt and error
    try {
      throw new Error('Access Denied: Incorrect credentials.'); // Failed login attempt
    } catch (error) {
      navigate('/error'); // Navigate to Error Page without state
    }
  };

  return <button onClick={handleLogin}>Attempt Login</button>;
}

// --------------------------------------------------------------------------------------------------------

export default function ErrorPage() {
    // Display a generic error message
    return <h2>Error: Unable to access the command center. Please try again later.</h2>;
  }
// **********************************************************************************************************

import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';

function ErrorPage() {
  return <h2>Oops... we encountered an issue with the launch.</h2>;
}

const login = () => { 
  throw new Error();
}

function MissionControl() {
  const navigate = useNavigate();
  
  async function handleLoginError() {
    try {
      throw new Error('Access Denied: Incorrect credentials.'); // Simulate login function
    } catch (error) {
      navigate('/error');
    }
  }
  
  return <button onClick={handleLoginError}>Begin Mission</button>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Link to="/mission-control">To Mission Control</Link>} />
        <Route path="/mission-control" element={<MissionControl />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
// **********************************************************************************************************
// **********************************************************************************************************
// **********************************************************************************************************
