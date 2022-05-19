console.log("varName", varName); //varName undefined
var varName = 10;

function b(){
    console.log("line number 5 ",varName); //line number 5 10
}

console.log("line number 8 ",varName);//line number 8 10

// fn()
function fn(){
    console.log("line number 11 ",varName); //line number 11  undefined
    var varName = 20;
    b();
    console.log("line number 14 ",varName); //line number 14 20
}
fn()

// function call -> Excution context (EC)
//scope -> Area where a function a variable can be found.
