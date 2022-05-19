/*

    By definition, an outer scoped variable is said to be "shadowed" by an inner scoped variable when both of them have the same name.

    To understand variable shadowing in JavaScript, you must first be aware of the two scopes you can declare variables in:

        1.Local Scope: Variables declared here are block-scoped or function-scoped;
        2.Global Scope: It's the outermost scope where any variable that's declared is available globally.

    And, the three ways in which you can declare variables in those two scopes are as follows:

        1.Using var — creates a function-scoped or globally-scoped variable;
        2.Using let — creates a block-scoped local variable;
        3.Using const — creates a block-scoped local constant.


    Now that you know the basics, you must remember the following rules that apply to variables depending on the scope they're declared in:

        1.Variable Type and Scope Determine If the Value of Shadowed Variable Is Overwritten;
        2.Local Scope Variables Take Precedence;
        3.let or const Cannot be Shadowed in a Local Scope.

*/

//legal
/*------------------------------- 📝 Question 1 📝---------------------------------*/
// let fruits = "apple"
// console.log(fruits);

// {
//     let fruits="orange";
//     console.log(fruits);
// }

// console.log(fruits);

/*------------------------------- 📝 Question 2 📝---------------------------------*/

/*

    Variable Type and Scope Determine If the Value of Shadowed Variable Is Overwritten
    Variables declared as let or const are block-scoped and they do not overwrite the value of the shadowed variable.
*/
//For example:

// global scope
// var foo = 'bar';

// if (true) {
//     // block-scoped (local)
//     let foo = 'qux';
//     console.log(foo); // 'qux'
// }

// console.log(foo); // 'bar'

/*
    This isn't true, however, for variables declared with var since they are not block-scoped (but rather global and function scoped). 
    Therefore, they would overwrite values in block scope but not in function scope.
*/


/*------------------------------- 📝 Question 3 📝---------------------------------*/

// global scope
// var foo = 'bar';

// if (true) {
    //     // block-scoped (local)
    //     var foo = 'qux';
    //     console.log(foo); // 'qux'
    // }
    
    // console.log(foo); // 'bar'


/*------------------------------- 📝 Question 3 📝--------------------------------- d */

// function printFoo() {
//     var foo = 'bar';

//     function printQux() {
//         var foo = 'qux';
//         return foo;
//     }

//     console.log(printQux()); // 'qux'
//     console.log(foo); // 'bar'
// }

// printFoo();

/*------------------------------- 📝 Question 4 📝---------------------------------  */
// global scope
// var foo = 'bar';

// if (true) {
//     // block-scoped (local)
//     const foo = 'qux';
//     console.log(foo); // 'qux'
// }

// console.log(foo); // 'bar'

/*------------------------------- 📝 Question 4 📝--------------------------------- d */

//Same thing happens in a function scope as you can see in the code below:

// global scope
// var foo = 'bar';

// function printFoo() {
//     // function scope (local)
//     const foo = 'qux';
//     // ...
//     return foo;
// }

// console.log(printFoo()); // 'qux'
// console.log(foo); // 'bar'

/*------------------------------- 📝 Question 5 📝--------------------------------- d */

/*
let or const Cannot be Shadowed in a Local Scope
In a local scope you cannot shadow another let or const. In that case, you will get an error as shown below:
*/

// function printFoo() {
//     let foo = 'bar';

//     if (true) {
//         // SyntaxError: Identifier 'foo' has already been declared
//         var foo = 'qux';
//     }
//     // ...
//     return foo;
// }

/*------------------------------- 📝 Question 6 📝--------------------------------- d */

//However, a variable declared with let, const and var can shadow a global-scoped let, const and var variable. For example:

// global scope
const foo = 'bar';

if (true) {
    // block-scoped (local)
    const foo = 'qux';
    console.log(foo); // 'qux'
}

console.log(foo); // 'bar'

/*------------------------------- 📝 Question 7 📝---------------------------------  */

// let fruits = "apple"
// console.log(fruits);

// {
//     var fruits = "orange"
//     console.log(fruits);
// }

// console.log(fruits);


//output -> SyntaxError: Identifier 'fruits' has already been declared