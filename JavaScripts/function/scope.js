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


/*....................Global vs. Local Scope in Functions.................*/
/*
  It is possible to have both local and global variables with the same name. 
  When you do this, the local variable takes precedence over the global variable.

In this example:
*/

const someVar = "Hat";

function myFun() {
  const someVar = "Head";
  return someVar;
}

//The function myFun will return the string Head because the local version of the variable is present.