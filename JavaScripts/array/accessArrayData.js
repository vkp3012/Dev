/*...................Access Array Data with Indexes.......................*/
/*
    We can access the data inside arrays using indexes.

    Array indexes are written in the same bracket notation that strings use, 
    except that instead of specifying a character, they are specifying an entry in the array. 
    Like strings, arrays use zero-based indexing, so the first element in an array has an index of 0.


Example
*/
console.log("-----Access Array Data with Indexes-------");
const array = [50, 60, 70];
array[0];
const data = array[1];
console.log(data);


/*
    array[0] is now 50, and data has the value 60.

    Note: There shouldn't be any spaces between the array name and the square brackets, 
    like array [0]. Although JavaScript is able to process this correctly, 
    this may confuse other programmers reading your code.

*/

//Accessing the elements of of an Arrays
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
//--------------------------------------------------------

/*......................Access Multi-Dimensional Arrays With Indexes........................*/
/*
    One way to think of a multi-dimensional array, is as an array of arrays. 
    When you use brackets to access your array, the first set of brackets refers to the entries in 
    the outer-most (the first level) array, and each additional pair of brackets refers to 
    the next level of entries inside.

Example
*/
console.log("-----Access Multi-Dimensional Arrays With Indexes-------");
const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14]
];

arr[3];
arr[3][0];
arr[3][0][1];

//arr[3] is [[10, 11, 12], 13, 14], arr[3][0] is [10, 11, 12], and arr[3][0][1] is 11.
 
/*
    Note: There shouldn't be any spaces between the array name and the square brackets, 
    like array [0][0] and even this array [0] [0] is not allowed. Although JavaScript is able to process 
    this correctly, this may confuse other programmers reading your code.
*/