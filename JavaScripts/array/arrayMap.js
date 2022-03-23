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
