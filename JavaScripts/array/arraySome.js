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

