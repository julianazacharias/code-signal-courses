// *****************  Dynamic Routing in a Nutshell  ****************************

import { Routes, Route } from "react-router-dom";

// App Component
function App() {
	return (
		<Routes>
			<Route path="/user/:username" element={<User />} />
		</Routes>
	);
}
// ":username" can vary and thus, it can dynamically render user-specific components.
// **********************************************************************************************************

// Dynamic routes in a React application provide the flexibility to render different components
// based on the parameterized part of the URL. For instance, if we are building a blog,
// we might have a route to display posts by year and month like "/posts/:year/:month".

import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<Routes>
			<Route path="/posts/:year/:month" element={<Posts />} />
		</Routes>
	);
}

// **********************************************************************************************************

// Diving into Route Parameters
// Route parameters serve as placeholders in the route's path. These get populated when the route executes.
// In our User component, we extract the username parameter using the useParams hook. It looks like this:

import { useParams } from "react-router-dom";

// User Component
function User() {
	// Destructure username from the useParams hook
	const { username } = useParams();
	// Display a welcome message with the username
	return <h1>Welcome, {username}!</h1>;
}

// **********************************************************************************************************

//Nested Dynamic Routes

import { Routes, Route } from "react-router-dom";

// App Component
function App() {
	return (
		<Routes>
			<Route path="/user/:username" element={<User />}>
				<Route index element={<UserProfile />} />
				<Route path="settings" element={<UserSettings />} />
			</Route>
		</Routes>
	);
}
// **********************************************************************************************************
//Nested Dynamic Routes

// For instance, consider a dynamic route for user profiles. Within each user's profile,
//  we may want to display different components for the user's settings, posts, or friends.
//  How does one facilitate this without creating an entirely new route for each scenario? The answer is nested routes.

import { Routes, Route } from "react-router-dom";

// App Component
function App() {
	return (
		<Routes>
			<Route path="/user/:username" element={<User />}>
				<Route index element={<UserProfile />} />
				<Route path="settings" element={<UserSettings />} />
			</Route>
		</Routes>
	);
}
// **********************************************************************************************************
// Generating Dynamic Links with Params

import { Link } from "react-router-dom";

// UsersList Component
function UsersList({ users }) {
	return (
		<ul>
			{/* Iterate over users to create a profile link for each one */}
			{users.map((user) => (
				<li key={user.id}>
					{/* Dynamic link to user's profile */}
					<Link to={`/user/${user.username}`}>{user.name}'s Profile</Link>
				</li>
			))}
		</ul>
	);
}
// **********************************************************************************************************

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Planet from './Planet';

export default function App() {
  return (
    <BrowserRouter>

      <h1>Welcome to Intergalactic Travel!</h1>
      <nav>
        <Link to="/planet/Mars">Visit Mars</Link>
      </nav>
      <Routes>
        <Route path="/planet/:name" element={<Planet />} />
      </Routes>
    </BrowserRouter>
  );
}

// ---------------------------------------------------------------------------------------------------------
import { useParams } from 'react-router-dom';

export default function Planet() {
  let { name } = useParams();
  return <h2>Welcome to {name}! The red planet awaits you.</h2>;
}

// **********************************************************************************************************
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import SpacecraftDetails from './SpacecraftDetails';

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/spacecraft/apollo11/mission1">Apollo 11 Details</Link>
      </nav>
      <Routes>
        <Route path="/spacecraft/:name/:mission" element={<SpacecraftDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

// -------------------------------------------------------------------------------------------------------
import { useParams } from 'react-router-dom';

export default function SpacecraftDetails() {
  const { name, mission } = useParams();
  return (
    <div>
      <h1>Exploring the {name} spacecraft!</h1>
      <h2>Mission Code: {mission}</h2>
    </div>
  );
}
// **********************************************************************************************************

