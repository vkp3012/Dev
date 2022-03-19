const request = require("request");
request("https://www.worldometers.info/coronavirus/?utm%C3%A2%C2%80%C2%94campaign=homeAdUOA?Si",cb);

function cb(err,res,body){
    console.log("error",err);
    console.log(body);
}