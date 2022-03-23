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
// const ourStr = "Hello, our name is " + ourName + ", how are you?";

// ourStr would have a value of the string Hello, our name is freeCodeCamp, how are you?.

/*
    Set myName to a string equal to your name and build myStr with myName between the strings
    My name is and and I am well!
*/