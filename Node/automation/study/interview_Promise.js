//q1 read 3 files f1.txt,f2.txt,f3.txt serially using promises

//2nd way to overcome callback hello is to use promise


const fs = require("fs")

// let f1readpromise = fs.promises.readFile("f1.txt");

// function readf2file(f1kadata){
//     console.log(f1kadata + "");
//     let f2readpromise = fs.promises.readFile("f2.txt");
//     return f2readpromise;
// }

// function readf3file(f2kadata){
//     console.log(f2kadata + "");
//     let f3readpromise = fs.promises.readFile("f3.txt");
//     return f3readpromise;
// }

// function alldone(f3kadata){
//     console.log(f3kadata + "");
//     console.log("read all files serially ");
// }

// f1readpromise
//     .then(readf2file)
//     .then(readf3file)
//     .then(alldone)
//     .catch(function (err){
//         console.log(err);
//     });

//q2 read 3 files f1.txt,f2.txt,f3.txt paralelly using promises

let f1readpromise = fs.promises.readFile("f1.txt");
let f2readpromise = fs.promises.readFile("f2.txt");
let f3readpromise = fs.promises.readFile("f3.txt");

f1readpromise.then(cb);
f2readpromise.then(cb);
f3readpromise.then(cb);

function cb(data){
    console.log(data + "");
}
