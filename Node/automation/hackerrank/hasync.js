let link = "https://www.hackerrank.com/auth/login"
const puppeteer = require("puppeteer");
let {email,password} = require("./secrets")

let cTab;
(async function(){
    try {
        //browser is open
        let browser = puppeteer.launch({
            headless:false,
            defaultViewport:null,
            args:["--start-maximized"]
        })
        //wait foe browser
        let browserInstant = await browser;
        let allTabsArr = await browserInstant.pages();
        cTab = allTabsArr[0]
        //link is open in browser
        await cTab.goto(link);
        //email type
        await cTab.type("input[name='username']",email)
        //password type
        await cTab.type("input[name='password']",password)
        //login buttom is click and loging to hackerrank page
        await cTab.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled")
        //wait for select allgorithim selector page tage
        await waitAndClick("div[data-automation='algorithms']");
        await cTab.waitForSelector('a[data-analytics="ChallengeListChallengeName"]')
        //all link print in algorthim algo
        let allQuesLink = await cTab.evaluate(getAllQuesLinks,'a[data-analytics="ChallengeListChallengeName"]');
        //console.log(allQuesLink);
        await cTab.evaluate(allQuesLink)

        await questionAllLink(linkArr[0],0);

    } catch (error) {
        console.log(error);
    }

})()

async function waitAndClick(algoOpen){
    let algo = await cTab.waitForSelector(algoOpen)
    algo
        await cTab.click(algoOpen)
}

//async function waitForSelecter()

async function getAllQuesLinks(select){
    let allElemArr = document.querySelectorAll(select);
    let linkArr  =[];
    for(let i = 0;i<allElemArr.length;i++){
        linkArr.push(allElemArr[i].getAttribute("href"));
    }
    return linkArr;
}

async function questionAllLink(linkArr){
    await questionSolver(linkArr)
}

async function questionSolver(url,idx){
    let fullLink = `https://www.hackerrank.com${url}`;
    await cTab.goto(fullLink);
}