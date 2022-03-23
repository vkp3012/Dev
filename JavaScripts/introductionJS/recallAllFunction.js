/*.............Recall......................*/
//print in js
//console.log(a)
//------------------------------------------

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

