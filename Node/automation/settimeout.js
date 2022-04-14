// function yolo() {
//     var a = 10;
//     function cb(err, res) {
//         if (err) {
//             console.log(err);
//         }
//         else {
//             console.log("hello how are you ?");
            
//         }
//     }
//     // function to be executed(callback fun) , time(ms) after which cb to be executed
//     // 1 second =1000 milli second
//     setTimeout(cb, 5000);
//     console.log(a);

// }

// yolo();
// let b = 100;
// console.log(b);




// const request = require("request");
// let url ="https://www.worldometers.info/coronavirus/"
// function yolo() {
//     var a = 10;
//     function cb(err, res,body) {
//         if (err) {
//             console.log(err);
//         }
//         else {
//             console.log("hello how are you ?");
//             console.log("statusCode is ",res.statusCode);
//         }
//     }
//     // function to be executed(callback fun) , time(ms) after which cb to be executed
//     // 1 second =1000 milli second
//     request(url,cb)
//     console.log(a);

// }

// yolo();
// let b = 100;
// console.log(b);

//print 1 to 10 but print 1 to 10 is waits 2 sec is every print
// incorrect code
// for (var i = 1; i <= 10; i++){
//     // hint: closures and scope -> wrapping
//     setTimeout(function () {
//         console.log(i);
//     }, 2000*i);
// }


// for (let i = 1; i <= 10; i++){
//     // hint: closures and scope -> wrapping
//     setTimeout(function () {
//         console.log(i);
//     }, 2000*i);
// }

for(var i = 1; i <= 10; i++){
    print(i);
}


function print(i){
    setTimeout(function(){
        console.log(i)
    },2000*i);
}