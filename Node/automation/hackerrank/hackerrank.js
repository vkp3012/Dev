const puppeteer = require("puppeteer")
let {email,password} = require("./secrets")
let { answer } = require("./codes");
// let email = ""
// let password = ""
let cTab;
let browserOpenPromise = puppeteer.launch(
    {
        headless :false,
        defaultViewport :null,
        args : ["--start-maximized"],
        // executablePath : "path/to/chrome"
        //chrome://version/
        // executablePath:
        // "//Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    }
);
// console.log(browserOpenPromise);
browserOpenPromise //fulfill
    .then(function (browser){
        console.log("browser is open");
        console.log(browserOpenPromise);
        // console.log(browser);
        //An array of all open pages inside the Browser.
        //returns an array with all the pages in all browser contexts
        let allTabsPromise = browser.pages();
        return allTabsPromise;
    })
    .then(function(allTabs){
        cTab = allTabs[0];
        console.log("new Tab");
        let visitingLoginPagePromise = cTab.goto("https://www.hackerrank.com/auth/login");
        return visitingLoginPagePromise;
    })
    .then(function(data){
        // console.log(data);
        console.log("Hackerrank login Page opened");
        //selector(where to type),data(what to type)
        let emailTypePromise = cTab.type("input[name='username']",email);
        return emailTypePromise;
    })
    .then(function(){
        console.log("email is type");
        let passwordTypePromise = cTab.type("input[name='password']",password);
        return passwordTypePromise;
    })
    .then(function(){
        console.log("password is type");
        let willbeLoggedInPromise = cTab.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");
        return willbeLoggedInPromise;
    })
    .then(function(){
        console.log("Logging Hackerrank is succesfuly");
        //waitAndClick will wait for the selector to load , and then click on the node
        let algorithmTabWillBeOpenedPromise = waitAndClick("div[data-automation='algorithms']");
        return algorithmTabWillBeOpenedPromise;
    })
    .then(function(){
        console.log("algorithm pagees is open");
        let allQuesPromise = cTab.waitForSelector('a[data-analytics="ChallengeListChallengeName"]');
        return allQuesPromise;
    })
    .then(function(){
        function getAllQuesLinks(){
            let allElemArr = document.querySelectorAll('a[data-analytics="ChallengeListChallengeName"]');
            let linksArr = [];
            for(let i = 0;i<allElemArr.length;i++){
                linksArr.push(allElemArr[i].getAttribute("href"));
            }
            return linksArr;
        }
        let linksArrPromise = cTab.evaluate(getAllQuesLinks);
        return linksArrPromise;
    })
    .then(function (linksArr){
        console.log("links to all ques received");
        // console.log(linksArr);
        //question solve krna h
                                //link to the question to besolved, idx of the linksArr
        let questionWillBeSolvedPromise = questionSolver(linksArr[0], 0);
        return questionWillBeSolvedPromise;
    }).
    then(function () {
        console.log("question is solved");
    })
    .catch(function(err){
        console.log(err);
    });

    function waitAndClick(algoBtn){
        let waitClickPromise = new Promise(function(resolve,reject){
            let waitForSelectorPromise = cTab.waitForSelector(algoBtn);
            waitForSelectorPromise
                .then(function(){
                    console.log("algo btn is found");
                    let clickPromise = cTab.click(algoBtn);
                    return clickPromise;
                }) 
                .then(function(){
                    console.log("algo btn is clicked");
                    resolve();
                }) 
                .catch(function(err){
                    reject(err);
                })
        });

        // waitClickPromise.then(function () {
        //   console.log("inside then of waitclick");
        // });
        return waitClickPromise;
    }

function questionSolver(url,idx){
    return new Promise(function (resolve,reject){
        let fullLink = `https://www.hackerrank.com${url}`;
        let goToQuesPagePromise = cTab.goto(fullLink);
        goToQuesPagePromise
            .then(function(){
                console.log("Question Opened");
                //tick the custom input box mark,
                let waitForCheckBoxAndClickPromise = waitAndClick(".checkbox-input");
                return waitForCheckBoxAndClickPromise;
            })
            .then(function(){
                //select the box where code will be typed
                let waitForTextBoxPromise = waitAndClick(".custominput");
                return waitForTextBoxPromise;
            })
            .then(function(){
                let codeWillBETypedPromise = cTab.type(".custominput",answer[idx]);
                return codeWillBETypedPromise;
            })
            .then(function(){
                //control key is pressed promise
                let controlPressedPromise = cTab.keyboard.press("Control");
                return controlPressedPromise;
            })
            .then(function(){
                let aKeyPressPromised = cTab.keyboard.press("a");
                return aKeyPressPromised;
            })
            .then(function(){
                let xKeyPressPromised = cTab.keyboard.press("x");
                return xKeyPressPromised;
            })
            .then(function(){
                //select the editor promise
                let cursorOnEditorPromise = cTab.click( ".monaco-editor.no-user-select.vs");
                return cursorOnEditorPromise;
            })
            .then(function(){
                let aKeyPressPromised = cTab.keyboard.press("a");
                return aKeyPressPromised;
            })
            .then(function(){
                let vKeyPressPromised = cTab.keyboard.press("v");
                return vKeyPressPromised;
            })
            .then(function(){
                let submitButton = cTab.click(".hr-monaco-submit");
                return submitButton;
            })
            .then(function () {
                let controlDownPromise = curTab.keyboard.up("Control");
                return controlDownPromise;
              })
              .then(function () {
                console.log("code submitted successfully");
                resolve();
              })
              .catch(function (err) {
                reject(err);
              });
            
    });
}