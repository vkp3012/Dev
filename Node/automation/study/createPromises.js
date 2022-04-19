//constructing a promise

let myPromise = new Promise (function(resolve,reject){
    let a = "pepcoders";
    let b = "pepcoders";

    if(a===b){
        resolve("The values are equals");
        //resolves function is responsible for fulfillment of promise
    } else {
        reject("No,The values are not equal.")
    }
});

myPromise.then(function (result){
    console.log(" " + result);
})

myPromise.catch(function (result){
    console.log(' ' + result);
})