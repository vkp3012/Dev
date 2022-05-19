//  var -> function Scope
// Temporal Dead Zone -> ❌

/*---------------------------Question 1---------------------------------*/
// function fn(){
//     console.log(a);
//     var a = 10;
//     console.log(a);  
//     if(a==10){
//         var a;
//         console.log(a);
//     }
//     console.log(a);
// }

// fn();

// console.log(a);
//ReferenceError: a is not defined

/*---------------------------Question 2---------------------------------*/
// function fn(){
//     console.log(a);
//     var a = 10;
//     console.log(a);
//     if(a==10){
//         var a = 20;
//         console.log(a);
//     }
//     console.log(a);
// }

// fn();

/*------------------------------- 📝 Question 3 📝---------------------------------*/
var num = 8;
var num = 10;

console.log(num);

// A: 8
// B: 10  -  🎉
// C: SyntaxError
// D: ReferenceError