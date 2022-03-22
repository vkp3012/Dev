/*...............String Serach................*/

//1).String indexOf():-

/*
    The indexOf() method returns the index of (the position of) the first occurrence of 
    a specified text in a string:

Example
*/
let str = "Please locate where 'locate' occurs!";
        /*  Please 012345 6-space
            locate 789101112 13-space
            where 1415161718 19-space 20-'
            locate 212223242526 27-' 28-space
            occurs 293031323334 35-!
        */ 
console.log("----------String indexOf()----------")       
console.log(str);
console.log(str.indexOf("locate"));

//2). String lastIndexOf():-

/*
    The lastIndexOf() method returns the index of (the position of) the last occurrence of 
    a specified text in a string:

Example
*/
console.log("----------String lastIndexOf()----------")
console.log(str.lastIndexOf("occurs"));

//note:- both indexOf() and lastIndexOf() return -1 if the text is not found.

console.log("----------String Not Found----------")
console.log(str.indexOf("Joun"));

//Both methods accept a second parameter as the starting position for the search
console.log("----------String 2nd Parameter----------")
console.log(str.indexOf("locate",15));

//The lastIndexOf() methods searches backwards (from the end to the beginning), 
//meaning: if the second parameter is 15, the search starts at position 15, and searches to the beginning of the string.
console.log(str.lastIndexOf("locate",15));

//3).String search():-

/*
    The search() method searches a string for a specified value and returns the position of the match.
*/
//Example:-
console.log("----------String Serach----------")
console.log(str.search("locate"));

/*
    Did You Notice?
    The two methods, indexOf() and search(), are equal?

    They accept the same arguments (parameters), and return the same value?

    The two methods are NOT equal. These are the differences:

    1.The search() method cannot take a second start position argument.
    2.The indexOf() method cannot take powerful search values (regular expressions).
*/
//4). String match():-

/*
    The match() method searches a string for a match against a regular expression, 
    and returns the matches, as an Array object.

Example 1
Search a string for "ain":
*/
console.log("----------String match()----------")
let text = "The rain in SPAIN stays mainly in the plain";
console.log(text.match(/ain/g));

//Perform a global, case-insensitive search for "ain":
console.log(text.match(/ain/gi))

//5).String includes():-
//The includes() method returns true if a string contains a specified value.

//Example
console.log("----------String includes()----------")
let text1 = "Hello world, welcome to the universe.";
console.log(text1.includes("world"));
console.log(text1.includes("world",12));

//6).String startsWith()
//The startsWith() method returns true if a string begins with a specified value, otherwise false:

//Example
console.log("----------String startsWith()----------")
let text2 = "Hello world, welcome to the universe.";

console.log(text2.startsWith("Hello"));
console.log(text2.startsWith("Hello",5));

//7).String endWith()
//The endsWith() method returns true if a string ends with a specified value, otherwise false:

//Example
//Check if a string ends with "Doe":
console.log("----------String endsWith()----------")
let text3 = "John Doe";
console.log(text3.endsWith("Doe"));