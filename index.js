
// variable declaration
// var a;

//Variable Initialization
// a = 10
// //print in js
// console.log(a)

//find type of varibale
// console.log(typeof a)

// a ="Hello"
// console.log(a)
// console.log(typeof a)

// a =true;
// console.log(a)
// console.log(typeof a)

// a =null;
// console.log(a)
// console.log(typeof a)

// //Number
// var num = 10;
// console.log(num);

// //double or float
// var float = 2.4;
// console.log(float)

// //boolean
// var t = true;
// var f = false;
// console.log(t);
// console.log(f);

// //string
// var str = "a"
// console.log(typeof str);

// str = "How you doing ?"
// console.log(str);

// str = "How you doing ? I am fine how about you?"
// console.log(str);

// //show next line use ---\n
// str = "How you doing ?\nI am fine how about you?"
// console.log(str);

// //backtick use the string is next line
// str = `How you doing ? 
// I am fine how about you?`;
// console.log(str);

// //number backtick 
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

//overcome karnai kai liyai let keyword use hota hai........
//let keyword is used to

// let l = 100;
// console.log(l);


//type 1 Error:- SyntaxError: Identifier 'l' has already been declared
//let l = "200";
//console.log(l);

//we can reinitialize a variable but we can not redeclaration
// l = 100;
// console.log(l)

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


// loop in js mode

// print 0 to 9 number...
var num = 10;
for (var i = 1; i <=num; i++){
    console.log("Number is",i);
}

//find even and odd number handlers
// var num1 = 10;
// for (var i = 1; i < num1; i++){
//     if(i%2==0){
//         console.log(`${i} num is even`);
//     }else{
//         console.log(`${i} num is odd`);
//     }
// }