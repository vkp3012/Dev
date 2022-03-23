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
