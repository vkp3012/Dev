//Functions for

//Function Defined
// function SayHi(){
//     console.log("Hello World!");
// }
//------------------------------------------

//Function Call or function invoke................
// SayHi();
//------------------------------------------

// function SayHi(params){
//     console.log("params received",params);
// }

// SayHi(100);
// SayHi("Hello World!");
// SayHi([1,2,3,4,5])

// function add(a,b){
//     return a+b;
// }

// let ans = add(2,6);
// console.log(ans)
//--------------------------------------------------------

// Function can be returned
// Functions can be passed as parameters/argument.......

function calculater(str,a,b){
    if(str=="add"){
        return function add(){
            console.log( a+b );
        }
    }
}

let returnedFunc = calculater("add",2,3);
console.log("returned function is\n" + returnedFunc)
returnedFunc();

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

let SayHi = function abcd(){
    console.log("Hello");
}
//abcd();
// name of variable is used to invoke(call the function) the function

//variable_name()
console.log(""+SayHi);
SayHi();

//----------------------------------------------------------------

//3). IIFE:- Imediately invoke function expression

function add(a,b){
    return a + b;
}
console.log(add(2,3));

//or

let additionIIFE = (function add(a,b){
    console.log(a + b);
})(20,30);

// console.log(" "+additionIIFE);
// console.log(additionIIFE(20,30));
