/*.................Method of an Arrays.......................*/

//1).Converting Arrays to Strings
//The JavaScript method ...toString().. converts an array to a string of (comma separated) array values.

//Example
console.log("-------Converting Arrays to Strings---------- ");
const fruits9 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits9.toString())

//The join() method also joins all array elements into a string.
const fruits10 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits10.join("*"));
//------------------------------------------------------------------------------------------------

//2). POP Method:- This method removed the elements from the last of arrays....
console.log("----------Pop Method-----------");
const fruits11 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits11);
fruits11.pop();
console.log(fruits11);
//console.log("after pop an elements\n"+cars);
//--------------------------------------------------------

//2). Push Method:- This method a new elements at the end of the array....
console.log("--------------Push Method------------------");
const fruits22 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits22);
fruits22.push("Kiwi")
console.log(fruits22);
//console.log("after pushing an elements \n" + cars)
//--------------------------------------------------------

//3).Unshift Method:- This method add the elements from the starting of arrays....
console.log("--------------Unshift Method------------------");
const fruits17 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits17);
fruits17.unshift("Grapes");
console.log(fruits17);
//console.log(fruits9)
//--------------------------------

//4).Shift Method:- This method remove the elements from the 0th index of arrays...
console.log("--------------shift Method------------------");
const fruits18 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits18);
fruits18.shift();
console.log(fruits18);
//console.log(fruits9);
//--------------------------------------------------------

/*.....................Merging (Concatenating) Arrays.....................*/
//The concat() method creates a new array by merging (concatenating) existing arrays:

//Example (Merging Two Arrays)
console.log("--------------Merging Arrays------------------");
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
console.table(myChildren);

// The concat() method does not change the existing arrays. It always returns a new array.

// The concat() method can take any number of array arguments:

// Example (Merging Three Arrays)
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren1 = arr1.concat(arr2, arr3);
console.table(myChildren1);

//The concat() method can also take strings as arguments:

//Example (Merging an Array with Values)
const arr4 = ["Emil", "Tobias", "Linus"];
const myChildren3 = arr4.concat("Peter"); 
console.log(myChildren3);
//------------------------------------------------------------------------------------------------

/*...........................JavaScript Array splice().........................*/
//The splice() method can be used to add new items to an array:

//Example
console.log("--------------Array Splice()-----------------");
const fruits6 = ["Banana", "Orange", "Apple", "Mango"];
fruits6.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits6);

//The first parameter (2) defines the position where new elements should be added (spliced in).

//The second parameter (0) defines how many elements should be removed.

//The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

//The splice() method returns an array with the deleted items:

// Example
const fruit9 = ["Banana", "Orange", "Apple", "Mango"];
fruit9.splice(2, 2, "Lemon", "Kiwi");
console.log(fruit9);

//Using splice() to Remove Elements
//With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array:

//Example
const fru = ["Banana", "Orange", "Apple", "Mango"];
fru.splice(0, 1);
console.log(fru);
//Describe the example:-
//The first parameter (0) defines the position where new elements should be added (spliced in).
//The second parameter (1) defines how many elements should be removed.
//The rest of the parameters are omitted. No new elements will be added.
//------------------------------------------------------------------------------------------------

/*...................JavaScript Array slice().......................*/
//The slice() method slices out a piece of an array into a new array.
//This example slices out a part of an array starting from array element 1 ("Orange"):

//Example
console.log("----------------Array Slice()------------");
const frui = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = frui.slice(1);
console.log(citrus);
//------------------------------------------------------------------------------------------------
//Note
//The slice() method creates a new array.
//The slice() method does not remove any elements from the source array.
//------------------------------------------------------------------------------------------------

//The slice() method can take two arguments like slice(1, 3).

//The method then selects elements from the start argument, and up to (but not including) the end argument.

//Example
const fruits12 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus2 = fruits12.slice(1, 3);
console.log(citrus2);
//-----------------------------------------------------------------------