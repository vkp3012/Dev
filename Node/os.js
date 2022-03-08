const os = require("os")

let mySystemArch = os.arch();
console.log(mySystemArch);

let mycpuInfo = os.cpus();
console.log(mycpuInfo);

let hostName = os.hostname();
console.log(hostName);

let network = os.networkInterfaces();
console.log(network);

console.log(os.release());

console.log(os.totalmem());

console.log(os.uptime());

console.log(os.userInfo());

console.log(os.platform());

console.log(os.type());