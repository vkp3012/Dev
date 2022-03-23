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
// You can also nest arrays within other arrays, like below:
console.log("-----Nest one Array within Another Array-------");
const teams = [["Bulls", 23], ["White Sox", 45]];
console.log(teams);
//This is also called a multi-dimensional array.

// Nest one Array within Another Array
// You can also nest arrays within other arrays, like below:

// const teams = [["Bulls", 23], ["White Sox", 45]];
// This is also called a multi-dimensional array.


/*.................Modify Array Data With Indexes..................*/
/*
     Unlike strings, the entries of arrays are mutable and can be changed freely, 
     even if the array was declared with const.
*/

// Example
console.log("-----Modify Array Data With Indexes-------");
const ourArray = [50, 40, 30];
ourArray[0] = 15;
console.log(ourArray);
// ourArray now has the value [15, 40, 30].

/*
    Note: There shouldn't be any spaces between the array name and the square brackets, like array [0].
    Although JavaScript is able to process this correctly, this may confuse other programmers reading your code.
*/

// Replacing elements in Arrays....
cars[0] = "TATA";
//console.log(cars);





/*.................Adding elements in arrays.......................*/
console.log("-----Adding element in Array-------");
cars[7] = "Honda";
//console.log(cars);
//--------------------------------------------------------

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


/*................................Sorting an Array...............................*/
//The sort() method sorts an array alphabetically:

//Example
console.log("----------------Sorting an Array---------------------");
const fruits13 = ["Banana", "Orange", "Apple", "Mango"];
fruits13.sort();
console.log(fruits13);
//-----------------------------------------------------------------------

/*..................Reversing an Array..........................*/
//The reverse() method reverses the elements in an array.

// You can use it to sort an array in descending order:

// Example
console.log("------------------Reversing an Array----------------");
const fruits14 = ["Banana", "Orange", "Apple", "Mango"];
fruits14.sort();
fruits14.reverse();
console.log(fruits14);

//----------------------------------------------------------------
/*.....................Numeric Sort..................................*/
// By default, the sort() function sorts values as strings.
// This works well for strings ("Apple" comes before "Banana").
// However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
// Because of this, the sort() method will produce incorrect result when sorting numbers.
// You can fix this by providing a compare function:

// Example
console.log("---------------Numeric Sort-------------------");
const points12 = [40, 100, 1, 5, 25, 10];
points12.sort(function(a, b){   
        return a - b
    });
console.log(points12)

const points13 = [40, 100, 1, 5, 25, 10];
points13.sort(function(a, b){   
        return b - a;
    });
console.log(points13);
// Explain Example..

/*...................The Compare Function.........................*/
// The purpose of the compare function is to define an alternative sort order.
// The compare function should return a negative, zero, or positive value, depending on the arguments:

// function(a, b){return a - b}

// When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

// If the result is negative a is sorted before b.
// If the result is positive b is sorted before a.
// If the result is 0 no changes are done with the sort order of the two values.

// Example:
// The compare function compares all the values in the array, two values at a time (a, b).
// When comparing 40 and 100, the sort() method calls the compare function(40, 100).
// The function calculates 40 - 100 (a - b), and since the result is negative (-60),  the sort function will sort 40 as a value lower than 100.
//------------------------------------------------------------------------------------------------

/*.........................Sorting an Array in Random Order...........................*/
//Example
console.log("-----------------Sorting an Array in Random Order-------------------------");
const points14 = [40, 100, 1, 5, 25, 10];
points14.sort(function(a, b){return 0.5 - Math.random()});
console.log(points14);

//------------------------------------------------------------------------------------------------

/*.......................The Fisher Yates Method......................*/
// The above example, array.sort(), is not accurate, it will favor some numbers over the others.

// The most popular correct method, is called the Fisher Yates shuffle, and was introduced in data science as early as 1938!

// In JavaScript the method can be translated to this:

// Example
console.log("------------The Fisher Yates Method----------------------------");
const points15 = [40, 100, 1, 5, 25, 10];

for (let i = points15.length -1; i > 0; i--) {
  let j = Math.floor(Math.random() * i)
  let k = points15[i]
  points15[i] = points15[j]
  points15[j] = k
}

console.log(points15);
console.log("-------------------------------");

//Find the Highest (or Lowest) Array Value
const points16 = [40, 100, 1, 5, 25, 10];
points16.sort(function(a, b){   
        return a - b
    });
console.log("The Lowest value is " + points16[0]);
console.log("--------------------------------------");

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