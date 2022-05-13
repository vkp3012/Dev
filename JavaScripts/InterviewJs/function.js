//Function
//Type of Function
//Function statement

// //define
// function sayhello(){
//     console.log("hello");
// }

// //function invocation
// sayhello()

//PASS parameter
function sayhello(param){
    console.log("hello",param);
}

//function invocation
//but parameter is not pass in function invoction is print undifine
// sayhello();


//parameter pass in fn invocation
// sayhello("vivek")

//return is not define in function than print undifine
// let rval = sayhello();
// console.log("ravl",rval);

//PASS parameter and return 
// function sayhello(param){
//     // console.log("hello",param);
//     return 10;
// }

//return is define in function than print return value and not difine parameter than print undefined
// let rval = sayhello();
// console.log("ravl",rval);

//return is define in function than print return value and ifine parameter than print parameter value/string
// let rval1 = sayhello("vello");
// console.log("ravl",rval1);

//function are first class citizen
//function treated as a variable
//assignment -> function expression

let a = [1,2,3,4]
let b = a;
// console.log(b);

//Function Expresion -> a function expression can be store in a variable. the variable can be store as a function.

let funContainer = function fn(){
    // console.log("I'm function expression");
}

// funContainer();

//Anonymous Function -> In anonymous function is JS we use only the function keyword without function name
let funContainer1 = function (){
    // console.log("I'm function expression1");
}

// funContainer1();

/*......................IIFE -> Immediatelt Invoked Function Expression................................................*/
/*

    IIFE is a function expression that immediately invoked after the function definition is complete automatically. 
    The paraenthies () plays on important role in the IIFE pattern.

                                                                                                                                */
let hello = (function () {
    console.log("I'm IIFE");
}) ();

// (function add(a,b){
//     console.log(a + b);
// })(20,30);

/*...............................Arraw Function....................*/

//syntax , react this

let fn1 = num => num *num;
// console.log(fn1(5));

/*................................Note.............................*/

//1. Function are treated as variable.
//2. assignment -> Function Expression
    // variable can be passed as a parameter

// //Example
// function sayhello(param){
//     console.log("hello",param);
//     return 10;
// }

// //addres
// function smaller(){
//     console.log("I'm smaller.");
// }

// sayhello([1,2,3])
// sayhello(smaller)

//3. function can be passed as parameter

//Example
function sayhello(param){
    console.log("hello",param);
    param();
    return 10;
}

//addres
function smaller(){
    console.log("I'm smaller.");
}

let rval1 = sayhello(smaller)
console.log(rval1);

//4. function can be passed as function

// function outer(){
//     console.log("I can outer returning inner");
//     return function inner(){
//         console.log("I'm inner");
//     }
// }

// let rVal = outer();
// console.log(rVal);
// rVal();


// function outer(){
//     console.log("I can outer returning inner");
//     return function (){
//         console.log("I'm inner");
//     }
// }

// let rVal = outer();
// console.log(rVal);
// rVal();



