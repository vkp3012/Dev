//JavaScript Array forEach()
// The forEach() method calls a function (a callback function) once for each array element.

// Example
console.log("Array forEach() Function is used")
const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) {
    console.log(value);
}

console.log("------------------------------------");

//----------------------------------------------------------------

// JavaScript Array map()
// The map() method creates a new array by performing a function on each array element.

// The map() method does not execute the function for array elements without values.

// The map() method does not change the original array.

// This example multiplies each array value by 2:

// Example
console.log("Array map() Function is used\n")
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction1);

//console.log(numbers2);

function myFunction1(value, index, array) {
  console.log(value * 2);
}

//---------------------

console.log("-----------------------------------------------");
// JavaScript Array filter()
// The filter() method creates a new array with array elements that passes a test.

// This example creates a new array from elements with a value larger than 18:

// Example
console.log("Array Filter Method Uses...")
const numbers4 = [45, 4, 9, 16, 25];
const over18 = numbers4.filter(myFunction2);

function myFunction2(value, index, array) {
  console.log(value > 18);
  //return value >18;
}
//myFunction2();
//---------------------------------
console.log("-----------------------------")

// JavaScript Array reduce()
// The reduce() method runs a function on each array element to produce (reduce it to) a single value.

// The reduce() method works from left-to-right in the array. See also reduceRight().

// The reduce() method does not reduce the original array.

// This example finds the sum of all numbers in an array:

// Example
console.log("Array Reduce Method is Used...")
const numbers5 = [45, 4, 9, 16, 25];
let sum = numbers5.reduce(myFunction3);

function myFunction3(total, value, index, array) {
  console.log(total + value);
}

// Note that the function takes 4 arguments:

// The total (the initial value / previously returned value)
// The item value
// The item index
// The array itself

//----------------------------------------------------------------
console.log("-----------------------------");

// JavaScript Array reduceRight()
// The reduceRight() method runs a function on each array element to produce (reduce it to) a single value.

// The reduceRight() works from right-to-left in the array. See also reduce().

// The reduceRight() method does not reduce the original array.

// This example finds the sum of all numbers in an array:

// Example
const numbers6 = [45, 4, 9, 16, 25];
let sum1 = numbers6.reduceRight(myFunction5);

function myFunction5(total, value, index, array) {
  console.log(total + value);
}

//----------------------------------------------------------------
console.log("-----------------------------");

// JavaScript Array every()
// The every() method check if all array values pass a test.

// This example check if all array values are larger than 18:

// Example
const numbers7 = [45, 4, 9, 16, 25];
let allOver18 = numbers7.every(myFunction6);

function myFunction6(value, index, array) {
  console.log(value > 18);
}

//--------------------------------
console.log("-----------------------------");

// JavaScript Array some()
// The some() method check if some array values pass a test.

// This example check if some array values are larger than 18:

// Example
const numbers11 = [45, 4, 9, 16, 25];
let someOver18 = numbers11.some(myFunction11);

function myFunction11(value, index, array) {
  return value > 18;
}

//----------------------------------------------------------------
console.log("-----------------------------");

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


// JavaScript Array find()
// The find() method returns the value of the first array element that passes a test function.

// This example finds (returns the value of) the first element that is larger than 18:

// Example
const numbers8 = [4, 9, 16, 25, 29];
let first5 = numbers8.find(myFunction9);

function myFunction9(value, index, array) {
  return value > 18;
}
// Note that the function takes 3 arguments:

// The item value
// The item index
// The array itself

//----------------------------------------------

// JavaScript Array findIndex()
// The findIndex() method returns the index of the first array element that passes a test function.

// This example finds the index of the first element that is larger than 18:

// Example
const numbers12 = [4, 9, 16, 25, 29];
let first = numbers12.findIndex(myFunction11);

function myFunction11(value, index, array) {
  return value > 18;
}

//----------------------------------------------------------------

// JavaScript Array.from()
// The Array.from() method returns an Array object from any object with a length property or any iterable object.

// Example
// Create an Array from a String:

const myArr4 = Array.from("ABCDEFG");
console.log(myArr4)

//----------


// JavaScript Array Keys()
// The Array.keys() method returns an Array Iterator object with the keys of an array.

// Example
// Create an Array Iterator object, containing the keys of the array:

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys2 = fruits.keys();

for (let x of keys2) {
   console.log(x);
}

//------------------------------------------------------------------------------

// Array entries()
// Example
// Create an Array Iterator, and then iterate over the key/value pairs:

const fruits15 = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits15.entries();

for (let y of f) {
  console.log(y);
}
// The entries() method returns an Array Iterator object with key/value pairs:

// [0, "Banana"]
// [1, "Orange"]
// [2, "Apple"]
// [3, "Mango"]

// The entries() method does not change the original array.

// JavaScript Array includes()
// ECMAScript 2016 introduced Array.includes() to arrays. This allows us to check if an element is present in an array (including NaN, unlike indexOf).

// Example
const fruits16 = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits16.includes("Mango")); // is true

// Syntax
// array.includes(search-item)
// Array.includes() allows to check for NaN values. Unlike Array.indexOf().

// Array.includes() is not supported in Internet Explorer and Edge 12/13.