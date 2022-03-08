const fs = require("fs");

let inputArr = process.argv.slice(2);

let fileArr = [];

for(let i = 0;i<inputArr.length;i++){
    fileArr.push(inputArr[i]);
}

for(let i =0;i<fileArr.length;i++){
    let doesExits = fs.existsSync(fileArr[i]);
    if(!doesExits){
        console.log("Files does not exist");
        break;
    }
}

let content = "";
for(let i =0;i<fileArr.length;i++){
    let filecontent= fs.readFileSync(fileArr[i]);
    content += filecontent + "\n";
}

console.log(content);