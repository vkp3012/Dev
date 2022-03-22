//Object Property:-

/*      There are two ways to access the properties of an object: 
            1).dot notation (.)  
                Dot notation is what you use when you know the name of the property 
                you're trying to access ahead of time.

            2).bracket notation ([]), similar to an array.
*/

/*..................Accessing Object Properties with Dot Notation....................*/
//Here is a sample of using dot notation (.) to read an object's property:

const myObj = {
    prop1: "val1",
    prop2: "val2"
};
 
console.log("-----------Accessing Object Properties with Dot Notation 1-------------------");  
const prop1val = myObj.prop1;
console.log(prop1val)
const prop2val = myObj.prop2;
console.log(prop2val)
  
  /*      1).prop1val would have a value of the string val1.
          2).prop2val would have a value of the string val2.

          -------- Read in the property values of testObj using dot notation. 
          Set the variable hatValue equal to the object's property hat 
          and set the variable shirtValue equal to the object's property shirt.---------------
  */
  
// Setup
const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};
console.log("-------------Accessing Object Properties with Dot Notation 2----------------------");
// Only change code below this line
const hatValue = testObj.hat;      // Change this line
const shirtValue = testObj.shirt; 
console.log(hatValue);
console.log(shirtValue);
  
/*..................Accessing Object Properties with Bracket Notation........................*/
/*

        1).The second way to access the properties of an object is bracket notation ([]). 
            If the property of the object you are trying to access has a space in its name,
            you will need to use bracket notation.
        2).However, you can still use bracket notation on object properties without spaces.
*/

//Here is a sample of using bracket notation to read an object's property:
  
const myObj2 = {
"Space Name": "Kirk",
"More Space": "Spock",
"NoSpace": "USS Enterprise"
};
console.log("----------------Accessing Object Properties with Bracket Notation -----------------------");
console.log(myObj2["Space Name"]);
console.log(myObj2['More Space']);
console.log(myObj2["NoSpace"]);
  
/*
        1).myObj["Space Name"] would be the string Kirk, 
        2).myObj['More Space'] would be the string Spock,
        3).myObj["NoSpace"] would be the string USS Enterprise.
*/

//Note that property names with spaces in them must be in quotes (single or double).

/*.................Accessing Object Properties with Variables.............................*/

/*
        1).Another use of bracket notation on objects is to access a property 
            which is stored as the value of a variable. 
        2).This can be very useful for iterating through an object's properties or
            when accessing a lookup table.
*/
  
//Here is an example of using a variable to access a property:

const dogs = {
Fido: "Mutt",
Hunter: "Doberman",
Snoopie: "Beagle"
};
console.log("-------------Accessing Object Properties with Variables 1------------------");
const myDog = "Hunter";
const myBreed = dogs[myDog];
console.log(myBreed);

/*
    1).The string Doberman would be displayed in the console.
    2).Another way you can use this concept is when the property's name is collected dynamically 
        during the program execution, as follows:
*/
  
  
const someObj = {
propName: "John"
};

function propPrefix(str) {
const s = "prop";
return s + str;
}

const someProp = propPrefix("Name");
console.log(someObj[someProp]);

/* 
        1).someProp would have a value of the string propName, 
            and the string John would be displayed in the console.
        2).Note that we do not use quotes around the variable name 
            when using it to access the property because we are using the value of the variable, not the name.
        3).Set the playerNumber variable to 16. Then, use the variable to look up 
            the player's name and assign it to player.

*/
  
  /*.....................Updating Object Properties..........................*/
  
  /*
          1).After you've created a JavaScript object, you can update its properties at any time 
             just like you would update any other variable.
          2).You can use either dot or bracket notation to update.
  */
  
  //For example, let's look at ourDog:
  
  const ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
  };
  
  
  /*
          1).Since he's a particularly happy dog, 
             let's change his name to the string Happy Camper. 
             Here's how we update his object's name property: 
  */
  
  ourDog.name = "Happy Camper";
  console.log(ourDog.name)
  //or ourDog["name"] = "Happy Camper";
   
  //Now when we evaluate ourDog.name, instead of getting Camper, we'll get his new name, Happy Camper.
  
  //Update the myDog object's name property. Let's change her name from Coder to Happy Coder. You can use either dot or bracket notation.
  
  
  /*.......................Add New Properties to a JavaScript Object......................*/
  
  /*
          1).You can add new properties to existing JavaScript objects the same way you would modify them.
          2).Here's how we would add a bark property to ourDog:
  
                          ourDog.bark = "bow-wow";
                          or
                          ourDog["bark"] = "bow-wow";
  
  Now when we evaluate ourDog.bark, we'll get his bark, bow-wow.
  */
  //Example:
  
  const ourDog1 = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
  };
  
  ourDog1.bark = "bow-wow";
  console.log(ourDog1)
  /*  Add a bark property to myDog and set it to a dog sound, 
      such as "woof". You may use either dot or bracket notation.
  */
  
  /*.....................Delete Properties from a JavaScript Object....................*/
  //We can also delete properties from objects like this:
  
  delete ourDog1.bark;
  console.log(ourDog1)
  