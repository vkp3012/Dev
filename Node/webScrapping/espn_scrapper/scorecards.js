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
    

    //4. get team names
    let teamNames = selecTool(".name-detail>.name-link");
    // console.log(teamNames.text());

    let team1 = selecTool(teamNames[0]).text();
    let team2 = selecTool(teamNames[1]).text();
    console.log("Team 1", team1);
    console.log("Team 2",team2);
    console.log("-------------------------------------");
    //5. get innings 

  let allBatsmenTable = selecTool(".table.batsman tbody");
  console.log("number of batsmen tables are ->   ",allBatsmenTable.length);
  let htmlString = "";
  let count = 0;
  for (let i = 0; i < allBatsmenTable.length; i++) {
    htmlString = htmlString + selecTool(allBatsmenTable[i]).html();
    //Get the descendants(table rows ) of each element (table )
    let allRows = selecTool(allBatsmenTable[i]).find("tr"); // -> data of batsmen + empty rows 
    
    for (let i = 0; i < allRows.length; i++) {
      //Check to see if any of the matched elements have the given className
      let row = selecTool(allRows[i]);
      let firstColmnOfRow = row.find("td")[0];
      if (selecTool(firstColmnOfRow).hasClass("batsman-cell")) {
        //will be getting valid data
        // count++;
        // console.log("inside " + count);
        // name | runs | balls | 4's | 6's | sr
        // for (let i = 0; i < 8; i++) {
        //   if (i == 1 || i == 4) continue;
        //   else {
        //     console.log(selecTool(row.find("td")[i]).text());
        //   }
        // }
        let playerName = selecTool(row.find("td")[0]).text();
        // console.log(playerName);
        let runs = selecTool(row.find("td")[2]).text();
        let balls = selecTool(row.find("td")[3]).text();
        let numberOf4 = selecTool(row.find("td")[5]).text();
        let numberOf6 = selecTool(row.find("td")[6]).text();
        let sr = selecTool(row.find("td")[7]).text();

        console.log(
          `playerName -> ${playerName} runsScored ->  ${runs} ballsPlayed ->  ${balls} numbOfFours -> ${numberOf4} numbOfSixes -> ${numberOf6}  strikeRate-> ${sr}`
        );


      }
    }
  }

    
  // console.log(htmlString);
        
}


module.exports = {
    gifs:getInfoFromScorecard
}