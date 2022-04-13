const puppeteer = require('puppeteer');
//let link = "https://www.youtube.com/playlist?list=PLzufeTFnhupyvzZABb2t8X2opAB-Z2uTK"
let cTab;

let browserOpen = puppeteer.launch({
    headless:false,
    defaultViewport:null,
    args:["--start-maximized"]
})

browserOpen
    .then(function(browser){
        console.log("open browser");
        let allTabArr = browser.pages();
        return allTabArr;
    })
    .then(function(allTabs){
        cTab = allTabs[0];
        let link = cTab.goto("https://www.youtube.com/playlist?list=PLzufeTFnhupyvzZABb2t8X2opAB-Z2uTK");
        return link;
    })
    .then(function(){
        console.log("youtube play list open");
    })
    .catch(function(err){
        console.log(err);
    })

