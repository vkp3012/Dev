/* ................Array.......................... */
/* 
    1.Arrays is collection of elements

        Defition:- An array is a special variable, which can hold more than one value.

    2.Why Using an Array?
        If you have a list of items (a list of car names, for example), 
        storing the cars in single variables could look like this:

        let car1 = "Saab";
        let car2 = "Volvo";
        let car3 = "BMW";
        
        However, what if you want to loop through the cars and find a specific one? 
        And what if you had not 3 cars, but 300?

        An array can hold many values under a single name, 
        and you can access the values by referring to an index number.



        Creating an Array
        Using an array literal is the easiest way to create a JavaScript Array.

        Syntax:

        const array_name = [item1, item2, ...];
*/
console.log("-----Array 1 is create-------");
//Type 1:- Array 1 is create
//Define Arrays
let cars = ["BMW","AUDI","MG",1,2,3,true];
console.log(cars);

//----------------------------------------------------------------
console.log("-----Array 2 is create-------");
//Type 2 :- Array 2 create...........
//Spaces and line breaks are not important. A declaration can span multiple lines

const car = [
    "Saab",
    "Volvo",
    "BMW"
  ];
console.log(car)  

//---------------------------------------------------------------------------------
console.log("-----Array 3 is create-------");
//Type 3 :- Array 3 is create..........
//You can also create an array, and then provide the elements:
const cars1 = [];
cars1[0]= "Saab";
cars1[1]= "Volvo";
cars1[2]= "BMW";
console.log(cars1);


// In JS u can store different types of values of different types of arrays...........
// Using the JavaScript Keyword new
// The following example also creates an Array, and assigns values to it:

console.log("-----Array 4 is create-------");
//Type 4 :- Array 4 is create..........
//JavaScript new Array()
//JavaScript has a built in array constructor new Array().

//But you can safely use [] instead.

//These two different statements both create a new empty array named points:
// Example:- There is no need to use new Array().
const cars2 = new Array("Saab", "Volvo", "BMW");
//console.log(cars2)
console.table(cars2)

//const points = new Array();
//const points = [];
//These two different statements both create a new array containing 6 numbers:

const points = new Array(40, 100, 1, 5, 25, 10);
console.table(points)
//The new keyword can produce some unexpected results:

// Create an array with three elements:
//const points = new Array(40, 100, 1);
// Create an array with two elements:
//const points = new Array(40, 100);
// Create an array with one element ???
//const points = new Array(40);

//A Common Error
//const points = [40];
//is not the same as:

//const points = new Array(40);
// Create an array with one element:
//const points = [40];
// Create an array with 40 undefined elements:
//const points = new Array(40);  

//----------------------------------------------------------------
// For simplicity, readability and execution speed, use the array literal method.
//--------------------------------------------------------

/*...................Nest one Array within Another Array.................*/
// 1.This is also called a multi-dimensional array.
//2.Nest one Array within Another Array
//3.You can also nest arrays within other arrays, like below:
console.log("-----Nest one Array within Another Array-------");
const teams = [["Bulls", 23], ["White Sox", 45]];
console.log(teams);

/*.................Adding elements in arrays.......................*/
console.log("-----Adding element in Array-------");
cars[7] = "Honda";
//console.log(cars);
//--------------------------------------------------------

/*.................2D Arrays...........................*/
console.log("----------------2D Arrays-------------------");
let arrays2d = [
    [1,2,3],
    [4, ,6],
    [7,8,9]
]



//console.log(arrays2d);
console.table(arrays2d);
console.log(arrays2d[1].length);
console.log(arrays2d[1][1]);