// require all package
const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");
const xlsx = require("xlsx");


function getInfoFromScorecard(url) {
    //console.log("from scorecards.js ",url);
    //we have a url of a scorecard, we want to get html of that scorecard
    request(url, cb);
}

function cb(err,res,body){
    if(err){
        console.log(err);
    }else if(res.statusCode == 404){
        console.log("Page Not Found");
    }else{
        // console.log("page found");
        getMatchDetails(body);
    }
}


function getMatchDetails(html){

    // selecTool conatains html of ith scorecard
    let selecTool = cheerio.load(html);
    
    //select class of venue and date
    let desc = selecTool(".match-header-info.match-info-MATCH");
    //console.log(desc.text());
    //output -> Match(N), Abu Dhabi, Oct 25 2020, Indian Premier League

    //split text format 
    let descArr = desc.text().split(",");
    //console.log(descArr);

    //1.get date
    let dateOfMatch = descArr[2];
    console.log("Date of Match ",dateOfMatch);

    //2. get venue
    let venueOfMatch = descArr[1];
    console.log("Venue of Match ",venueOfMatch);
    

    //3. select class of result 
    let matchResEle = selecTool(".match-info.match-info-MATCH.match-info-MATCH-half-width>.status-text");
    let matchResult = matchResEle.text();
    console.log(matchResult);
    

    //4. select class of team names
    let teamNames = selecTool(".name-detail>.name-link");
    // console.log(teamNames.text());

    let ownTeam = selecTool(teamNames[0]).text();
    let opponentTeam = selecTool(teamNames[1]).text();
    // console.log("Team 1", ownTeam);
    // console.log("Team 2",opponentTeam);
    // console.log("-------------------------------------");

  //5. select class of innings 
  let allBatsmenTable = selecTool(".table.batsman tbody");
  //let htmlString = "";
  //let count = 0;
  for (let i = 0; i < allBatsmenTable.length; i++) {
    //htmlString = htmlString + selecTool(allBatsmenTable[i]).html();
    //Get the descendants(table rows) of each element (table )
    let allRows = selecTool(allBatsmenTable[i]).find("tr"); // -> data of batsmen + empty rows 
    
    //let temp;
    if(i == 1){
      let temp = ownTeam;
      ownTeam = opponentTeam;
      opponentTeam = temp;
    }
    console.log(ownTeam);
    console.log(opponentTeam);

    for (let j = 0; j < allRows.length; j++) {
      //Check to see if any of the matched elements have the given className
      let row = selecTool(allRows[j]);
      let allcol = row.find("td")[0];
      if (selecTool(allcol).hasClass("batsman-cell")) {
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
        // console.log(playerName);

        let pn = selecTool(row.find("td")[0]).text().split("");
        // console.log(pn);
        // console.log(pn.join(""));
        let playerName = "";
        //Determines whether an array includes a certain element, returning true or false as appropriate.
        if(pn.includes("(")){
          playerName = pn.join("").split("(")[0];
          // console.log(playerName);
        }else if(pn.includes("†")){
          playerName = pn.join("").split("†")[0];
          // console.log(playerName);
        }else{
          playerName = pn.join("");
        }

        // let playerName = selecTool(allcol[0]).text();
        let runs = selecTool(row.find("td")[2]).text();
        let balls = selecTool(row.find("td")[3]).text();
        let numberOf4 = selecTool(row.find("td")[5]).text();
        let numberOf6 = selecTool(row.find("td")[6]).text();
        let sr = selecTool(row.find("td")[7]).text();

        console.log(
          `playerName -> ${playerName} runsScored ->  ${runs} ballsPlayed ->  ${balls} numbOfFours -> ${numberOf4} numbOfSixes -> ${numberOf6}  strikeRate-> ${sr}`
        );

        processInformation(
          dateOfMatch,
          venueOfMatch,
          matchResult,
          ownTeam,
          opponentTeam,
          playerName,
          runs,
          balls,
          numberOf4,
          numberOf6,
          sr
        );

        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
      }
    }
  }   
  // console.log(htmlString);

  function processInformation(dateOfMatch,venueOfMatch,matchResult,ownTeam,opponentTeam,playerName,runs,balls,numberOf4,numberOf6,sr){
    let teamNamePath = path.join(__dirname,"IPL",ownTeam);
    if(!fs.existsSync(teamNamePath)){
      fs.mkdirSync(teamNamePath);
    }
    
    let playerPath = path.join(teamNamePath,playerName + ".xlsx");
    let content = excelReader(playerPath,playerName);

    let playerObj = {
      dateOfMatch,
      venueOfMatch,
      matchResult,
      ownTeam,
      opponentTeam,
      playerName,
      runs,
      balls,
      numberOf4,
      numberOf6,
      sr
    };

    content.push(playerObj);
    //this function writes all the content into excel sheet , and places that excel sheet data into playerPath-> rohitSharma.xlsx
    excelWriter(playerPath,content,playerName);
  }
  // console.log(htmlstring);

}

//this function reads the data from excel file
function excelReader(playerPath,sheetName){
  if(!fs.existsSync(playerPath)){
    //if playerPath does not exists, this means that we have never placed any data into that file 
    return [];
  }

  //if playerPath already has some data in it
  let workBook = xlsx.readFile(playerPath);
  //A dictionary of the worksheets in the workbook.use sheetNames to reference these.
  let excelData = workBook.Sheets[sheetName];
  let playerObj = xlsx.utils.sheet_to_json(excelData);
  return playerObj;
}

function excelWriter(playerPath,jsObject,sheetName){
  //create a new workbook
  let newWorkBook = xlsx.utils.book_new();
  //converts an array of js Object to a worksheet.
  let newWorkSheet = xlsx.utils.json_to_sheet(jsObject);
  //it appends a worksheet to a workbook.
  xlsx.utils.book_append_sheet(newWorkBook,newWorkSheet,sheetName);
  //attempts to write or download workbook data tom file
  xlsx.writeFile(newWorkBook,playerPath);
}


module.exports = {
    gifs:getInfoFromScorecard
}