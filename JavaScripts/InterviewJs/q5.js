var a = 10;
console.log("line Number 2 ",a);

function fn(){
    console.log("line Number 5" , a);
    var a = 20;
    a++;
    console.log("line number 8",a);
    if(a){
        var a = 30;
        a++;
        console.log("line number 12",a);
    }
    console.log("line number 14",a);
}
fn();
console.log("line number 17",a);