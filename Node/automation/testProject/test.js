let link = "https://testproject.io/contact-us/"

// let firstname = "Testing UI Automation"
// let lastname = "Test last Name"
// let companymail ="test@testmail.com";
// let phone = "9544486837"
// let message = "This is a test message created by automated testing of UI using Puppeteer";

const puppeteer = require("puppeteer")
let cTab;

(async function(){
    try {
        let browserOpen = puppeteer.launch({
            headless:false,
            defaultViewport:null,
            args:["--start-maximized"]
        })

        let browserInstant = await browserOpen;
        let allTabArr = await browserInstant.pages();
        cTab = allTabArr[0];
        await cTab.goto(link);

        //Waiting for form to load
        await cTab.waitFor('.wpcf7-form');

        //name
        let fname = await cTab.waitForSelector("#firstName");
        await fname.type("vivek")

        //last name
        let lname=await cTab.waitForSelector("#lastName")
        await lname.type('patel');

        //email
        let email=await cTab.waitForSelector("#companyEmail")
        await email.type("vivel@gmail.com")

        //phone
        let phone=await cTab.type(".wpcf7-form-control.wpcf7-text.wpcf7-tel.wpcf7-validates-as-tel");
        await phone.type("99444868387");

        //Waiting for dropdown element and clicking on it
        const dropdown = "#select2-subject-container";
        await cTab.waitForSelector(dropdown);
        await cTab.click(dropdown);
        
        //Enter on subject
        await cTab.keyboard.press('Enter'); 

        //message
        let msg = await cTab.type(".wpcf7-form-control.wpcf7-textarea.wpcf7-validates-as-required")
        await msg.type("This is a test message created by automated testing of UI using Puppeteer")

        //Clicking on Contact us
        await cTab.keyboard.press('Tab');
        await cTab.keyboard.press('Enter');  
        
        //Take screenshot of filled form UI
        await cTab.screenshot({path: 'afterfill.png'});
        
        //Wait for form to be submitted
        await cTab.waitForSelector(".wpcf7-form-control.wpcf7-submit");
        
        //Take screenshot of after submit form UI
        await cTab.screenshot({path: 'aftersubmit.png'});
        
        // await browserOpen.close();

    } catch (error) {
        console.log(error);
    }
})()