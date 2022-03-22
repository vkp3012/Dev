//Automatic Type conversion
//Always String 
//String and interger are addition than return to string.
var ans = "5" + 1;
console.log(ans)

var ans1 = 1 + "5";
console.log(ans1);

var ans2 = "1" + "5";
console.log(ans2);

var ans3 = "str" + 1;
console.log(ans3);

var ans4 = 1 + "str";
console.log(ans4);

console.log("---------------------------------");

//string and interger are subtraction than return interger value i.e
console.log("5"-1);
console.log(3-"1");
console.log(2-"5");

console.log("---------------------------------------");
//string and interger are multiply than alwaya return is NAN.
var ans5 = "str"*5;
console.log(ans5);

console.log("10"*3);
console.log(10*3);
console.log("---------------------------------------");
//null:- null always return to 0. 
console.log(null*5);

console.log("---------------------------------------");
//undefined:- undefined always return to NAN.
console.log(undefined*5);