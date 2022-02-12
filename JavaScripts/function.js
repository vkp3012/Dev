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