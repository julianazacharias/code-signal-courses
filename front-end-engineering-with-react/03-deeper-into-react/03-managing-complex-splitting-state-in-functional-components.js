//Complex State

const [shoppingCart, setShoppingCart] = useState([
	{ name: "Apple", quantity: 3, price: 0.5 },
	{ name: "Orange", quantity: 2, price: 0.75 },
	// Additional items...
]);

// *****************************************************************************************
//React provides us with a potent tool, the useState() hook, for effectively managing complex states.
// For instance, to add an item to our cart, we use the setShoppingCart() function
// with the JavaScript spread operator ...:

// Adding a new item to our shopping cart
setShoppingCart([...shoppingCart, { name: "Banana", quantity: 1, price: 1 }]);

// *****************************************************************************************
// Sometimes, a complex state feels like a tangled knot, intimidating and overwhelming.
// In such situations, 'splitting' the state into smaller, manageable units might be beneficial.
// Such splitting results in more 'useState' calls but promotes independent states, facilitating state management.

// const [itemName, setItemName] = useState("Apple");
// const [itemQuantity, setItemQuantity] = useState(3);
// const [itemPrice, setItemPrice] = useState(0.5);

// *****************************************************************************************

const [itemName, setItemName] = useState("");
const [itemQuantity, setItemQuantity] = useState(1);
const [itemPrice, setItemPrice] = useState(1);

function addItem(event) {
	event.preventDefault();
	setShoppingCart([
		...shoppingCart,
		{ name: itemName, quantity: itemQuantity, price: itemPrice },
	]);
	setItemName("");
	setItemQuantity(1);
	setItemPrice(1);
}
// *****************************************************************************************

// *************************** Capturing Form Data in React ******************************

const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");

function handleFirstNameChange(event) {
	setFirstName(event.target.value);
}

function handleLastNameChange(event) {
	setLastName(event.target.value);
}

<form>
	<label>
		First Name:{firstName}
		<input type="text" value={firstName} onChange={handleFirstNameChange} />
	</label>
	<label>
		Last Name:{lastName}
		<input type="text" value={lastName} onChange={handleLastNameChange} />
	</label>
</form>;
// *****************************************************************************************

import { useState } from "react";

function GroceryForm() {
	const [itemCount, setItemCount] = useState(1);

	function addToCart() {
		setItemCount((prevItemCount) => prevItemCount + 1);
	}

	function removeFromCart() {
		setItemCount((prevItemCount) =>
			prevItemCount > 1 ? prevItemCount - 1 : 1
		);
	}

	return (
		<div>
			<p>Items in Cart: {itemCount}</p>
			<button onClick={addToCart}>Add More Of The Same Item</button>
			<button onClick={removeFromCart}>Remove Item</button>
		</div>
	);
}

// export default GroceryForm;
// *****************************************************************************************

import { useState } from "react";

function GroceryList() {
	const [item, setItem] = useState({ name: "Apple", quantity: 3, price: 0.5 });

	function updateQuantity(q) {
		setItem({ ...item, quantity: q, price: 5 });
	}

	return (
		<div>
			<p>
				{item.name} - Quantity: {item.quantity}
			</p>
			<p>
				{item.name} - Price: {item.price}
			</p>
			<button onClick={() => updateQuantity(6)}>Update Quantity</button>
		</div>
	);
}

// export default GroceryList;
// *****************************************************************************************

import { useState } from "react";

export default function GroceryList() {
	const [itemName, setItemName] = useState("Milk");
	const [itemQuantity, setItemQuantity] = useState(2);

	function updateQuantity(newQuantity) {
		setItemQuantity(newQuantity);
	}

	return (
		<div>
			<p>
				{itemName}: {itemQuantity} liter(s)
			</p>
			<button onClick={() => updateQuantity(5)}>Set 5 liters</button>
		</div>
	);
}
// *****************************************************************************************

import { useState } from "react";

function GroceryItemAdder() {
	const [itemName, setItemName] = useState("Milk");
	const [itemQuantity, setIiemQuantity] = useState(2);

	function handleItemQuantity() {
		setIiemQuantity((prev) => prev * 2);
	}

	return (
		<div>
			<section>
				<h1>
					Item: {itemName} - Quantity: {itemQuantity}
				</h1>
				<button onClick={handleItemQuantity}>Clica aqui</button>
			</section>
		</div>
	);
}

// export default GroceryItemAdder;
// *****************************************************************************************
// *****************************************************************************************
// *****************************************************************************************
