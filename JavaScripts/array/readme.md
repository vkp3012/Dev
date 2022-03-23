# Array

1.Arrays is collection of elements

    Defition:- An array is a special variable, which can hold more than one value.

2.Why Using an Array?

    If you have a list of items (a list of car names, for example), storing the cars in single variables could look like this:

    let car1 = "Saab";
    let car2 = "Volvo";
    let car3 = "BMW";
    
    However, what if you want to loop through the cars and find a specific one? And what if you had not 3 cars, but 300?

    An array can hold many values under a single name, and you can access the values by referring to an index number.



    Creating an Array
    Using an array literal is the easiest way to create a JavaScript Array.

    Syntax:

    const array_name = [item1, item2, ...];

# Nest one Array within Another Array

    1.This is also called a multi-dimensional array.
    2.Nest one Array within Another Array
    3.You can also nest arrays within other arrays, like below:

    Example:-
    const teams = [["Bulls", 23], ["White Sox", 45]];
    console.log(teams);

# Modify Array Data With Indexes

     Unlike strings, the entries of arrays are mutable and can be changed freely, even if the array was declared with const.

    Example
    const ourArray = [50, 40, 30];
    console.log(ourArray);
    
    // Replacing elements in Arrays....
    ourArray[0] = 15;
    console.log(ourArray);

    // ourArray now has the value [15, 40, 30].

/*
    Note: There shouldn't be any spaces between the array name and the square brackets, like array [0].
    Although JavaScript is able to process this correctly, this may confuse other programmers reading your code.
*/

# Access Array Data with Indexes

    1.Array indexes are written in the same bracket notation that strings use, except that instead of specifying a character, they are specifying an entry in the array. 
    2. Like strings, arrays use zero-based indexing, so the first element in an array has an index of 0.

    Example:- 
            const array = [50, 60, 70];
            const data = array[1];
            console.log(data);