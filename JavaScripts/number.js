/*.........................Number.....................................*/
let num = 10;
console.log(num);

//double or float
let float = 2.4;
console.log(float)
//--------------------------------------------------------

/*.................Add Two Numbers with JavaScript...................*/
/*
    Number is a data type in JavaScript which represents numeric data.

    Now let's try to add two numbers using JavaScript.

    JavaScript uses the + symbol as an addition operator when placed between two numbers.

Example:
*/

let myVar = 5 + 10;
console.log(myVar);
//myVar now has the value 15.

/*...........Subtract One Number from Another...............*/
/*
    We can also subtract one number from another.

    JavaScript uses the - symbol for subtraction.

Example
*/

let myVar1 = 12 - 6;
//myVar would have the value 6.

/*.................Multiply Two Numbers..................*/
/*
    We can also multiply one number by another.

    JavaScript uses the * symbol for multiplication of two numbers.

Example
*/

let myVar2 = 13 * 13;
//myVar would have the value 169.

/*............... Divide One Number by Another...............*/ 
/*
    We can also divide one number by another.

    JavaScript uses the / symbol for division.

Example
*/

const myVar = 16 / 2;
//myVar now has the value 8.

/*................Increment a Number.........................*/
/*
    You can easily increment or add one to a variable with the ++ operator.

    i++;
    is the equivalent of

    i = i + 1;
Note: The entire line becomes i++;, eliminating the need for the equal sign

*/
let myVar = 87;

// Only change code below this line
myVar++;

/*..................Decrement a Number....................*/
/*
    You can easily decrement or decrease a variable by one with the -- operator.

    i--;
    is the equivalent of

    i = i - 1;
    Note: The entire line becomes i--;, eliminating the need for the equal sign.

    Change the code to use the -- operator on myVar.
*/
let myVar = 11;

// Only change code below this line
myVar--;


/*.................Finding a Remainder.............................*/
/*
    The remainder operator % gives the remainder of the division of two numbers.

    Example

    5 % 2 = 1 because
    Math.floor(5 / 2) = 2 (Quotient)
    2 * 2 = 4
    5 - 4 = 1 (Remainder)


    Usage:-
    In mathematics, a number can be checked to be even or odd by checking the remainder of 
    the division of the number by 2.

    17 % 2 = 1 (17 is Odd)
    48 % 2 = 0 (48 is Even)

    Note: The remainder operator is sometimes incorrectly referred to as the modulus operator. 
    It is very similar to modulus, but does not work properly with negative numbers.
*/

let remainder = 11%3;

/*.................Compound Assignment....................*/

//1)Augmented Addition
/*
    In programming, it is common to use assignments to modify the contents of a variable. 
    Remember that everything to the right of the equals sign is evaluated first, so we can say:

    myVar = myVar + 5;
    to add 5 to myVar. Since this is such a common pattern, 
    there are operators which do both a mathematical operation and assignment in one step.

    One such operator is the += operator.
*/
//Example:-

let myVar4 = 1;
myVar4 += 5;
console.log(myVar4);

//6 would be displayed in the console.

//2).Augmented Subtraction
/*
    Like the += operator, -= subtracts a number from a variable.

    myVar = myVar - 5;
    will subtract 5 from myVar. This can be rewritten as:
*/
//Example:-
myVar4 -= 5;

//3).Augmented Multiplication
/*
    The *= operator multiplies a variable by a number.

    myVar = myVar * 5;
    will multiply myVar by 5. This can be rewritten as:
*/

myVar4 *= 5;

//4).Augmented Division
/*
    The /= operator divides a variable by another number.

    myVar = myVar / 5;
    Will divide myVar by 5. This can be rewritten as:
*/

myVar4 /= 5;
