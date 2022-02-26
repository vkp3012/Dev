/*................ Escaping Literal Quotes in Strings...................*/
/*
     When you are defining a string you must start and end with a single or double quote. 
     What happens when you need a literal quote: " or ' inside of your string?

    In JavaScript, you can escape a quote from considering it as an end of string quote by 
    placing a backslash (\) in front of the quote.
*/
const sampleStr = "Alan said, \"Peter is learning JavaScript\".";

/*
    This signals to JavaScript that the following quote is not the end of the string, 
    but should instead appear inside the string. So if you were to print this to the console, you would get:

    Output:-Alan said, "Peter is learning JavaScript".
    string is a sequence of characters
*/

/*...................... Quoting Strings with Single Quotes.......................*/
/*
    String values in JavaScript may be written with single or double quotes, 
    as long as you start and end with the same type of quote.

    Unlike some other programming languages, single and double quotes work the same in JavaScript.
*/
const doubleQuoteStr = "This is a string"; 
const singleQuoteStr = 'This is also a string';

/*
    The reason why you might want to use one type of quote over the other is if you want to use both in a string.
    This might happen if you want to save a conversation in a string and have the conversation in quotes.
    Another use for it would be saving an <a> tag with various attributes in quotes, all within a string.
*/
const conversation = 'Finn exclaims to Jake, "Algebraic!"';

/* 
    However, this becomes a problem if you need to use the outermost quotes within it. 
    Remember, a string has the same kind of quote at the beginning and end.
    But if you have that same quote somewhere in the middle, the string will stop early and throw an error.
*/

const goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"'; 
//const badStr = 'Finn responds, "Let's go!"';

// Here badStr will throw an error.
/*
    In the goodStr above, you can use both quotes safely by using the backslash \ as an escape character.

    Note: The backslash \ should not be confused with the forward slash /. They do not do the same thing.

    Change the provided string to a string with single quotes at the beginning and end and no escape characters.

    Right now, the <a> tag in the string uses double quotes everywhere. 
    You will need to change the outer quotes to single quotes so you can remove the escape characters.
*/

/*...........................Escape Sequences in Strings....................*/
/*
    Quotes are not the only characters that can be escaped inside a string. 
    There are two reasons to use escaping characters:

    1.To allow you to use characters you may not otherwise be able to type out, such as a carriage return.
    2.To allow you to represent multiple quotes in a string without JavaScript misinterpreting what you mean.


        Code	Output
        \'	single quote
        \"	double quote
        \\	backslash
        \n	newline
        \r	carriage return
        \t	tab
        \b	word boundary
        \f	form feed

    Note:- The backslash itself must be escaped in order to display as a backslash.

    Assign the following three lines of text into the single variable myStr using escape sequences.

        FirstLine
            \SecondLine
        ThirdLine

    You will need to use escape sequences to insert special characters correctly. 
    You will also need to follow the spacing as it looks above, with no spaces between escape sequences or words.

    Note: The indentation for SecondLine is achieved with the tab escape character, not spaces.
*/

/*........................ Concatenating Strings with Plus Operator.....................*/
/*
    In JavaScript, when the + operator is used with a String value, it is called the concatenation operator.
     You can build a new string out of other strings by concatenating them together.

    Example

    'My name is Alan,' + ' I concatenate.'
    Note: Watch out for spaces. Concatenation does not add spaces between concatenated strings, 
    so you'll need to add them yourself.

    Example:

    const ourStr = "I come first. " + "I come second.";
    The string I come first. I come second. would be displayed in the console.

    Build myStr from the strings This is the start. and This is the end. 
    using the + operator. Be sure to include a space between the two strings.

*/

/*..................Concatenating Strings with the Plus Equals Operator.......................*/
/*
    We can also use the += operator to concatenate a string onto the end of an existing string variable. 
    This can be very helpful to break a long string over several lines.

    Note: Watch out for spaces. Concatenation does not add spaces between concatenated strings, 
    so you'll need to add them yourself.

Example:
*/

let ourStr = "I come first. ";
ourStr += "I come second.";
/*
    ourStr now has a value of the string I come first. I come second..

    Build myStr over several lines by concatenating these two strings: 
    This is the first sentence. and This is the second sentence. 
    using the += operator. Use the += operator similar to how it is shown in 
    the example and be sure to include a space between the two strings. 
    Start by assigning the first string to myStr, then add on the second string.
*/

/*..............................Constructing Strings with Variables..............*/
/*
    Sometimes you will need to build a string, Mad Libs style.
    By using the concatenation operator (+), you can insert one or more variables into a string you're building.

Example:
*/

const ourName = "freeCodeCamp";
const ourStr = "Hello, our name is " + ourName + ", how are you?";

// ourStr would have a value of the string Hello, our name is freeCodeCamp, how are you?.

/*
    Set myName to a string equal to your name and build myStr with myName between the strings
    My name is and and I am well!
*/

/*........................Appending Variables to Strings...............................*/
/*
    Just as we can build a string over multiple lines out of string literals, 
    we can also append variables to a string using the plus equals (+=) operator.

    Example:
*/

const anAdjective = "awesome!";
let ourStr = "freeCodeCamp is ";
ourStr += anAdjective;
// ourStr would have the value freeCodeCamp is awesome!.

// Set someAdjective to a string of at least 3 characters and append it to myStr using the += operator.


/*..................Find the Length of a String.....................*/
/*
    You can find the length of a String value by writing .length after the string variable or string literal.
*/
console.log("Alan Peter".length);

/*
    The value 10 would be displayed in the console.

    For example, if we created a variable const firstName = "Ada", we could find out how long 
    the string Ada is by using the firstName.length property.

    Use the .length property to count the number of characters in the lastName variable and 
    assign it to lastNameLength.
*/
//Example:-
// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;

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

const firstName = "Ada";
const secondLetterOfFirstName = firstName[1];
// secondLetterOfFirstName would have a value of the string d.

/*........................Use Bracket Notation to Find the Last Character in a String.......................*/
/*
    In order to get the last letter of a string, you can subtract one from the string's length.

    For example, if const firstName = "Ada", 
    you can get the value of the last letter of the string by using firstName[firstName.length - 1].
*/
// Example:

const firstName = "Ada";
const lastLetter = firstName[firstName.length - 1];
// lastLetter would have a value of the string a.

/*..................Use bracket notation to find the last character in the lastName variable...........*/

/*
    Hint: Try looking at the example above if you get stuck.

    Use Bracket Notation to Find the Nth-to-Last Character in a String
    You can use the same principle we just used to retrieve the last character in a string to retrieve the Nth-to-last character.

// For example, you can get the value of the third-to-last letter of the const firstName = "Augusta" string by using firstName[firstName.length - 3]

// Example:

// const firstName = "Augusta";
// const thirdToLastLetter = firstName[firstName.length - 3];
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

// string methods 

// 1. Extraction method

//slice method 
// slice(start, end) -> start index is inclusive and end index is exclusive 
                       //(start,end)
 var slicedStr = str.slice(6,15); //start index se shuru hoga aur ending index se ek pehle index tak string kategi
console.log(slicedStr);
//console.log(str); //original source of information is not changed 

var slicedStr = str.slice(6); //start se leke pori end tak string kategi
console.log(slicedStr);
                        //(2,str.length+(end))-> (2,15+(-4)) -> (2,15-4) -> (2,11)
var slicedStr = str.slice(2,-4); //start se leke peeche ke end times jane chod do 
console.log(slicedStr);

//substring method 

// substr(start, length); start index se shuru hoga aur aage ke kitne character capture krne h 

let ans = str.substr(2, 6);
console.log(ans);
console.log(str);

//replacing 
str = "YOLO";
console.log(str);

//to lower and uppercase 
console.log(str.toLowerCase()); //yolo
str = "fomo"
console.log(str.toUpperCase()); //FOMO
console.log(str); //information is intact and has not been tampered with 

// concatenation method-> 2 combine 2 strings and make them one string

let firstStr = "Believe in ";
let secondStr = "yourself";

let concatenatedStr = firstStr + secondStr;
console.log(concatenatedStr);

//concat method
let concatStr = firstStr.concat(secondStr, " and me");
console.log(concatStr);

// trim method -> removes all the whitespaces of starting and ending of a string 

let trimStr = "                                     Hello       how are you                 ";
console.log(trimStr);
console.log(trimStr.length);

console.log(trimStr.trim());
console.log(trimStr.trim().length);


// 2, 10, 13, 14, 16, 26 27, 28, 29, 32, 52, 61, 67,69, 82, 
//     functionWithArgs
// global scope and functions
//     Escaping literal quotes
//     Modify array with indexes
//     Find the length of string
//     word blanks
var ans13 = 1 +"5";
console.log(ans13);
//

console.log("ten"*3)