// 1) node wcat.js filepath => displays the contents of a file in terminal
// 2) node wcat.js filepath1 filepath2 filepath3  => displays the content of all files in terminal in concatinated form in given order
// 3) node wcat.js -n file1 file 2 file3 OR node wcat.js -n file1 
//node wcat.js f1.txt
//node wcat.js f1.txt f2.txt f3.txt

//reqire fs module
const { Console } = require("console");
const fs = require("fs");

//remove 0th and 1st element in input array
let inputArr = process.argv.slice(2);

let fileArr = [];
let optionsArr = [];
//placed files in fileArr
for(let i = 0;i<inputArr.length;i++){
    let firstChar = inputArr[i].charAt(0);
    // console.log(firstChar);
    if (firstChar == '-') {
        optionsArr.push(inputArr[i]);
    }
    else {
        fileArr.push(inputArr[i]);
    }
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
    content += filecontent + "\r\n";
}

console.table(content);

let contentArr = content.split("\r\n");
console.table(contentArr);

//check if -s present or not
let isPresent = optionsArr.includes("-s");

if(isPresent){
    for(let i = 1;i<contentArr.length;i++){
        if(contentArr[i]=="" && contentArr[i-1]==""){
           contentArr[i] = null; 
        }else if(contentArr[i]=="" && contentArr[i-1]==null){
            contentArr[i] = null; 
        }
    }
    console.table(contentArr);
    let tempArr = [];
    for(let i =0;i<contentArr.length;i++){
        if(contentArr[i] != null){
            tempArr.push(contentArr[i]);
        }
    }
    console.log("data after removing extra lines\n",tempArr);
}