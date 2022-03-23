// JavaScript Array indexOf()
// The indexOf() method searches an array for an element value and returns its position.

// Note: The first item has position 0, the second item has position 1, and so on.

// Example
//Search an array for the item "Apple":
console.log("Search an array for the item Apple....")
const fruits1 = ["Appl", "Orange", "Apple", "Mango"];
let position1 = fruits1.indexOf("Apple") + 1;
console.log(position1);
// Syntax
// array.indexOf(item, start)



// startOptional. Where to start the search. Negative values will start at the given position counting from the end, and search to the end.
// Array.indexOf() returns -1 if the item is not found.

// If the item is present more than once, it returns the position of the first occurrence.
//------------------------------------------------------------------------------------------

// JavaScript Array lastIndexOf()
// Array.lastIndexOf() is the same as Array.indexOf(), but returns the position of the last occurrence of the specified element.

// Example
// Search an array for the item "Apple":
console.log("-----------------------------")
console.log("earch an array for the item Apple....")
const fruits2 = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits2.lastIndexOf("Apple") + 1;
console.log(position);


// Syntax
// array.lastIndexOf(item, start)
// item	Required. The item to search for
// start	Optional. Where to start the search. Negative values will start at the given position counting from the end, and search to the beginning
//----------------------------------------------------------------------------


