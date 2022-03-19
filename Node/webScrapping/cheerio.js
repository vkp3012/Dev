const cheerio = require("cheerio");

let html = `<ul id = "fruits">
    <li class = "apple">Apple<li>
    <li class = "orange">Orange<li>
    <li class = "pear">Pear<li>
</ul>`;

let selecTool = cheerio.load(html);

let fruitsName = selecTool(".pear");
console.log(fruitsName.text());

let fruitsNameArr = selecTool("#fruits");
console.log(fruitsNameArr.text());


// let fruitsName = selecTool(".pear");
// console.log(fruitsName);

// let fruitsNameArr = selecTool("#fruits");
// console.log(fruitsNameArr);