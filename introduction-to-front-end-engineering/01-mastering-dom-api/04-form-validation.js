// Getting to Know HTML Form Attributes
// HTML form input attributes give us the power to validate user input right in the browser,
// serving as our first line of defense in form validation. Let's dissect these attributes:

// required: This attribute ensures the user supplies input in a necessary field.
// type: Specifies the kind of data the user must input (e.g., text, email, number, etc.).
// minlength and maxlength: These constraints limit the length of user input.
// min and max: These set the range for numerical input.
// title: Displays advisory information about the element it belongs to, providing
// a hint to the user about how to fill out the input or what kind of data is expected.
// As an illustration, consider the following password input field, which enforces a password
// length minimum of 8 characters and a maximum of 20 characters while providing a tooltip when
// the user hovers over the input field. Note that with the required attribute, the password field cannot be empty:

<input
	type="password"
	name="password"
	required
	minlength="8"
	maxlength="20"
	title="Your password should be 8-20 characters long."
></input>;

<input
	type="number"
	name="quantity"
	min="1"
	max="10"
	title="Enter a number between 1 and 10"
></input>;

// ********************************************************************************************

{
	/* <form action="">
  Phone number (xxx-xxxx): <input type="text" name="phone" pattern="[0-9]{3}-[0-9]{4}"> 
  <input type="submit">
</form>

<!-- pattern="[0-9]{3}-[0-9]{4}" is regex that requires the form input to be "three numbers,
 a dash, and then four numbers". --> */
}

// ********************************************************************************************

// Basic Introduction to Regular Expressions (`regex`) And The `pattern` Attribute

{
	/* <form action="">
  Phone number (xxx-xxxx): <input type="text" name="phone" pattern="[0-9]{3}-[0-9]{4}"> 
  <!-- pattern="[0-9]{3}-[0-9]{4}" is regex that requires the form input to be "three numbers, a dash, and then four numbers". -->
  <input type="submit">
</form> */
}

// ********************************************************************************************

{
	/* <html>
<body>

<h2>JavaScript Form Validation</h2>

<form id="myForm">
  Username: <input type="text" name="username">
  <input type="submit">
</form>

<script>
document.getElementById("myForm").addEventListener("submit", function(event){
  let val = document.forms["myForm"]["username"].value;
  if (val.length < 3 || val.length > 15) {
    alert("Username must be 3-15 characters long");
    event.preventDefault();
  } 
});
</script>

</body>
</html> */
}
// ********************************************************************************************
// ********************************************************************************************
// ********************************************************************************************
// ********************************************************************************************
// ********************************************************************************************
// ********************************************************************************************
// ********************************************************************************************
// ********************************************************************************************
