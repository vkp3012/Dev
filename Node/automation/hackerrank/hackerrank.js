const puppeteer = require("puppeteer")
let {email,password} = require("./secrets")
// let email = ""
// let password = ""
let cTab;
let browserOpenPromise = puppeteer.launch(
    {
        headless :false,
        defaultViewport :null,
        args : ["--start-maximized"],
        // executablePath : "path/to/chrome"
    }
);

browserOpenPromise
    .then(function (browser){
        console.log("browser is open");
        // console.log(browser);
        let allTabsPromise = browser.pages();
        return allTabsPromise;
    })
    .then(function(allTabs){
        cTab = allTabs[0];
        console.log("new Tab");
        let visitingLoginPagePromise = cTab.goto("https://www.hackerrank.com/auth/login");
        return visitingLoginPagePromise;
    })
    .then(function(){
        console.log("Hackerrank login Page opened");
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
                    //resolve();
                }) 
                .catch(function(err){
                    console.log(err);
                })
        });

        // waitClickPromise.then(function () {
        //   console.log("inside then of waitclick");
        // });
        return waitClickPromise;
    }