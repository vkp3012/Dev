const request = require("request");
const cheerio = require("cheerio");

function getInfoFromScorecard(url) {
    //console.log("from scorecards.js ",url);
    //we have a url of a scorecard, we want to get html of that scorecard
    request(url, cb);
}

function cb(err,res,body){
    if(err){
        console.log(err);
    }else{
        getMatchDetails(body);
    }
}

function getMatchDetails(html){
    // selecTool conatains html of ith scorecard
    let selecTool = cheerio.load(html);

    //1. get venue
    //2.get date
    let desc = selecTool(".match-header-info.match-info-MATCH");
    //console.log(desc.text());
    let descArr = desc.text().split(",");
    //Match(N), Abu Dhabi, Oct 25 2020, Indian Premier League
    //console.log(descArr);
    let dateOfMatch = descArr[2];
    let venueOfMatch = descArr[1];
    let noOfMatch = descArr[0];
    console.log("Number of Match ",noOfMatch);
    console.log("Date of Match ",dateOfMatch);
    console.log("Venue of Match ",venueOfMatch);

    //3. get result
    let matchResEle = selecTool(".match-info.match-info-MATCH.match-info-MATCH-half-width>.status-text");
    console.log("Result ",matchResEle.text());
    console.log("-------------------------------------");

    //4. get team names
}

module.exports = {
    gifs:getInfoFromScorecard
}