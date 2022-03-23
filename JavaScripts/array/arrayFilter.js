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