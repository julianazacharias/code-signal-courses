// Minimizing DOM Access
for (let i = 0; i < 10; i++) {
	document.getElementById("myPara").innerText +=
		" This is sentence number: " + i;
}

// A more efficient method might look like this:
var myPara = document.getElementById("myPara");
for (let i = 0; i < 10; i++) {
	myPara.innerText += " This is sentence number: " + i;
}

// In this case, we accessed the DOM only once to fetch the paragraph, stored it in a variable called myPara,
// and used this variable within our loop. Isn't that more efficient?

// **********************************************************************************************************

// Batch DOM Changes

// Just like an efficient chef gathers all the ingredients first before starting to cook to save time,
// we can make our DOM manipulations faster by batching changes. Batching means making all the changes at once,
// triggering only a single reflow.

// You might be wondering how we can batch DOM changes. The trick lies in using a DocumentFragment.

// A DocumentFragment is a minimal version of a Document object, and it doesn’t carry the entire baggage of
// a full-fledged HTML document. It is like a lightweight container for storing DOM nodes. The magic of
// DocumentFragment is that when we make changes to it, these changes do not cause reflow. It’s only when the
// DocumentFragment is appended back to the actual DOM that a reflow happens. The fragment is created
// using the document.createDocumentFragment method.

var fragment = document.createDocumentFragment(); // create a document fragment

for (let i = 1; i <= 5; i++) {
	var newElement = document.createElement("li"); // create a new li
	newElement.innerHTML = "Item " + i; // set the content
	fragment.appendChild(newElement); // append the li to the fragment
}

document.getElementById("myList").appendChild(fragment); // append the fragment to the ul
// **********************************************************************************************************

// Efficient Selectors

// Among various ways, getElementById(), getElementsByClassName(), getElementsByTagName() are the fastest,
// as they are directly mapped to the respective HTML attributes, whereas querySelector() and querySelectorAll()
//  are slower since they work with any CSS selector which is somewhat complex to match up.

var myDiv = document.getElementById("myDiv"); // Fast
var myDivSlow = document.querySelector("#myDiv"); // Slow

// As illustrated in the above snippets, getElementById() offers faster performance compared to querySelector().
// so it should be preferred wherever possible.

// Additionally, when you need to select a single element, try using getElementById() or querySelector()
// instead of getElementsByClassName(), getElementsByTagName(), or querySelectorAll(),
// since the later three might return more than one elements.

// **********************************************************************************************************

// Event Delegation

// Get the 'myTable' element
document.getElementById("myTable").addEventListener("click", function (event) {
	// Initialize the target to the clicked element
	var target = event.target;

	// As long as the target isn't the table itself
	while (target != this) {
		// Check if the target is a row ('tr')
		if (target.tagName == "tr") {
			// Change the background color of the row
			target.style.backgroundColor = "red";
			// Exit the function
			return;
		}
		// Move on to the next parent element
		target = target.parentNode;
	}
});
// **********************************************************************************************************

// Memory Optimization Techniques

var myButton = document.getElementById("myButton");

var clickHandler = function () {
	myButton.innerHTML = "Clicked";
	myButton.removeEventListener("click", clickHandler);
};

myButton.addEventListener("click", clickHandler);
// **********************************************************************************************************

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Library Bookshelf</title>
// </head>
// <body>
//     <div id="bookshelf">
//         <div class="book" id="book1">Book 1</div>
//         <div class="book" id="book2">Book 2</div>
//         <!-- More books can be added here -->
//     </div>

//     <button id="addBook">Add New Book</button>
//     <script src="solution.js"></script>
// </body>
// </html>

// This example features a minimal implementation with efficient DOM manipulation
// and event listener usage to add books to a bookshelf.
const bookshelf = document.getElementById("bookshelf");

document.getElementById("addBook").addEventListener("click", () => {
	const newBook = document.createElement("div");
	newBook.className = "book";
	newBook.textContent = "New Book";
	bookshelf.appendChild(newBook); // Efficiently updates just the new item
});
// **********************************************************************************************************

// Example to manage memory by removing the event listener after use.
const bookshelf2 = document.getElementById("bookshelf2");
const loadBooksButton = document.getElementById("loadBooks");

function addBook() {
	const book = document.createElement("div");
	book.textContent = `Book ${bookshelf2.children.length + 1}`;
	bookshelf2.appendChild(book); // Efficiently adding one book.
	// Memory management by removing the event listener after the first book is added.
	loadBooksButton.removeEventListener("click", addBook);
}

loadBooksButton.addEventListener("click", addBook);
// **********************************************************************************************************

// This script adds five new books to the list at once, minimizing DOM access and improving performance
const booksList = document.getElementById("booksList");
document.getElementById("loadMoreBooks").addEventListener("click", () => {
	const fragment = document.createDocumentFragment();
	for (let i = 1; i < 5; i++) {
		const newBook = document.createElement("li");
		newBook.innerHTML = "Book " + i;
		fragment.appendChild(newBook);
	}
	booksList.appendChild(fragment); // Append all at once to minimize reflows
});
// **********************************************************************************************************
// **********************************************************************************************************
// **********************************************************************************************************
// **********************************************************************************************************
