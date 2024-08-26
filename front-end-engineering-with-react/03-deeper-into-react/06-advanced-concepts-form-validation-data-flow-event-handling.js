// ************************** ADVANCED FORM VALIDATION **************************

import React, { useState } from "react";

function SimpleEmailForm() {
	const [email, setEmail] = useState("");

	const handleEmailChange = (e) => {
		setEmail(e.target.value); // The email state is updated as the user types
	};
	// Validate if the entered email is in a valid format
	const validateEmail = (e) => {
		e.preventDefault();
		const pattern = // regular expression for email
			pattern.test(email) ? alert("Email is valid") : alert("Invalid email");
	};
	return (
		<form onSubmit={validateEmail}>
			<input type="text" value={email} onChange={handleEmailChange} />
			<button type="submit">Submit</button>
		</form>
	);
}

// *******************************************************************************************************

// ************************** DATA FLOW IN REACT **************************

//Data in React typically flows from the top (parent) to the bottom (child).
// However, data can also flow in the upward direction using callback functions.

// In this case, the grandchild component sends data to the grandparent component.

import React, { useState } from "react";

function Grandparent() {
	const [grandChildData, setGrandChildData] = useState("");

	const handleCallback = (grandChildData) => {
		setGrandChildData(grandChildData); // The state is updated with data from the grandchild
	};
	return <Parent grandparentCallback={handleCallback} />;
}

function Parent({ grandparentCallback }) {
	return <Child parentCallback={grandparentCallback} />;
}

function Child({ parentCallback }) {
	return (
		<button onClick={() => parentCallback("Data from Grandchild")}>
			Click
		</button>
	);
}
// *******************************************************************************************************

function Parent() {
	const handleClick = () => console.log("Clicked in Child");
	return <Child onButtonClick={handleClick} />;
}

function Child({ onButtonClick }) {
	return <button onClick={onButtonClick}>Click</button>;
}

// *******************************************************************************************************

function Box(props) {
	return <div className="box">{props.children}</div>; // It renders the components passed to it
}

function App() {
	return (
		<Box>
			<h2>Hello there!</h2> // These components are passed to `Box` as
			`props.children`
			<p>Welcome to React</p>
		</Box>
	);
}

// *******************************************************************************************************

import { useState } from "react";

const allBooks = [
	{ title: "The Great Gatsby", id: 1 },
	{ title: "To Kill a Mockingbird", id: 2 },
	{ title: "1984", id: 3 },
	{ title: "Harry Potter and the Philosopher's Stone", id: 4 },
	{ title: "The Lord of the Rings", id: 5 },
];

function BookSearchForm() {
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredBooks, setFilteredBooks] = useState(allBooks);

	const handleSearchChange = (event) => {
		setSearchTerm(event.target.value);

		if (event.target.value.trim() === "") {
			event.preventDefault();
			return;
		}
		const filtered = allBooks.filter((book) =>
			book.title.toLowerCase().includes(event.target.value.toLowerCase())
		);
		setFilteredBooks(filtered);
	};

	return (
		<div>
			<input type="text" value={searchTerm} onChange={handleSearchChange} />
			<ul>
				{filteredBooks.map((book) => (
					<li key={book.id}>{book.title}</li>
				))}
			</ul>
		</div>
	);
}

export default BookSearchForm;
// *******************************************************************************************************

import { useState } from "react";

function LibraryForm() {
	const [bookName, setBookName] = useState("");

	const validateBookName = () => {
		if (bookName === "AstroPhysics") {
			alert("AstroPhysics book is available. Thank you for your submission!");
		} else {
			alert("Only AstroPhysics book is available for now.");
		}
	};

	return (
		<div>
			<input
				type="text"
				value={bookName}
				onChange={(e) => setBookName(e.target.value)}
			/>
			<button onClick={validateBookName}>Submit</button>
		</div>
	);
}

// export default LibraryForm;
// *******************************************************************************************************

import { useState } from "react";

function BookSubmission({ onSubmitTitle }) {
	const [title, setTitle] = useState("");

	const handleTitleChange = (e) => setTitle(e.target.value);
	// const handleSubmit = () => onSubmitTitle(title); // Bug: logic issue in how to call onSubmitTitle
	const handleSubmit = () => {
		console.log("Submit button clicked");
		onSubmitTitle(title);
	};

	return (
		<div>
			<label htmlFor="bookTitle">Book Title:</label>
			<input
				id="bookTitle"
				type="text"
				value={title}
				onChange={handleTitleChange}
				placeholder="Enter book title"
			/>
			<button type="button" onClick={handleSubmit}>
				Submit
			</button>
		</div>
	);
}

function LibrarySystem() {
	const handleBookTitle = (data) => {
		alert(`Book submitted: ${data}`);
	};

	return <BookSubmission onSubmitTitle={handleBookTitle} />;
}

// export default LibrarySystem;
// *******************************************************************************************************

import "./App.css";

function Book({ children }) {
	return <div className="book">{children}</div>;
}

function Library() {
	return (
		<Book>
			<h2>Adventures in React</h2>
			<p>By Cosmo</p>
		</Book>
	);
}

// export default Library;

// *******************************************************************************************************

function Library() {
	const handleClick = (data) => {
		alert(`Book submitted: ${data}`);
	};

	return <Book onBorrow={handleClick} />;
}

function Book({ onBorrow }) {
	return <button onClick={() => onBorrow("The Little Prince")}>Click</button>;
}

// export default Library;

// *******************************************************************************************************
