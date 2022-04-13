let link = "https://www.flipkart.com/"

const request = require("request")
const cheerio = require("cheerio")

request(link,cb)

function cb(error,response,html){
    if(error){
        console.log(error);
    }else{
        headhtml(html);
    }
}

function headhtml(html){
    let $ = cheerio.load(html);
    let anchorElem = $("._2KpZ6l._3dESVI");
    for(let i = 0;i<anchorElem.length;i++){
        let link = $(anchorElem[i]).attr("href")
        //console.log(link);
        let fullLink = "https://www.flipkart.com/" + link;
        console.log(fullLink);
    }
}