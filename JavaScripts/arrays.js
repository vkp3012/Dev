//Arrays is collection of elements
//Define Arrays
let cars = ["BMW","AUDI","MG",1,2,3,true];
//console.log(cars);

// In JS u can store different types of values of different types of arrays...........
//--------------------------------------------------------

//Accessing the elements of of an Arrays
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[4]);
//--------------------------------------------------------

// Replacing elements in Arrays....
cars[0] = "TATA";
console.log(cars);
//--------------------------------------------------------

// Adding elements in arrays....
cars[7] = "Honda";
console.log(cars);
//--------------------------------------------------------

//Method of an Arrays..

//1). POP Method:- This method removed the elements from the last of arrays....
cars.pop();
console.log("after pop an elements\n"+cars);
//--------------------------------------------------------

//2). Push Method:- This method a new elements at the end of the array....
cars.push("BMW")
console.log("after pushing an elements \n" + cars)
//--------------------------------------------------------

//3).Unshift Method:- This method add the elements from the starting of arrays....
cars.unshift("JLR");
console.log(cars)
//--------------------------------

//4).Shift Method:- This method remove the elements from the 0th index of arrays...
cars.shift();
console.log(cars);
//--------------------------------------------------------

// Find Length
console.log(cars.length);
//--------------------------------------------------------


//2D Arrays..

let arrays2d = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

console.log(arrays2d);
console.table(arrays2d);