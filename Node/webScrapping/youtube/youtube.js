let link = "https://www.youtube.com/playlist?list=PLzufeTFnhupyvzZABb2t8X2opAB-Z2uTK"
const puppeteer = require("puppeteer")

let cTab;
//async function use
(async function(){
    try {
        let browserOpen = puppeteer.launch({
            headless : false,
            defaultViewport : null,
            args : ["--start-maximized"]
        })

        let browserInstant = await browserOpen;
        let allTabArr = await browserInstant.pages();
        cTab = allTabArr[0];
        await cTab.goto(link)

        
    } catch (error) {
        console.log(error);
    }
})()
