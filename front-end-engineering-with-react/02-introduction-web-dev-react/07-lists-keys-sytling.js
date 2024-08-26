const books0 = ["Book 1", "Book 2", "Book 3", "Book 4"];

function BookList() {
	return (
		<ul>
			{books.map((book) => (
				<li>{book}</li> // one <li> for each book
			))}
		</ul>
	);
}

// ******************************************************************************************

const books1 = [
	{ id: 1, title: "Book 1" },
	{ id: 2, title: "Book 2" },
];

function BookList() {
	return (
		<ul>
			{books.map((book) => (
				<li key={book.id}>{book.title}</li> // key=book.id
			))}
		</ul>
	);
}

// ******************************************************************************************

const books2 = [
	{ id: 1, title: "Book 1", isAvailable: true },
	{ id: 2, title: "Book 2", isAvailable: false },
];

function BookList() {
	return (
		<ul>
			{books.map((book) => (
				<li
					key={book.id}
					style={{ color: book.isAvailable ? "green" : "red" }} // Inline style
				>
					{book.title}
				</li>
			))}
		</ul>
	);
}

// ******************************************************************************************

/* BookList.css */
// .book {
//     font-size: 16px;
//     margin: 10px;
//     padding: 5px;
//   }

//   .book-available {
//     color: green;
//   }

//   .book-checkedout {
//     color: red;
//   }
// ******************************************************************************************

import React from "react";
import "./BookList.css"; // import the CSS file
const books3 = [
	{ id: 1, title: "Book 1", isAvailable: true }, // book available
	{ id: 2, title: "Book 2", isAvailable: false }, // book checked out
];
function BookList() {
	return (
		<ul>
			{books.map((book) => (
				<li
					key={book.id}
					className={`book ${
						book.isAvailable ? "book-available" : "book-checkedout"
					}`}
				>
					{" "}
					// apply CSS classes
					{book.title}
				</li>
			))}
		</ul>
	);
}
// export default BookList;

// ******************************************************************************************

import "./App.css";

const planets = [
	{ id: 1, name: "Mercury", isHabitable: false },
	{ id: 2, name: "Venus", isHabitable: false },
	{ id: 3, name: "Earth", isHabitable: true },
	{ id: 4, name: "Mars", isHabitable: true },
];
{
	/* Add class conditionally, if planet is habbitable, the class name should be 'habitable', otherwise 'not-habitable' */
}
export default function PlanetList() {
	return (
		<div>
			{planets.map(({ id, name, isHabitable }) => (
				<p
					key={id}
					className={`${isHabitable ? "habitable" : "not-habitable"}`}
				>
					{name} - {isHabitable ? "Habitable" : "Not Habitable"}
				</p>
			))}
		</div>
	);
}
// ******************************************************************************************

const planets1 = [
	{ name: "Mercury", isExplored: false },
	{ name: "Venus", isExplored: false },
	{ name: "Earth", isExplored: true },
	{ name: "Mars", isExplored: true },
];

function PlanetList() {
	return (
		<div>
			{planets1.map((planet) => (
				<p
					key={planet.name}
					style={{
						textDecoration: planet.isExplored ? "line-through" : "none",
					}}
				>
					{planet.name}
				</p>
			))}
		</div>
	);
}

//   export default PlanetList;

// ******************************************************************************************

const planetBooks = [
	{ name: "Mercury Mysteries", isAvailable: true },
	{ name: "Venus Ventures", isAvailable: false },
	{ name: "Mars Maps", isAvailable: true },
];

function Library() {
	return (
		<div>
			{planetBooks.map((books) => (
				<p key={books.name}>
					{books.name} - {books.isAvailable ? "Explore Now" : "Coming Soon"}
				</p>
			))}
		</div>
	);
}

//   export default Library
