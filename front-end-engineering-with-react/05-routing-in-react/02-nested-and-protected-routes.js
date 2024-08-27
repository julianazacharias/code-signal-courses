// *******************  Setting Up Nested Routes with `Outlet` and `index` attribute ******************

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="profile" element={<Profile />}>
					<Route index element={<ProfileOverview />} />
					<Route path="details" element={<ProfileDetails />} />
					<Route path="settings" element={<ProfileSettings />} />
				</Route>
			</Routes>
		</Router>
	);
}

// Components for the user profile
function Profile() {
	return (
		<div>
			<h2>User Profile</h2>
			<nav>
				<Link to="details">Details</Link>
				<Link to="settings">Settings</Link>
			</nav>
			<Outlet />
		</div>
	);
}

// **********************************************************************************************************

// **************** Shielding Routes: Security in React with conditional `element` Attribute ****************
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Outlet,
	Link,
	Navigate,
} from "react-router-dom";

function App() {
	const user = getUserDetails(); // Function to get user details
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					path="profile"
					element={user ? <Profile /> : <Navigate to="/login" />}
				>
					...
				</Route>
			</Routes>
		</Router>
	);
}
// **********************************************************************************************************

import {
	BrowserRouter as Router,
	Routes,
	Route,
	Outlet,
	Link,
	Navigate,
} from "react-router-dom";

function ProfileSettings() {
	const [updated, setUpdated] = React.useState(false);

	function updateSettings() {
		setUpdated(true);
	}

	// If settings are updated, navigate to ProfileDetails
	return updated ? <Navigate to="../details" /> : <SettingsComponent />;
}
// **********************************************************************************************************

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const isLoggedIn = true; // Simulate the astronaut not being logged in

export default function App() {
	return (
		<BrowserRouter>
			<div>
				<h1>Spaceship Navigation Panel</h1>
				<Link to="/engine-room">Enter Engine Room</Link>
				<Routes>
					<Route
						path="/engine-room"
						element={isLoggedIn ? <EngineRoom /> : <Login />}
					/>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

function EngineRoom() {
	return <h2>Engine Room access granted!</h2>;
}

function Login() {
	return <h2>Access denied: Astronaut not logged in.</h2>;
}
// **********************************************************************************************************

import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';

function CargoHold() {
  return <h1>Welcome to the Cargo Hold</h1>;
}

function EngineRoom() {
  return <h1>Engine Room - Authorized Personnel Only</h1>;
}

const AccessDenied = () => {
  return <h1>Access Denied: Unauthorized personnel</h1>;
}

export default function App() {
  let loggedIn = false;
  
  return (<BrowserRouter>
    <nav>
      <ul>
        <li><Link to="/cargo-hold">Cargo Hold</Link></li>
        <li><Link to="/engine-room">Engine Room</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/cargo-hold" element={<CargoHold />} />
      <Route 
        path="/engine-room" 
        element={loggedIn ? <EngineRoom /> : <Navigate to="/access-denied" />} 
      />
      <Route path="/access-denied" element={<AccessDenied />} />
    </Routes>
  </BrowserRouter>
  );
}



// **********************************************************************************************************

import {BrowserRouter as Router, Routes, Route, Link, Outlet} from "react-router-dom";

const ControlPanel = () => <h1>Control Panel Page</h1>;
const EngineRoom = () => <h1>Engine Room Page</h1>;

function Spaceship() {
  return (
    <div>
      <h2>Spaceship Control Room</h2>
      <nav>
        <Link to="control-panel">Control Panel</Link>
        <Link to="engine">Engine Room</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/spaceship">Control Panel</Link><br />
        <Link to="/spaceship/engine">Engine Room</Link>
      </nav>
      <Routes>
        <Route path="/spaceship" element={<Spaceship />} />
          <Route index element={<ControlPanel />} />
          <Route path="engine" element={<EngineRoom /> } />
      </Routes>
    </Router>
  );
}
// **********************************************************************************************************
// **********************************************************************************************************
