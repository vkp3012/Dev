/*
    A temporal dead zone (TDZ) is the area of a block where a variable is inaccessible until the moment the computer completely initializes it with a value.

        2. Initialization occurs when you assign an initial value to a variable.

Suppose you attempt to access a variable before its complete initialization. 
In such a case, JavaScript will throw a ReferenceError.

*/

//console.log("varName",varName); -> ❌
//ReferenceError: Cannot access 'varName' before initialization
let varName

/*------------------------------- 📝 Question 1 📝---------------------------------*/
// {
//     // bestFood’s TDZ starts here (at the beginning of this block’s local scope)
//     // bestFood’s TDZ continues here
//     // bestFood’s TDZ continues here
//     // bestFood’s TDZ continues here
//     console.log(bestFood); // returns ReferenceError because bestFood’s TDZ continues here
//     // bestFood’s TDZ continues here
//     // bestFood’s TDZ continues here
//     let bestFood = "Vegetable Fried Rice"; // bestFood’s TDZ ends here
//     // bestFood’s TDZ does not exist here
//     // bestFood’s TDZ does not exist here
//     // bestFood’s TDZ does not exist here
// }

// In other words, we invoked bestFood within the temporal dead zone.


/*-------------------------------📝 Question 2 📝---------------------------------*/

{
    // TDZ starts here (at the beginning of this block’s local scope)
    // bestFood’s TDZ continues here
    // bestFood’s TDZ continues here
    // bestFood’s TDZ continues here
    // bestFood’s TDZ continues here
    // bestFood’s TDZ continues here
    // bestFood’s TDZ continues here
    let bestFood = "Vegetable Fried Rice"; // bestFood’s TDZ ends here
    console.log(bestFood); // returns "Vegetable Fried Rice" because bestFood’s TDZ does not exist here
    // bestFood’s TDZ does not exist here
    // bestFood’s TDZ does not exist here
}



/*-------------------------------📝 Question 3📝 ---------------------------------*/
{
    // TDZ starts here (at the beginning of this block’s local scope)
    // bestFood’s TDZ continues here
    // bestFood’s TDZ continues here
    // bestFood’s TDZ continues here
    // bestFood’s TDZ continues here
    // bestFood’s TDZ continues here
    // bestFood’s TDZ continues here
    let bestFood; // bestFood’s TDZ ends here
    console.log(bestFood); // returns undefined because bestFood’s TDZ does not exist here
    bestFood = "Vegetable Fried Rice"; // bestFood’s TDZ does not exist here
    console.log(bestFood); // returns "Vegetable Fried Rice" because bestFood’s TDZ does not exist here
}