/*.........................Return a Value from a Function with Return............................*/
/*
    We can pass values into a function with arguments. You can use a return statement to send 
    a value back out of a function.

Example
*/
console.log("---------------Return a Value from a Function with Return------------------------");
function plusThree(num) {
  return num * 3;
}

const answer = plusThree(5);
console.log(answer);
// answer has the value 8.

// plusThree takes an argument for num and returns a value equal to num + 3.

function add(a,b){
    return a+b;
}

let ans = add(2,6);
console.log(ans)
//--------------------------------------------------------

/*.............Understanding Undefined Value returned from a Function................*/
/*
  A function can include the return statement but it does not have to. 
  In the case that the function doesn't have a return statement, when you call it, 
  the function processes the inner code but the returned value is undefined.

Example
*/
let sum = 0;

function addSum(num) {
  sum = sum + num;
}

addSum(3);
/*
  addSum is a function without a return statement. The function will change the global sum 
  variable but the returned value of the function is undefined.
*/

/*..................Assignment with a Returned Value......................*/
/*
  If you'll recall from our discussion of Storing Values with the Assignment Operator, 
  everything to the right of the equal sign is resolved before the value is assigned. 
  This means we can take the return value of a function and assign it to a variable.

Assume we have pre-defined a function sum which adds two numbers together, then:
*/

ourSum = sum(5, 12);
/*
  will call the sum function, which returns a value of 17 and assigns it to the ourSum variable.

  Call the processArg function with an argument of 7 and assign its return value to the variable processed.
*/