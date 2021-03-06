// const
//const declaration create variable that cannot be reassigned to some other value or redeclared later/ 
//It was introduce in ES6 (2015).
//The const variable is used for declaring a constant or fixed value whose value cannot be changed.

// reclearing and reassigned - â

//const -> block scope

const a = 10
console.log(a);

/*------------------------------- ð Question 1 ð---------------------------------*/

const randomValue = 21;

function getInfo() {
    console.log(typeof randomValue);
    var randomValue = 'Lydia Hallie';
}

getInfo();

// // A: "number"
// // B: "string"
// // C: undefined ð
// // D: ReferenceError


/*------------------------------- ð Question 2 ð---------------------------------*/

let num = 1;
const list = ['ðĨģ', 'ðĪ ', 'ðĨ°', 'ðĪŠ'];

console.log(list[(num += 1)]);
// // A: ðĪ 
// // B: ðĨ°   -> ð
// // C: SyntaxError
// // D: ReferenceError
