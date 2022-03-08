/*
    This module provied function that you can use retrieve information from the undeline os and interact with it.
*/

const os = require("os")

//return the underline architecture
let mySystemArch = os.arch();
console.log(mySystemArch);

//return information of cpus
let mycpuInfo = os.cpus();
console.log(mycpuInfo);


//returns the host name of the os as a string
let hostName = os.hostname();
console.log(hostName);

//return an object containing network that have been assigned a network address.
let network = os.networkInterfaces();
console.log(network);

//return the os as a string
console.log(os.release());

//return the total amount of system memory in bytes as an interger
console.log(os.totalmem());

//return the system uptime in number of second
console.log(os.uptime());

//return information about the currently effective user
console.log(os.userInfo());

//return a platfrom node js
console.log(os.platform());

//return the os name
console.log(os.type());