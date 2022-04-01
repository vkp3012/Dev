const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");
const pdfkit = require("pdfkit")

function issueslink(url,topic,reponame){
    request(url,cb);
    function cb(err,response,html){
        if(err){
            console.log(err);
        }else if(response.statusCode == 404){
            console.log("Page Not Found");
        }else{
            issues(html,topic,reponame);
        }
    }
}

function issues(html,topic,reponame){
    let $ = cheerio.load(html);
    let issuesELem=$(".Link--primary.v-align-middle.no-underline.h4.js-navigation-open.markdown-title");
    let arr = [];
    for(let i = 0;i<issuesELem.length;i++){
        let link = $(issuesELem[i]).attr("href");
        console.log(link);
        arr.push(link);
    }
    // console.log(topic,"   ",arr);
    let folderpath = path.join(__dirname,topic);
    dirCreater(folderpath);
    let filepath = path.join(folderpath,reponame+".pdf");
    let txt = JSON.stringify(arr);
    let pdfDoc = new pdfkit();
    pdfDoc.pipe(fs.createWriteStream(filepath));
    pdfDoc.text(txt);
    pdfDoc.end();
    // fs.writeFileSync(filepath,);
}

function dirCreater(folderpath){
    if(!fs.existsSync(folderpath)){
        fs.mkdirSync(folderpath);
    }
}


module.exports = issueslink;
