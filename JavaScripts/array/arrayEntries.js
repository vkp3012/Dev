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