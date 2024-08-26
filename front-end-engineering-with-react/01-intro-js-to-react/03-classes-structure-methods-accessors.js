// ************************************************************************

class Dog {
	constructor(name) {
		this.name = name;
	}

	bark() {
		// The keyword 'this' represents the instance of the class
		return `${this.name} says woof!`;
	}
}

let myDog = new Dog("Spot");
// 'bark' method being used on 'myDog' instance of Dog class
console.log(myDog.bark()); // "Spot says woof!"

// ************************************************************************

class Dog {
	constructor(name) {
		this._name = name; // the underscore (_) is a common convention for private properties which will be discussed later
	}

	// Define a getter for the 'name' property
	get name() {
		return this._name;
	}

	// Define a setter for the 'name' property
	set name(value) {
		// Only update _name if value is not empty
		if (value.length > 0) {
			this._name = value;
		} else {
			console.log("Error: Name cannot be empty.");
		}
	}
}

let myDog2 = new Dog("Spot");
console.log(myDog2.name); // "Spot"
myDog2.name = ""; // Error: Name cannot be empty.
console.log(myDog2.name); // "Spot"

myDog2.name = "Buddy";
console.log(myDog2.name); // "Buddy"

// ************************************************************************

class Dog {
	constructor(name) {
		this._name = name;
	}
	// Getter for the dog's name
	get name() {
		return this._name;
	}
}

// Instantiate a new Dog object
const fluffy = new Dog("Fluffy");

// Display the dog's name in the webpage
document.getElementById(
	"displayDogName"
).textContent = `${fluffy.name} is a happy dog at our daycare!`;

// ************************************************************************

class Dog {
	constructor(name, age) {
		this._name = name;
		this._age = age;
	}

	showDetails() {
		document.getElementById(
			"dogInformation"
		).textContent = `${this._name} is ${this._age} years old.`;
	}
}

// Create a new Dog instance and show its details
const myPet = new Dog("Max", 3);
myPet.showDetails();

// ************************************************************************
