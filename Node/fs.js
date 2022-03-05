const fs = require("fs");

let res = fs.appendFileSync("f1.txt","Hello,i am f2 file");

console.log(res);