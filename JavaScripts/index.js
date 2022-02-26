/*..........................Comment Your JavaScript Code.....................*/

/* 
    There are two ways to write comments in JavaScript:

    1).Using // will tell JavaScript to ignore the remainder of the text on the current line. 
       This is an in-line comment:

            // This is an in-line comment.

    2).You can make a multi-line comment beginning with 
       /* and ending with */
       //This is a multi-line comment:

        /* 
            This is a
            multi-line comment
        */


/*.....................Declare JavaScript Variables........................*/

/*
    JavaScript provides eight different data types which are undefined, null, boolean, string, symbol, 
    bigint, number, and object.

    For example, computers distinguish between numbers, such as the number 12, and strings, such as "12", 
    "dog", or "123 cats", which are collections of characters. Computers can perform mathematical operations 
    on a number, but not on a string.

    Variables allow computers to store and manipulate data in a dynamic fashion. 
    They do this by using a "label" to point to the data rather than using the data itself.
*/

var ourName;

/*
    creates a variable called ourName. In JavaScript we end statements with semicolons. 
    Variable names can be made up of numbers, letters, and $ or _, but may not contain spaces or 
    start with a number.
*/


// variable declaration
var a;
console.log("---------------------------------------");
//-------------------------------------------------

/*.......................Storing Values with the Assignment Operator........................*/

/*
    In JavaScript, you can store a value in a variable with the assignment operator (=).

    myVariable = 5;
    This assigns the Number value 5 to myVariable.
*/

var myVar;
myVar = 5;

/*
    First, this code creates a variable named myVar. 
    Then, the code assigns 5 to myVar. Now, if myVar appears again in the code, 
    the program will treat it as if it is 5.
*/

//Assign the value 7 to variable a.

//Variable Initialization
var a;
a = 7

/*........................Assigning the Value of One Variable to Another.................*/
/*
    After a value is assigned to a variable using the assignment operator, 
    you can assign the value of that variable to another variable using the assignment operator.
*/

var myVar;
myVar = 5;
var myNum;
myNum = myVar;

/*
    The above declares a myVar variable with no value, then assigns it the value 5. 
    Next, a variable named myNum is declared with no value. Then, the contents of myVar (which is 5) is 
    assigned to the variable myNum. Now, myNum also has the value of 5.
*/

console.log("---------------------------------------");

/*....................Declare String Variables....................*/

//Previously you used the following code to declare a variable:

var myName;

//But you can also declare a string variable like this:

var myName = "your name";
/*
    "your name" is called a string literal. A string literal, or string, is a series of zero or more characters 
    enclosed in single or double quotes.

    Create two new string variables: myFirstName and myLastName and assign them the values of your first and 
    last name, respectively.

*/
//------------------------------------------------------

/*..................Understanding Case Sensitivity in Variables...................*/
/*
    In JavaScript all variables and function names are case sensitive. 
    This means that capitalization matters.

    MYVAR is not the same as MyVar nor myvar. 
    It is possible to have multiple distinct variables with the same name but different casing. 
    It is strongly recommended that for the sake of clarity, you do not use this language feature.

    Best Practice

    Write variable names in JavaScript in camelCase. 
    In camelCase, multi-word variable names have the first word in lowercase and 
    the first letter of each subsequent word is capitalized.

Examples:
*/
var someVariable;
var anotherVariableName;
var thisVariableNameIsSoLong;

/*.......................var Keywords...........................*/
/*
    One of the biggest problems with declaring variables with the var keyword is that 
    you can easily overwrite variable declarations:
Example:-
*/
var camper = "James";
var camper = "David";
console.log(camper);

/*........................Let Keyword...........................*/
/*
    A keyword called let was introduced in ES6, a major update to JavaScript, 
    to solve this potential issue with the var keyword.
Example:- 
*/

let camper = "James";
let camper = "David";
/*
    The error can be seen in your browser console.

    So unlike var, when you use let, a variable with the same name can only be declared once.

    Update the code so it only uses the let keyword.\
Example:- 
*/
let camper = "James";
camper = "David";

/*..............Const Keyword..................*/

/*
    In ES6, you can also declare variables using the const keyword.

    const has all the awesome features that let has, with the added bonus that variables declared using 
    const are read-only. 
    They are a constant value, which means that once a variable is assigned with const, it cannot be reassigned:
*/

const FAV_PET = "Cats";
FAV_PET = "Dogs";

//The console will display an error due to reassigning the value of FAV_PET.

/*.............Recall......................*/
//print in js
//console.log(a)
//-------------------------------------------



//show next line use ---\n
// str = "How you doing ?\nI am fine how about you?"
// console.log(str);

//backtick(``) - use the string is next line
// str = `How you doing ? 
// I am fine how about you?`;
// console.log(str);
//------------------------------------------

//number backtick(``)
// var num = 5;
// console.log(`half of ${num} is ${num/2}`);


//var has some problems with
//1). redeclaration is allowed

// var r = "hello";
// console.log(r);

// var r = 100;
// console.log(r);

// r = 200;
// console.log(r);
//------------------------------

//To overcome this problem, It be use Let keyword...........
//let keyword is used to

// let l = 100;
// console.log(l);

//let l = "200";
//console.log(l);

//Variable Initialization is same not allowed.

//type 1 Error:- SyntaxError: Identifier 'l' has already been declared


//but we can reinitialize a variable but we can not redeclaration
// l = 100;
// console.log(l)

//-------------------------------

//const keyword
//na hi redeclear no hai reinitialize kar sakatai hai..
// const a = 5
// console.log(a);


//Type 2 Error:- SyntaxError: Identifier 'a' has already been declared
// const a = "5";
// console.log(a);


//Error:- TypeError: Assignment to constant variable.
// a = "4";
// console.log(a);
//------------------------------------------------------

// loop in js mode................................................................
//if else and loop............

// print 0 to 9 number...
// var num = 10;
// for (var i = 1; i <=num; i++){
//     console.log("Number is",i);
// }
//----------------------------------------------------------------


//find even and odd number handlers
// var num1 = 10;
// for (var i = 1; i < num1; i++){
//     if(i%2==0){
//         console.log(`${i} num is even`);
//     }else{
//         console.log(`${i} num is odd`);
//     }
//}
//----------------------------------------------------------------

//Check prime number of
let n = 23;
let flag = true;
for(let div=2;div<n;div++){
    if(n%div==0){
        flag=false;
        break;
    }
}
if(flag==true){
    console.log(n,"is prime.");
}else{
    console.log(n,"is not prime.");
}

