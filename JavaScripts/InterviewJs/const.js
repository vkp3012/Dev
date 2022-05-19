// const
//const declaration create variable that cannot be reassigned to some other value or redeclared later/ 
//It was introduce in ES6 (2015).
//The const variable is used for declaring a constant or fixed value whose value cannot be changed.

// reclearing and reassigned - ❌

//const -> block scope

const a = 10
console.log(a);

/*------------------------------- 📝 Question 1 📝---------------------------------*/

const randomValue = 21;

function getInfo() {
    console.log(typeof randomValue);
    var randomValue = 'Lydia Hallie';
}

getInfo();

// // A: "number"
// // B: "string"
// // C: undefined 🎉
// // D: ReferenceError


/*------------------------------- 📝 Question 2 📝---------------------------------*/

let num = 1;
const list = ['🥳', '🤠', '🥰', '🤪'];

console.log(list[(num += 1)]);
// // A: 🤠
// // B: 🥰   -> 🎉
// // C: SyntaxError
// // D: ReferenceError
