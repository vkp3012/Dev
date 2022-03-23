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
