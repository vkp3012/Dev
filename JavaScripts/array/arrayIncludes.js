// JavaScript Array includes()
// ECMAScript 2016 introduced Array.includes() to arrays. This allows us to check if an element is present in an array (including NaN, unlike indexOf).

// Example
const fruits16 = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits16.includes("Mango")); // is true

// Syntax
// array.includes(search-item)
// Array.includes() allows to check for NaN values. Unlike Array.indexOf().

// Array.includes() is not supported in Internet Explorer and Edge 12/13.