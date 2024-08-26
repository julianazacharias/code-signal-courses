// const car = {
// 	wheels: 4,
// 	color: "red",
// };

// const fruits = ["apple", "orange", "grape"];

// let { wheels, color } = car;
// let [fruit1, fruit2, fruit3] = fruits;

// console.log(wheels); // prints 4
// console.log(fruit1); // prints 'apple'

// let type = 'Suv';
// let brand = 'Audi';

// let car = { type, brand }; // { type: 'Suv', brand: 'Audi' }

// let key = 'frontend';
// let value = 'React';

// let preference = { [key]: value }; // { frontend: 'React' }

// const house = {
// 	habitat: 'Elm Street',
// 	type: 'Detached',
// 	habitants: ['John', 'Anna', 'Tom']
// };

// house.habitants.push('Lisa');

// house = { ...house, habitants: [...house.habitants, 'Lisa'] };

// const arr = [1, 2, 3, 4, 5];
// const [a, b, ...others] = arr;

// function sumAll(...args) {
//     return args.reduce((sum, current) => sum + current);
// }

// console.log(sumAll(1, 2, 3, 4)); // Output: 10
// ***************************************************************************************

// JavaScript code demonstrating ES6 destructuring and the spread operator for object updates

// Vehicle object before the update
const vehicle = { type: "car", wheels: 4, color: "blue" };

// Destructuring the object to extract color and rest of the properties
const { color, ...rest } = vehicle;

// Creating a new object with the spread operator to include all original properties except color
const updatedVehicle = { ...rest, color: "red" };

document.getElementById(
	"vehicle-info"
).textContent = `Updated Car: ${updatedVehicle.color}, Wheels: ${updatedVehicle.wheels}`;

// ***************************************************************************************
