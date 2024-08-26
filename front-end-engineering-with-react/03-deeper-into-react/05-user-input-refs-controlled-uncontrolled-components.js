import React, { useState } from "react";

function Greeting() {
	const [name, setName] = useState("");

	return (
		<div>
			<h1>Hello, {name}!</h1>
			<input
				type="text"
				value={name}
				onChange={(event) => setName(event.target.value)} // Updates `name` upon typing in the input
			/>
		</div>
	);
}

// *****************************************************************************************
//Refs or references in React provide a way to access and interact with DOM nodes or React
// elements directly within your components. This is especially handy in cases where you
// want to change the child component without making use of props or triggering a re-render.

const myRef = useRef();

//Notice that we call useRef() without passing any arguments.
// This results in myRef.current getting initialized with the value of null.
// The current property is mutable; it's created specifically for you to assign it a persistent value
// that doesn't trigger a re-render, thereby allowing the value to persist across renders.

<input ref={myRef} type="text" />;

//The ref attribute acts like a tether, linking the myRef ref to the input field,
// hence allowing us detailed access to this specific instance of the input field across renders.
// It lets myRef.current point to the corresponding DOM node, here an HTMLInputElement,
// providing a way to read from or write to it.

// *****************************************************************************************

import React, { useRef } from "react";

function Greeting() {
	const nameRef = useRef(); // nameRef.current is initialized as null

	return (
		<div>
			<h1>Hello, {nameRef.current && nameRef.current.value}!</h1>
			<input ref={nameRef} type="text" />{" "}
			{/* ties nameRef to the input field */}
		</div>
	);
}
// *****************************************************************************************

// Controlled vs Uncontrolled Components
// Controlled inputs are connected to React state, and they change when the state changes.
// Conversely, uncontrolled inputs store their state internally and are not controlled by React.
// Although the state is more commonly controlled by components,
// uncontrolled components are useful in some scenarios, such as file uploads.

// React provides flexibility in how we can create components in terms of handling user input.
// Both controlled and uncontrolled components serve different purposes and are utilized
// based on the specific needs of your application.

// *****************************************************************************************

// ************* UNCONTROLLED COMPONENTS ****************

import React, { useRef } from "react";

function UncontrolledComponent() {
	const inputRef = useRef(); // Creates a ref

	function handleSubmit(e) {
		e.preventDefault();
		alert(inputRef.current.value); // Reads directly from the DOM
	}

	return (
		<form onSubmit={handleSubmit}>
			<input ref={inputRef} type="text" />
			<button type="submit">Submit</button>
		</form>
	);
}
// *****************************************************************************************
// ***************  Working with Nested Functional Components  ***************

function Person({ name }) {
	return <p>Hello, {name}!</p>;
}

function People() {
	const names = ["Alice", "Bob", "Charlie"];

	return (
		<div>
			{names.map((name) => (
				<Person key={name} name={name} /> // Child components
			))}
		</div>
	);
}
// *****************************************************************************************

import { useState } from "react";

export default function BirthdayRSVP() {
	const [guestName, setGuestName] = useState("");

	const updateGuestName = (event) => setGuestName(event.target.value);

	return (
		<div>
			<h1>Virtual Birthday Party RSVP</h1>
			<input
				type="text"
				placeholder="Enter your name here"
				value={guestName}
				onChange={updateGuestName}
			/>
			<p>Hi {guestName}, thank you for RSVPing!</p>
		</div>
	);
}
// *****************************************************************************************

import { useState } from 'react';

export default function BirthdayParty() {
  const [guestName, setGuestName] = useState('');
  const [greetingMessage, setGreetingMessage] = useState('');

  
 const updateGreeting = () => {
   setGreetingMessage(`Hello, ${guestName}, you are invited to the party!`)
   
 }
  return (
    <div>
      <input
        type="text"
        value={guestName}
        onChange={(e) => setGuestName(e.target.value)}
        placeholder="Enter your name"
      />
      <button onClick={updateGreeting}>Greet Me</button>
      <p>{greetingMessage}</p>
    </div>
  );
}


// *****************************************************************************************
import { useState, useRef } from 'react';

export default function BirthdayForm() {
  const [name, setName] = useState('Mars Explorer');
  const [age, setAge] = useState(3);
  const ageRef = useRef();
  

  return (
    <div>
      <h1>Virtual Birthday Party in Space</h1>
      <form>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Space Age <span role="img" aria-label="rocket">🚀</span>:
          <input
            ref={ageRef}
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="How old are you on Earth?"
          />
        </label>
      </form>
    </div>
  );
}

// *****************************************************************************************

// Got it! Let's explore some potential uses for handleSubmit in this form:

// 1. Form Validation: Before processing the form submission, you might want to validate the entered data 
// (e.g., ensuring the age is a positive number).

// 2. Data Submission: You could use it to send the entered data to a server or API.
// 3. State Management: You might manage additional states that get cleared or set when the form is submitted.
// 4. User Feedback: Displaying a success message or error feedback upon form submission.


function handleSubmit(e) {
    e.preventDefault();
    alert(`Name: ${name}, Age: ${age}`);
  }
// *****************************************************************************************

import { useState } from 'react';

export default function BirthdayInvite() {

  const [guestName, setGuestName] = useState();
  
  const updateGuestName = (event) => {
    setGuestName(event.target.value)
  }

  return (
    <div>
      <p>Hi {guestName}, thank you for RSVPing!</p>
      <input type="text" value={guestName} onChange={updateGuestName} placeholder="Enter guest name"/>
    </div>
  );
}

// *****************************************************************************************