/*......................Properties of Array......................*/

/*...................Find Length...................*/
//the length property of an array return the length of an array.
console.log("-----Array length-------");
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.length;
console.log(fruits);
console.log(length);

//--------------------------------
//Accessing the first Array Element
//Example
console.log("-----First Array Element-------");
let firstElementOfArray = fruits[0];
console.log(firstElementOfArray);

//--------------------------------
//Accessing the Last Array Element
//Example
console.log("-----Last Array Element-------");
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
let lastElementOfArray = fruits[fruits.length - 1];
console.log(lastElementOfArray);

//Looping Array Elements
//One way to loop through an array, is using a for loop:

//Example
console.log("-----Looping Array-------");
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits2.length;
for (let i = 0; i < fLen; i++) {
    fr=fruits2[i];
    console.table(fr);
}
console.log(fr);
//--------------------------------------------------------

//New element can also be added to an array using the length property:

//Example
console.log("-----added to an array using the length property-------");
const fruits3 = ["Banana", "Orange", "Apple"];
fruits3[fruits3.length] = "Lemon";  // Adds "Lemon" to fruits
console.log(fruits3);
//WARNING ! :- Adding elements with high indexes can create undefined "holes" in an array

//Example
const fruits4 = ["Banana", "Orange", "Apple"];
fruits4[6] = "Lemon";  // Creates undefined "holes" in fruits
console.log(fruits4);
//--------------------------------------------------------

/*.............Associative Arrays............................*/
console.log("-------------Associative Arrays--------------------");
//Arrays with named indexes are called associative arrays (or hashes).
//JavaScript does not support arrays with named indexes.
//In JavaScript, arrays always use numbered indexes.  

//Example
const person4 = [];
person4[0] = "John";
person4[1] = "Doe";
person4[2] = 46;
person4.length;    // Will return 3
person4[0];        // Will return "John"

//WARNING !!:-If you use named indexes, JavaScript will redefine the array to an object.
//After that, some array methods and properties will produce incorrect results.

//Example:
const person5 = [];
person5["firstName"] = "John";
person5["lastName"] = "Doe";
person5["age"] = 46;
person5.length;     // Will return 0
person5[0];         // Will return undefined
console.log(person5);

//----------------------------------------------------------------

/*................The Difference Between Arrays and Objects.................*/
//In JavaScript, arrays use numbered indexes.  
//In JavaScript, objects use named indexes.
//Arrays are a special kind of objects, with numbered indexes.

//----------------------------------------------------------------

/*............When to Use Arrays. When to use Objects...............*/
//JavaScript does not support associative arrays.
//You should use objects when you want the element names to be strings (text).
//You should use arrays when you want the element names to be numbers.


/*.....................How to Recognize an Array...........................*/
//The problem is that the JavaScript operator typeof returns "object":
console.log("--------How to Recognize an Array-----------");
const fruits7 = ["Banana", "Orange", "Apple"];
let type = typeof fruits7;
console.log(type);
//The typeof operator returns object because a JavaScript array is an object.

//Solution 1:
//To solve this problem ECMAScript 5 (JavaScript 2009) defined a new method Array.isArray():
Array.isArray(fruits7);

//Solution 2:
//The instanceof operator returns true if an object is created by a given constructor:

const fruits8 = ["Banana", "Orange", "Apple"];
fruits8 instanceof Array;

//sort arrays
//// Sorts the array
cars.sort()
