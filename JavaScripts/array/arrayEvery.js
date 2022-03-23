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

