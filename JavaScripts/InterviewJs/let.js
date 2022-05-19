//declare
let varName;

//default -> undefined

console.log("line Number 6", varName);

varName = 10;

//re-assign -> possible
varName = 20;

console.log("line Number 11", varName);

//redeclare -> ❌
//Syntax Error -> Identifier "varName" has already has declared

/*-----------------------------Question 1-------------------------------------*/

let randomValue = { name: "Lydia" };
randomValue = 23;

if (!typeof randomValue === "string") {
  console.log("It's not a string!");
} else {
  console.log("Yay it's a string!");
}