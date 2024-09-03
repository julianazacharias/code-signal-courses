// Event Bubbling and stopPropagation

{
	/* <div id="parent">
    <button id="child">Click Me!</button>
</div>

<script>
// Assign event to parent
document.getElementById("parent").onclick = function() {
    alert('Div clicked!');
};
// Assign event to child
document.getElementById("child").onclick = function() {
    alert('Button clicked!');
};
</script> */
}

document.getElementById("child").onclick = function (event) {
	// Stop event from bubbling
	event.stopPropagation();
	alert("Button clicked!");
};

// *****************************************************************************************

// Event Delegation

{
	/* <ul id="parent-list">
    <li id="post1">Post 1</li>
    <li id="post2">Post 2</li>
    <li id="post3">Post 3</li>
</ul>

<script>
document.getElementById("parent-list").onclick = function(e) { 
    alert('Clicked on ' + e.target.id); 
};
</script> */
}

// *****************************************************************************************

//Creating and Dispatching Custom Events

//     <!-- Define a button in our HTML -->
//     <button id="myButton">Click Me!</button>

//     <script>
//     // Get our button element using its ID
//     let button = document.getElementById('myButton');

//     // Create a new custom event using the 'new CustomEvent' method
//     let newPressEvent = new CustomEvent('buttonPress', {
//         detail: {
//             message: 'Button was pressed',
//         }
//     });

//     // Listen for the custom event on our button
//     button.addEventListener('buttonPress', function (e) {
//         console.log(e.detail.message);
//     });

//     // Define button click behavior
//     button.onclick = function() {
//         button.dispatchEvent(newPressEvent);
//     };
//     </script>

// *****************************************************************************************
// *****************************************************************************************
// *****************************************************************************************
// *****************************************************************************************
// *****************************************************************************************
// *****************************************************************************************
