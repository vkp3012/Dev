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

# Access Array Data with Indexes

    1.Array indexes are written in the same bracket notation that strings use, except that instead of specifying a character, they are specifying an entry in the array. 
    2. Like strings, arrays use zero-based indexing, so the first element in an array has an index of 0.


Example:- 
        const array = [50, 60, 70];
        const data = array[1];
        console.log(data);