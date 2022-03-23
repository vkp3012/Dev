/*...................Arrays are Objects...........................*/
//Arrays are a special type of objects. 
//The typeof operator in JavaScript returns "object" for arrays.But, JavaScript arrays are best described as arrays.

// Arrays use numbers to access its "elements". 
// In this example, 

// person[0] returns John:

//Array:
console.log("-----Array object-------");
const person = ["John", "Doe", 46];
//Objects use names to access its "members". In this example, person.firstName returns John:

//Object:
const person1 = {firstName:"John", lastName:"Doe", age:46};
console.table(person1);
//Array Elements Can Be Objects
//JavaScript variables can be objects. Arrays are special kinds of objects.

//you can have variables of different types in the same Array.

//You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array:

// myArray[0] = Date.now;
// myArray[1] = myFunction;
// myArray[2] = myCars;