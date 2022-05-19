console.log("varName",varName);
var varName;
console.log("varName",varName);
var varName = "Vivek";

fn();
function fn(){
    console.log("Hello from fn");
}
fn();

console.log("varName",varName);

//Function Expression -> anonymous function ->  fnContainer(); -> TypeError: fnContainer is not a function
var fnContainer=function (){
    console.log("I'm an expression");
}
fnContainer();