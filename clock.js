import { useState } from "react";
import "./index.scss";

const App = () => {
	const [hours, setHours] = useState("00");
	const [minutes, setMinutes] = useState("00");

	// Function to format numbers with leading zeros
	const formatNumber = (num) => num.toString().padStart(2, "0");

	// Function to handle hour increment
	const increaseHours = () => {
		setHours((prev) => {
			let newHour = parseInt(prev) + 1;
			if (newHour > 23) newHour = 0;
			return formatNumber(newHour);
		});
	};

	// Function to handle hour decrement
	const decreaseHours = () => {
		setHours((prev) => {
			let newHour = parseInt(prev) - 1;
			if (newHour < 0) newHour = 23;
			return formatNumber(newHour);
		});
	};

	// Function to handle minute increment
	const increaseMinutes = () => {
		setMinutes((prev) => {
			let newMinute = parseInt(prev) + 1;
			if (newMinute > 59) newMinute = 0;
			return formatNumber(newMinute);
		});
	};

	// Function to handle minute decrement
	const decreaseMinutes = () => {
		setMinutes((prev) => {
			let newMinute = parseInt(prev) - 1;
			if (newMinute < 0) newMinute = 59;
			return formatNumber(newMinute);
		});
	};

	return (
		<div id="ClockUpdater" className="container">
			<div className="row">
				<button
					id="hours-up-button"
					className="btn btn-outline-primary col"
					onClick={increaseHours} /* Modified: Added event handler */
				>
					&uarr;
				</button>
				<button
					id="minutes-up-button"
					className="btn btn-outline-primary col"
					onClick={increaseMinutes} /* Modified: Added event handler */
				>
					&uarr;
				</button>
			</div>

			<div className="row">
				<div id="clock" className="badge badge-primary col">
					{`${hours}:${minutes}`}
				</div>
			</div>

			<div className="row">
				<button
					id="hours-down-button"
					className="btn btn-outline-primary col"
					onClick={decreaseHours} /* Modified: Added event handler */
				>
					&darr;
				</button>
				<button
					id="minutes-down-button"
					className="btn btn-outline-primary col"
					onClick={decreaseMinutes} /* Modified: Added event handler */
				>
					&darr;
				</button>
			</div>
		</div>
	);
};

export default App;
