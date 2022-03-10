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
console.log("-------------Function define and Function call------------------");
SayHi();
functionName();
//------------------------------------------

/*............................Passing Values to Functions with Arguments.....................*/
/*
    Parameters are variables that act as placeholders for the values that are to be input to a function 
    when it is called. When a function is defined, it is typically defined along with one or more parameters. 
    The actual values that are input (or "passed") into a function when it is called are known as arguments.

    Here is a function with two parameters, param1 and param2:
*/
console.log("-------------Passing Values to Functions with Arguments-----------------------");

function testFun(param1, param2) {
  console.log(`Add ${param1} and ${param2}: ${param1+param2}`);
}
testFun(1,2)

/*
    Then we can call testFun like this: testFun("Hello", "World");.
     We have passed two string arguments, Hello and World. Inside the function, param1 will equal 
     the string Hello and param2 will equal the string World. Note that you could call testFun again with 
     different arguments and the parameters would take on the value of the new arguments.
*/

//-------------------------------------------
function SayHi(params){
    console.log("params received:",params);
}

SayHi(100);
SayHi("Hello World!");
SayHi([1,2,3,4,5])

/*......................Add Function............................*/
// function add(a,b){
//     return a+b;
// }

// let ans = add(2,6);
// console.log(ans)
//--------------------------------------------------------

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
