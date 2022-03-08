// 1) node wcat.js filepath => displays the contents of a file in terminal
// 2) node wcat.js filepath1 filepath2 filepath3  => displays the content of all files in terminal in concatinated form in given order
//node wcat.js f1.txt
//node wcat.js f1.txt f2.txt f3.txt
//reqire fs module
const fs = require("fs");

//remove 0th and 1st element in input array
let inputArr = process.argv.slice(2);

let fileArr = [];
//placed files in fileArr
for(let i = 0;i<inputArr.length;i++){
    fileArr.push(inputArr[i]);
}


//check if all the file are present
for(let i =0;i<fileArr.length;i++){
    let doesExits = fs.existsSync(fileArr[i]);
    if(!doesExits){
        console.log("Files does not exist ");
        return;
    }
}

//content read and appending starts
let content = "";
for(let i =0;i<fileArr.length;i++){
    let filecontent= fs.readFileSync(fileArr[i]);
    content += filecontent + "\n";
}

console.log(content);