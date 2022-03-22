/*..................Nesting For Loops...................*/
/*
    If you have a multi-dimensional array, you can use the same logic as the prior waypoint to 
    loop through both the array and any sub-arrays. 
*/

const arr1 = [
    [1, 2], [3, 4], [5, 6]
  ];
  
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[i].length; j++) {
      console.log(arr1[i][j]);
    }
  }
  /*
      This outputs each sub-element in arr one at a time. Note that for the inner loop, 
      we are checking the .length of arr[i], since arr[i] is itself an array.
  
      Modify function multiplyAll so that it returns the product of all the numbers in the sub-arrays of arr.
  */
  
function multiplyAll(arr2) {
let product = 1;
// Only change code below this line
for (var i = 0; i < arr2.length; i++) {
    for (var j = 0; j < arr2[i].length; j++) {
    product = product * arr2[i][j];
    }
}
// Only change code above this line
return product;
}

let mu = multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
console.log(mu);
  