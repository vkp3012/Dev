const fs = require("fs");
//read fs documtation
//console.log(fs);

//same folder file is use.
//console.log("./f1.txt")

//other folder use in file
//console.log("../JavaScripts/temp.js")

let res = fs.appendFileSync("f1.txt","Hello,i am f2 file");
fs.appendFileSync("f1.txt","\nYou guys are smarts.");
console.log(res);

let data = fs.readFileSync("f1.txt","utf-8");
console.log(data);

// let data1 = fs.readFileSync("f1.txt");
// console.log(data1+"");