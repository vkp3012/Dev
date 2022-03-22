/*.....................Iterate with JavaScript For Loops.......................*/

/*
    You can run the same code multiple times by using a loop.

    The most common type of JavaScript loop is called a for loop because it runs for a specific number of times.

    For loops are declared with three optional expressions separated by semicolons:

    for (a; b; c), where a is the initialization statement, b is the condition statement, and c is the final expression.

    The initialization statement is executed one time only before the loop starts. 
    It is typically used to define and setup your loop variable.

    The condition statement is evaluated at the beginning of every loop iteration and will continue as long as 
    it evaluates to true. When the condition is false at the start of the iteration, the loop will stop executing. 
    This means if the condition starts as false, your loop will never execute.

    The final expression is executed at the end of each loop iteration, prior to the next condition check and 
    is usually used to increment or decrement your loop counter.

    In the following example we initialize with i = 0 and iterate while our condition i < 5 is true. 
    We'll increment i by 1 in each loop iteration with i++ as our final expression.

*/

const ourArray1 = [];

for (let i = 0; i < 5; i++) {
  ourArray1.push(i);
}
//ourArray will now have the value [0, 1, 2, 3, 4].

//Use a for loop to push the values 1 through 5 onto myArray.


// Setup
const myArray1 = [];

// Only change code below this line
for(let i = 1;i<=5;i++){
  myArray1.push(i);
}

/*.................Iterate Odd Numbers With a For Loop.................*/

/*
    For loops don't have to iterate one at a time. By changing our final-expression, 
    we can count by even numbers.

    We'll start at i = 0 and loop while i < 10. We'll increment i by 2 each loop with i += 2.
*/

const ourArray2 = [];

for (let i = 0; i < 10; i += 2) {
  ourArray2.push(i);
}

/*
    ourArray will now contain [0, 2, 4, 6, 8]. Let's change our initialization so we can count by odd numbers.

    Push the odd numbers from 1 through 9 to myArray using a for loop.
*/

// Setup
const myArray2 = [];

// Only change code below this line
for (let i = 1; i < 10; i += 2) {
  myArray2.push(i);
}


/*........................Count Backwards With a For Loop....................*/

/*
    A for loop can also count backwards, so long as we can define the right conditions.

    In order to decrement by two each iteration, we'll need to change our initialization, condition, and 
    final expression.

    We'll start at i = 10 and loop while i > 0. We'll decrement i by 2 each loop with i -= 2.
*/

const ourArray3 = [];

for (let i = 10; i > 0; i -= 2) {
  ourArray3.push(i);
}

/*
    ourArray will now contain [10, 8, 6, 4, 2]. Let's change our initialization and final 
    expression so we can count backwards by twos to create an array of descending odd numbers.

    Push the odd numbers from 9 through 1 to myArray using a for loop.
*/
// Setup
const myArray3 = [];

// Only change code below this line
for(let i = 9;i>0;i-=2){
  myArray3.push(i);
}


/*...................Iterate Through an Array with a For Loop............................*/

/*
    A common task in JavaScript is to iterate through the contents of an array. 
    One way to do that is with a for loop. This code will output each element of the array arr to the console:
*/

const arr = [10, 9, 8, 7, 6];

for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}
/*
    Remember that arrays have zero-based indexing, which means the last index of the array is length - 1. 
    Our condition for this loop is i < arr.length, which stops the loop when i is equal to length. 
    In this case the last iteration is i === 4 i.e. when i becomes equal to arr.length - 1 and outputs 
    6 to the console. Then i increases to 5, and the loop terminates because i < arr.length is false.

    Declare and initialize a variable total to 0. Use a for loop to add the value of each element of 
    the myArr array to total.
*/

// Setup
const myArr = [2, 3, 4, 5, 6];

// Only change code below this line
let total = 0;
for(let i = 0;i<myArr.length;i++){
  total += myArr[i];
}