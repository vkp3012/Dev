/*.....................................Functions...........................................*/
/* 
    In JavaScript, we can divide up our code into reusable parts called functions.

Here's an example of a function:

*/
//Function Defined
function functionName() {
  console.log("Hello World");
}
/*
    You can call or invoke this function by using its name followed by parentheses, 
    like this: functionName(); Each time the function is called it will print out the message Hello World 
    on the dev console. All of the code between the curly braces will be executed every time the 
    function is called.
*/


function SayHi(){
    console.log("Hello World!");
}
//------------------------------------------

//Function Call or function invoke................
console.log("-------------Function invoke and Function call------------------");
SayHi();
functionName();
//------------------------------------------

//Convert the logic to use else if statements.
// Function can be returned
// Functions can be passed as parameters/argument.......

// function calculater(str,a,b){
//     if(str=="add"){
//         return function add(){
//             console.log( a+b );
//         }
//     }
// }

// let returnedFunc = calculater("add",2,3);
// console.log("returned function is\n" + returnedFunc)
// returnedFunc();

//2). Function Expression
//--- function are treated as first class citizens in JavaScript

// let SayHi = function(){
//     console.log("Hello");
// }

// name of variable is used to invoke(call the function) the function

//variable_name()
// console.log(""+SayHi);
// SayHi();


//----------------------------------------------------------------

// let SayHi = function abcd(){
//     console.log("Hello");
// }
//abcd();
// name of variable is used to invoke(call the function) the function

//variable_name()
// console.log(""+SayHi);
// SayHi();

//----------------------------------------------------------------

//3). IIFE:- Imediately invoke function expression

// function add(a,b){
//     return a + b;
// }
// console.log(add(2,3));

//or

// let additionIIFE = (function add(a,b){
//     console.log(a + b);
// })(20,30);

// console.log(" "+additionIIFE);
// console.log(additionIIFE(20,30));
