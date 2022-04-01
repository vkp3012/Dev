
const request = require("request");
const cheerio = require("cheerio")

function repolink(url,topic){
    request(url,cb);
    function cb(err,response,html){
        if(err){
            console.log(err);
        }else{
            allrepolink(html,topic);
        }
    }
}

function allrepolink(html,topic){
    let $ = cheerio.load(html);
    let anchorElem = $(".f3.color-fg-muted.text-normal.lh-condensed");
    // console.log(anchorElem.length);
    console.log(topic);
    for(let i = 0 ;i<8;i++){
        let anchor = $(anchorElem[i]).find("a")
        let link = $(anchor[0]).attr("href");
        // console.log(link);
        let fullLink =  `https://github.com${link}/issues`;
        console.log(fullLink);
    }
    console.log("`````````````````````````");
}

module.exports = repolink