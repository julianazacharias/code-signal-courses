// Understanding the DOM Tree Structure

//  <!DOCTYPE html>
//  <html>
//  <head>
//      <title>Page Title</title>
//  </head>
//  <body>
//      <div id="parent">
//          <p>Paragraph 1</p>
//          <p id="middle">Paragraph 2</p>
//          <p>Paragraph 3</p>
//      </div>
//  </body>
//  </html>

//    document
//    |
//    html
//    /     \
//    head    body
//    /         \
//    title        div
//        / | \
//       p  p  p

let parent = document.getElementById("parent");

console.log(parent.firstChild); // Logs "Paragraph 1" node

let middle = document.getElementById("middle");

console.log(middle.parentNode); // Logs the parent "div" node
console.log(middle.previousSibling); // Logs "Paragraph 1" node
console.log(middle.nextSibling); // Logs "Paragraph 3" node

//*************************************************************************************

// <!DOCTYPE html>
// <html>
// <body>
//     <h2 id="title" class="header">Hello World!</h2>
//     <p class="paragraph">This is a paragraph.</p>
//     <p class="paragraph">This is another paragraph.</p>
// </body>
// </html>

console.log(document.getElementById("title")); // Logs <h2> element with id="title"
console.log(document.getElementsByTagName("p")); // Logs all <p> elements
console.log(document.getElementsByClassName("paragraph")); // Logs all elements with class="paragraph"
//*************************************************************************************

// <!DOCTYPE html>
// <html>
// <body>
//     <div id="parent">
//         <p class="child">Child 1</p>
//         <p class="child">Child 2</p>
//     </div>
// </body>
// </html>

console.log(document.querySelector("#parent .child")); // Logs the first <p> element with class="child" inside the element with id="parent"
console.log(document.querySelectorAll("#parent .child")); // Logs all <p> elements with class="child" inside the element with id="parent"
console.log(document.querySelectorAll("p")); // Logs all <p> elements

//*************************************************************************************

// Manipulating Elements in the DOM

// <!DOCTYPE html>
// <html>
// <body>
//     <div id="parent">
//         <p id="firstP">Hello, World!</p>
//     </div>
// </body>
// </html>

/*
<!DOCTYPE html>
<html>
<body>
    <div id="parent">
        <p id="firstP">Hello, World!</p>
    </div>

    <script>
    // Creating a new paragraph element. Note that it's not in the DOM yet, so we won't see it in the UI yet
    var newP = document.createElement("p");
    var text = document.createTextNode("This is a new paragraph.");
    newP.appendChild(text); // New paragraph now contains the text. Still not visible in the UI

    // Accessing the parent div with id="parent" and the first paragraph with id="firstP"
    var parent = document.getElementById("parent");
    var firstP = document.getElementById("firstP");

    // Append the new paragraph to the DOM. Now the parent has two children: 'firstP' and 'newP'
    parent.appendChild(newP);

    // Remove the first paragraph. Now the parent has only one child: 'newP'
    parent.removeChild(firstP);

    // Create another paragraph, 'anotherP', and replace 'newP' with 'anotherP'. Now the parent has only one child: 'anotherP'
    var anotherP = document.createElement("p");
    text = document.createTextNode("This is another paragraph.");
    anotherP.appendChild(text);
    parent.replaceChild(anotherP, newP);
    </script>
</body>
</html>

*/

// This set of operations demonstrates the ability to create, add, remove, and replace elements in a web page.
// With these skills, you now have control over the DOM! In the next section, we'll reinforce these skills with practical exercises.
//*************************************************************************************

// Adding Class and ID Attributes with JavaScript

// <!DOCTYPE html>
// <html>
// <body>
//     <p id="firstP">Hello, World!</p>
//     <script>
//     var firstP = document.getElementById("firstP");

//     // Assigning a class
//     firstP.className = "highlight";

//     // Assigning an ID
//     firstP.id = "para1";

//     console.log(firstP.className); // Logs "highlight"
//     console.log(firstP.id); // Logs "para1"
//     </script>
// </body>
// </html>

//*************************************************************************************
//*************************************************************************************
//*************************************************************************************
//*************************************************************************************
//*************************************************************************************
//*************************************************************************************
//*************************************************************************************
//*************************************************************************************
