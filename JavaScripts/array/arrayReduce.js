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

