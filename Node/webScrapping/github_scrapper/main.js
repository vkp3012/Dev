url = "https://github.com/topics"

const request = require("request");
const cheerio = require("cheerio");

request(url,cb);

function cb(err,response,html){
    if(err){
        console.log(err);
    }else{
        extractLink(html)
    }
}

function extractLink(html){
    let $ = cheerio.load(html);
    let anchorElem = $(".no-underline.flex-1.d-flex.flex-column")
    for(let i = 0;i<anchorElem.length;i++){
        let link = $(anchorElem[i]).attr("href")
        //console.log(link);
        let fullLink = "https://github.com" + link;
        console.log(fullLink.length[3]);
    }
}