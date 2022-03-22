/*............................Passing Values to Functions with Arguments.....................*/
/*
    Parameters are variables that act as placeholders for the values that are to be input to a function 
    when it is called. When a function is defined, it is typically defined along with one or more parameters. 
    The actual values that are input (or "passed") into a function when it is called are known as arguments.

    Here is a function with two parameters, param1 and param2:
*/
console.log("-------------Passing Values to Functions with Arguments-----------------------");

function testFun(param1, param2) {
  console.log(`Add ${param1} and ${param2}: ${param1+param2}`);
}

testFun(1,2)

/*
    Then we can call testFun like this: testFun("Hello", "World");.
     We have passed two string arguments, Hello and World. Inside the function, param1 will equal 
     the string Hello and param2 will equal the string World. Note that you could call testFun again with 
     different arguments and the parameters would take on the value of the new arguments.
*/

//-------------------------------------------
function SayHi(params){
    console.log("params received:",params);
}

SayHi(100);
SayHi("Hello World!");
SayHi([1,2,3,4,5])