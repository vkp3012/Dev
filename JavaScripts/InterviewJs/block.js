//A block is a pair of braces ({...}) used to group multiple statements.

/*------------------------------- 📝 Question 1 📝---------------------------------*/

// let fruits = "apple"
// console.log(fruits);

// {
//     let fruits;
//     console.log(fruits);
//     fruits = "orange";
//     console.log(fruits);
// }

// console.log(fruits);


/*------------------------------- 📝 Question 2 📝---------------------------------*/

// let fruits = "apple"
// console.log(fruits);

// {
//     console.log(fruits); //ReferenceError: Cannot access 'fruits' before initialization
//     let fruits;
//     console.log(fruits);
//     fruits = "orange";
//     console.log(fruits);
// }

// console.log(fruits);


/*------------------------------- 📝 Question 3 📝---------------------------------*/

let fruits = "apple"
console.log(fruits);

{
    
    let fruits;
    console.log(fruits);
    fruits = "orange";
    console.log(fruits);
    {
        console.log(fruits);
    }
}

console.log(fruits);