/*..........................Comment Your JavaScript Code.....................*/

/* 
    Comments are lines of code that JavaScript will intentionally ignore. 
    Comments are a great way to leave notes to yourself and to other people 
    who will later need to figure out what that code does.

    There are two ways to write comments in JavaScript:

    1).Using // will tell JavaScript to ignore the remainder of the text on the current line. 
       This is an in-line comment:

            // This is an in-line comment.
    2).You can make a multi-line comment beginning with 
       /* and ending with */
       //This is a multi-line comment:

        /* This is a
            multi-line comment */
/*
    NOTE: As you write code, you should regularly add comments to clarify the function of
     parts of your code. Good commenting can help communicate the intent of your code—both 
     for others and for your future self.

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
    Any of the eight data types may be stored in a variable.

    Variables are similar to the x and y variables you use in mathematics, which means they're 
    a simple name to represent the data we want to refer to. Computer variables differ from mathematical 
    variables in that they can store different values at different times.

    We tell JavaScript to create or declare a variable by putting the keyword var in front of it, like so:
*/

var ourName;

/*
    creates a variable called ourName. In JavaScript we end statements with semicolons. 
    Variable names can be made up of numbers, letters, and $ or _, but may not contain spaces or 
    start with a number.

    Use the var keyword to create a variable called myName.

    Hint
    Look at the ourName example above if you get stuck.
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

I   f there are any calculations to the right of the = operator,
     those are performed before the value is assigned to the variable on the left of the operator.
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
//------------------------------------------------------

//print in js
//console.log(a)
//-------------------------------------------

//find type of varibale
// console.log(typeof a)
//-----------------------------------------------------


//String...................
// a ="Hello"
// console.log(a)
// console.log(typeof a)


// var str = "a"
// console.log(typeof str);

// str = "How you doing ?"
// console.log(str);

// str = "How you doing ? I am fine how about you?"
// console.log(str);
//--------------------------------------------------------

//boolean...................
// a = true;
// console.log(a)
// console.log(typeof a)

// var t = true;
// var f = false;
// console.log(t);
// console.log(f);
//------------------------------------------------------------

// undefined......................................
// a = null;
// console.log(a)
// console.log(typeof a)
//---------------------------------------------------------------

//Number.........................................
// var num = 10;
// console.log(num);

// //double or float
// var float = 2.4;
// console.log(float)
//--------------------------------------------------------

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

