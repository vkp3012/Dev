/*..................... Use Bracket Notation to Find the First Character in a String..................*/
/*
    Bracket notation is a way to get a character at a specific index within a string.

    Most modern programming languages, like JavaScript, don't start counting at 1 like humans do. 
    They start at 0. This is referred to as Zero-based indexing.

    For example, the character at index 0 in the word Charles is C. So if 
    const firstName = "Charles", 
    you can get the value of the first letter of the string by using firstName[0].

// Example:
*/

const firstName = "Charles";
const firstLetter = firstName[0];
//firstLetter would have a value of the string C.

/*.................... Understand String Immutability............................*/
/*
    In JavaScript, String values are immutable, which means that they cannot be altered once created.

For example, the following code:
*/

let myStr = "Bob";
myStr[0] = "J";

/*
    cannot change the value of myStr to Job, because the contents of myStr cannot be altered.
     Note that this does not mean that myStr cannot be changed, just that the individual characters of 
     a string literal cannot be changed. The only way to change myStr would be to assign it with a new string, 
     like this:
*/

let myStr = "Bob";
myStr = "Job";

/*.....................Use Bracket Notation to Find the Nth Character in a String....................*/
/*
    You can also use bracket notation to get the character at other positions within a string.

    Remember that computers start counting at 0, so the first character is actually the zeroth character.
*/
// Example:

const firstName1 = "Ada";
const secondLetterOfFirstName = firstName1[1];
// secondLetterOfFirstName would have a value of the string d.

/*........................Use Bracket Notation to Find the Last Character in a String.......................*/
/*
    In order to get the last letter of a string, you can subtract one from the string's length.

    For example, if const firstName = "Ada", 
    you can get the value of the last letter of the string by using firstName[firstName.length - 1].
*/
// Example:

const firstName2 = "Ada";
const lastLetter = firstName[firstName2.length - 1];
// lastLetter would have a value of the string a.

/*..................Use bracket notation to find the last character in the lastName variable...........*/

/*
    Hint: Try looking at the example above if you get stuck.

    Use Bracket Notation to Find the Nth-to-Last Character in a String
    You can use the same principle we just used to retrieve the last character in a string to 
    retrieve the Nth-to-last character.
*/
/* For example, you can get the value of the third-to-last letter of the 
const firstName = "Augusta" string by using firstName[firstName.length - 3]
*/

// Example:

const firstName3 = "Augusta";
const thirdToLastLetter = firstName[firstName3.length - 3];
// thirdToLastLetter would have a value of the string s.

var str = "Hello pepcoders";
// H e l l o <space> p e p c o  d  e   r  s        
// 0,1,2,3,4,   5,   6,7,8,9,10,11,12,13,14 
console.log(str);

console.log(str[4]);
console.log(str[7]);

// strings in js are immutable
str[4] = "z";  
console.log(str);

console.log(str.length);

