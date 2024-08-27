//Navigating Programmatically

import { useNavigate } from "react-router-dom";

function NewPostPage() {
	let navigate = useNavigate();

	saveNewPost(newPost).then(() => {
		navigate("/main"); // Navigates the user to the main page after saving a post
	});
}

// **********************************************************************************************************

import { useNavigate } from "react-router-dom";

const BackButton = () => {
	let navigate = useNavigate();

	let handleClick = () => {
		navigate(-1); // Takes you back one step in your route history.
	};

	return <button onClick={handleClick}>Go Back</button>;
};
// **********************************************************************************************************

import { useLocation } from "react-router-dom";

function CurrentPathDisplay() {
	let location = useLocation();

	return <div>Your current location: {location.pathname}</div>; // Displays the user's current location
}
// **********************************************************************************************************

import { useNavigate } from "react-router-dom";

function UpdateButton() {
	let navigate = useNavigate();

	let handleClick = () => {
		navigate("/login", { state: { from: "update" } }); // Adds state when navigating
	};

	return <button onClick={handleClick}>Update post</button>;
}
// --------------------------------------------------------------------------------------------------------
// In Login component

import { useLocation } from "react-router-dom";

function Login() {
	let location = useLocation();
	let from = location.state?.from; // Accesses the state passed during navigation
}

// **********************************************************************************************************

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function LaunchButton() {
	let navigate = useNavigate();

	const launchMission = () => {
		navigate("/mission-control", { state: { mission: "Mars Rover" } });
	};

	return <button onClick={launchMission}>Launch Mission</button>;
}

export default function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<LaunchButton />} />
				{/* Define the mission-control route */}
				<Route path="/mission-control" element={<div>Mission Control</div>} />
			</Routes>
		</Router>
	);
}

// **********************************************************************************************************
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import MissionBriefing from './MissionBriefing';

function SpaceShipControl() {
  const navigate = useNavigate();
  
  const handleBriefing = () => {
    navigate("/briefing", { state: { mission: "Briefing" } });
  }
  
  return <button onClick={handleBriefing}>Go to Mission Briefing</button>;
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SpaceShipControl />} />
        <Route path="/briefing" element={<MissionBriefing />} />
      </Routes>
    </Router>
  );
}

// ---------------------------------------------------------------------------------------------------------

import { useLocation } from 'react-router-dom';

export default function MissionBriefing() {
  const location = useLocation();
  const mission = location.state?.mission || 'unknown';
  return <h1>Welcome to the briefing for your next mission to {mission}!</h1>;
}

// **********************************************************************************************************

function LaunchButton() {
    const navigate = useNavigate();
    
    return <button onClick={() => navigate('/explore')}>Launch to Explore</button>;
  }
  
  function Explore() {
    return <div>Welcome to the Space Explorers' Hub!</div>;
  }
  
  export default function App() {
    return (
      <BrowserRouter>
        <div>
          <Link to="/">Home</Link>
          <LaunchButton />
          <Routes>
            <Route path="/" element={<div>Welcome Home, Space Cadet!</div>} />
            <Route path="/explore" element={<Explore />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }

  // **********************************************************************************************************
