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

/*.........................Return a Value from a Function with Return............................*/
/*
    We can pass values into a function with arguments. You can use a return statement to send 
    a value back out of a function.

Example
*/
console.log("---------------Return a Value from a Function with Return------------------------");
function plusThree(num) {
  return num * 3;
}

const answer = plusThree(5);
console.log(answer);
// answer has the value 8.

// plusThree takes an argument for num and returns a value equal to num + 3.

function add(a,b){
    return a+b;
}

let ans = add(2,6);
console.log(ans)
//--------------------------------------------------------

/*...................Global Scope and Functions................................*/
/*
    In JavaScript, scope refers to the visibility of variables. 
    Variables which are defined outside of a function block have Global scope. 
    This means, they can be seen everywhere in your JavaScript code.

    Variables which are declared without the let or const keywords are automatically created in the global scope. 
    This can create unintended consequences elsewhere in your code or when running a function again. 
    You should always declare your variables with let or const.

    Using let or const, declare a global variable named myGlobal outside of any function. 
    Initialize it with a value of 10.

    Inside function fun1, assign 5 to oopsGlobal without using the let or const keywords.

Declare the myGlobal variable below this line
*/
console.log("-------------Global Scope and Functions--------------------------");
let myGlobal = 10;
function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}

// Only change code above this line
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

/*
    The scope of a variable is its visibility; where in the code is the function available? 
    Here is a list of the different scopes a variable can have.

    1.Global scope: The variable is available throughout the code
    2.Local scope: Available in only a certain area (like only within function)
    3.Block scope: Available within an even more certain area (like an if-statement)

    Your task is to understand how adding var (and not adding) before a variable name, can change 
    the variable’s scope.

    When you add var before the variable name, its scope is determined by where it is placed.
*/

var num1 = 18; // Global scope
function fun() {
  var num2 = 20; // Local (Function) Scope
  if (true) {
    var num3 = 22; // Block Scope (within an if-statement)
  }
}

//When you don’t, this is the result:

num1 = 18; // Global scope
function fun() {
  num2 = 20; // Global Scope
  if (true) {
    num3 = 22; // Global Scope
  }
}

/*......................Local Scope and Functions..........................*/
/*
    Variables which are declared within a function, as well as the function parameters, have local scope. 
    That means they are only visible within that function.

    Here is a function myTest with a local variable called loc.
*/

function myTest() {
  const loc = "foo";
  console.log(loc);
}

myTest();
//console.log(loc);

/*
    1.The myTest() function call will display the string foo in the console. 
    2.The console.log(loc) line (outside of the myTest function) will throw an error, 
      as loc is not defined outside of the function.
*/

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
