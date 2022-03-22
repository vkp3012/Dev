/*.........................Use Conditional Logic with If Statements..........................*/
/*
  if statements are used to make decisions in code. The keyword if tells JavaScript to execute 
  the code in the curly braces under certain conditions, defined in the parentheses. 
  These conditions are known as Boolean conditions and they may only be true or false.

  When the condition evaluates to true, the program executes the statement inside the curly braces. When the Boolean condition evaluates to false, the statement inside the curly braces will not execute.

Pseudocode

if (condition is true) {
  statement is executed
}
Example
*/

function test (myCondition) {
    if (myCondition) {
      return "It was true";
    }
    return "It was false";
  }
  
  test(true);
  test(false);
  
  /*
    test(true) returns the string It was true, and test(false) returns the string It was false.
  
    When test is called with a value of true, the if statement evaluates myCondition to see if it is true or not.
     Since it is true, the function returns It was true. When we call test with a value of false, 
     myCondition is not true and the statement in the curly braces is not executed and the function returns 
     It was false.
  */
  
  /*..............Comparison with the Equality Operator..............*/
  /*
    There are many comparison operators in JavaScript. All of these operators return a boolean true or false value.
  
    The most basic operator is the equality operator ==. The equality operator compares two values and 
    returns true if they're equivalent or false if they are not. Note that equality is different from 
    assignment (=), which assigns the value on the right of the operator to a variable on the left.
  */
  
  function equalityTest(myVal) {
    if (myVal == 10) {
      return "Equal";
    }
    return "Not Equal";
  }
  /*
    If myVal is equal to 10, the equality operator returns true, so the code in the curly braces will execute, 
    and the function will return Equal. Otherwise, the function will return Not Equal. 
    In order for JavaScript to compare two different data types (for example, numbers and strings), 
    it must convert one type to another. This is known as Type Coercion. Once it does, however,
     it can compare terms as follows:
  
      1   ==  1  // true
      1   ==  2  // false
      1   == '1' // true
      "3" ==  3  // true
  */  
  
  /*..................Comparison with the Strict Equality Operator........................*/
  /*
    Strict equality (===) is the counterpart to the equality operator (==). However, unlike the equality operator,
     which attempts to convert both values being compared to a common type, the strict equality operator does not 
     perform a type conversion.
  
    If the values being compared have different types, they are considered unequal, and the strict equality 
    operator will return false.
  
  Examples
  
  3 ===  3  // true
  3 === '3' // false
  In the second example, 3 is a Number type and '3' is a String type.
  */
  
  function compareEquality(a, b) {
    if (a === b) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  compareEquality(10, "10");
  compareEquality("20", 20);
  
  /*...............Comparison with the Inequality Operator.................*/
  /*
  The inequality operator (!=) is the opposite of the equality operator. It means not equal and returns false where equality would return true and vice versa. Like the equality operator, the inequality operator will convert data types of values while comparing.
  
  Examples
  
  1 !=  2    // true
  1 != "1"   // false
  1 != '1'   // false
  1 != true  // false
  0 != false // false
  Add the inequality operator != in the if statement so that the function will return 
  the string Not Equal when val is not equivalent to 99.
  */
  // Setup
  function testNotEqual(val) {
    if (val != 99) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testNotEqual(10);
  
  /*....................Comparison with the Strict Inequality Operator............................*/
  /*
    The strict inequality operator (!==) is the logical opposite of the strict equality operator. 
    It means "Strictly Not Equal" and returns false where strict equality would return true and vice versa. 
    The strict inequality operator will not convert data types.
  
  Examples
  
  3 !==  3  // false
  3 !== '3' // true
  4 !==  3  // true
  Add the strict inequality operator to the if statement so the function will return the string Not Equal
   when val is not strictly equal to 17
  */
  
  // Setup
  function testStrictNotEqual(val) {
    if (val !== 17) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testStrictNotEqual(10);
  
  /*..............Comparison with the Greater Than Operator.........................*/
  /*
    The greater than operator (>) compares the values of two numbers. If the number to the left is 
    greater than the number to the right, it returns true. Otherwise, it returns false.
  
  Like the equality operator, the greater than operator will convert data types of values while comparing.
  
  Examples
  
  5   >  3  // true
  7   > '3' // true
  2   >  3  // false
  '1' >  9  // false
  Add the greater than operator to the indicated lines so that the return statements make sense.
  */
  function testGreaterThan(val) {
    if (val>100) {  // Change this line
      return "Over 100";
    }
  
    if (val>10) {  // Change this line
      return "Over 10";
    }
  
    return "10 or Under";
  }
  
  testGreaterThan(10);
  
  /*....................Comparison with the Greater Than Or Equal To Operator......................*/
  /*
    The greater than or equal to operator (>=) compares the values of two numbers.
    If the number to the left is greater than or equal to the number to the right, it returns true. 
    Otherwise, it returns false.
  
    Like the equality operator, the greater than or equal to operator will convert data types while comparing.
  
  Examples
  
  6   >=  6  // true
  7   >= '3' // true
  2   >=  3  // false
  '7' >=  9  // false
  Add the greater than or equal to operator to the indicated lines so that the return statements make sense.
  */
  
  function testGreaterOrEqual(val) {
    if (val>=20) {  // Change this line
      return "20 or Over";
    }
  
    if (val>=10) {  // Change this line
      return "10 or Over";
    }
  
    return "Less than 10";
  }
  
  testGreaterOrEqual(10);
  
  /*......................Comparison with the Less Than Operator.....................*/
  /*
    The less than operator (<) compares the values of two numbers. 
    If the number to the left is less than the number to the right, it returns true. 
    Otherwise, it returns false. Like the equality operator, the less than operator converts data types 
    while comparing.
  
  Examples
  
  2   < 5 // true
  '3' < 7 // true
  5   < 5 // false
  3   < 2 // false
  '8' < 4 // false
  Add the less than operator to the indicated lines so that the return statements make sense.
  */
  
  function testLessThan(val) {
    if (val<=25) {  // Change this line
      return "Under 25";
    }
  
    if (val<=55) {  // Change this line
      return "Under 55";
    }
  
    return "55 or Over";
  }
  
  testLessThan(10);
  
  /*.................Comparison with the Less Than Or Equal To Operator....................*/
  /*
    The less than or equal to operator (<=) compares the values of two numbers. 
    If the number to the left is less than or equal to the number to the right, it returns true. 
    If the number on the left is greater than the number on the right, it returns false.
    Like the equality operator, the less than or equal to operator converts data types.
  
  Examples
  
  4   <= 5 // true
  '7' <= 7 // true
  5   <= 5 // true
  3   <= 2 // false
  '8' <= 4 // false
  Add the less than or equal to operator to the indicated lines so that the return statements make sense.
  */
  
  function testLessOrEqual(val) {
    if (val<=12) {  // Change this line
      return "Smaller Than or Equal to 12";
    }
  
    if (val<=24) {  // Change this line
      return "Smaller Than or Equal to 24";
    }
  
    return "More Than 24";
  }
  
  testLessOrEqual(10);
  
  
  /*................Comparisons with the Logical And Operator........................*/
  /*
    Sometimes you will need to test more than one thing at a time. 
    The logical and operator (&&) returns true if and only if the operands to the left and right of it are true.
  
  The same effect could be achieved by nesting an if statement inside another if:
  */
//   if (num > 5) {
//     if (num < 10) {
//       return "Yes";
//     }
//   }
//   return "No";
  //will only return Yes if num is greater than 5 and less than 10. The same logic can be written as:
  
//   if (num > 5 && num < 10) {
//     return "Yes";
//   }
//   return "No";
  
  /*
    Replace the two if statements with one statement, using the && operator, 
    which will return the string Yes if val is less than or equal to 50 and greater than or equal to 25. 
    Otherwise, will return the string No.
  */
  
  /*.....................Introducing Else Statements...................*/
  /*
    When a condition for an if statement is true, the block of code following it is executed. 
    What about when that condition is false? Normally nothing would happen. 
    With an else statement, an alternate block of code can be executed.
  */
  
//   if (num > 10) {
//     return "Bigger than 10";
//   } else {
//     return "10 or Less";
//   }
  //Combine the if statements into a single if/else statement.
  
  /*...............Introducing Else If Statements.....................*/
  /*
    If you have multiple conditions that need to be addressed, you can chain if statements together 
    with else if statements.
  */
  
//   if (num > 15) {
//     return "Bigger than 15";
//   } else if (num < 5) {
//     return "Smaller than 5";
//   } else {
//     return "Between 5 and 15";
//   }