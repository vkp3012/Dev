//Object - Object is group of a key value pair...........

/* 
........1).Objects are similar to arrays, except that instead of using
           indexes to access and modify their data, you access the data 
           in objects through what are called properties.
        2).Objects are useful for storing data in a structured way, 
           and can represent real world objects, like a cat.
*/


//Here's a sample cat object:

const cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};

console.log(cat);


/*      In this example, all the properties are stored as strings, 
        such as name, legs, and tails. However, you can also use numbers as properties.
        You can even omit the quotes for single-word string properties, as follows:
*/

const anotherObject = {
  make: "Ford",
  5: "five",
  "model": "focus",
  6:"Six"
};

console.log(anotherObject);

/*      1).However, if your object has any non-string properties, 
           JavaScript will automatically typecast them as strings.
        2).Make an object that represents a dog called myDog which contains 
           the properties name (a string), legs, tails and friends.
        3).You can set these object properties to whatever values you want, 
           as long as name is a string, legs and tails are numbers, and friends is an array.
*/


let obj ={
    name:'Steve',
    lastname:"Rogers",
    address :{
        city:"manthutten",
        state:"New York",
    },
    age : 35,
    isAvenger:true,
    movies:["First Avenger","Winter Soldier","Civil War"],
    SayHi:function(){
        console.log("Cap say's Hi.")
    }
}

///------------------------------------------
// console.log(obj.name)
// console.log(obj.age);
// console.log(obj.movies);
// console.log(obj.movies[0])
// obj.SayHi();

// console.log(obj.address)
//-----------------------------------------------

/*..................Accessing Object Properties with Dot Notation....................*/

/*      There are two ways to access the properties of an object: 
            1).dot notation (.)  
                Dot notation is what you use when you know the name of the property 
                you're trying to access ahead of time.

            2).bracket notation ([]), similar to an array.
*/

//Here is a sample of using dot notation (.) to read an object's property:

const myObj = {
  prop1: "val1",
  prop2: "val2"
};

const prop1val = myObj.prop1;
console.log(prop1val)
const prop2val = myObj.prop2;
console.log(prop2val)

/*      1).prop1val would have a value of the string val1.
        2).prop2val would have a value of the string val2.
        ---- Read in the property values of testObj using dot notation. 
        Set the variable hatValue equal to the object's property hat 
        and set the variable shirtValue equal to the object's property shirt.----
*/

// Setup
const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
  };
  
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

console.log(myObj2["Space Name"]);
//myObj['More Space'];
//myObj["NoSpace"];

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

/*.......................Using Objects for Lookups.............................*/
/*
    Objects can be thought of as a key/value storage, like a dictionary. 
    If you have tabular data, you can use an object to lookup values rather than 
    a switch statement or an if/else chain. This is most useful when you know that 
    your input data is limited to a certain range.
*/

//Here is an example of a simple reverse alphabet lookup:

const alpha = {
  1:"Z",
  2:"Y",
  3:"X",
  4:"W",
  24:"C",
  25:"B",
  26:"A"
};

alpha[2];
console.log(alpha[2])
alpha[24];
console.log(alpha[24])

const value = 2;
alpha[value];
console.log(alpha[value])

//alpha[2] is the string Y, alpha[24] is the string C, and alpha[value] is the string Y.

/* 
    Convert the switch statement into an object called lookup. 
    Use it to look up val and assign the associated string to the result variable.
*/

/*......................Testing Objects for Properties...........................*/

/*
    Sometimes it is useful to check if the property of a given object exists or not.
    We can use the .hasOwnProperty(propname) method of objects to determine if that object has 
    the given property name. .hasOwnProperty() returns true or false if the property is found or not.
*/

//Example

const myObj = {
  top: "hat",
  bottom: "pants"
};

myObj.hasOwnProperty("top");
myObj.hasOwnProperty("middle");

//The first hasOwnProperty returns true, while the second returns false.

/*
    Modify the function checkObj to test if an object passed to the function (obj) 
    contains a specific property (checkProp). If the property is found, 
    return that property's value. If not, return "Not Found".

*/

/*...........................Manipulating Complex Objects...............*/
/*
        Sometimes you may want to store data in a flexible Data Structure.
        A JavaScript object is one way to handle flexible data. 
        They allow for arbitrary combinations of strings, numbers, booleans, arrays, functions, and objects.
*/

//Here's an example of a complex data structure:

const ourMusic = [
  {
    "artist": "Daft Punk",
    "title": "Homework",
    "release_year": 1997,
    "formats": [ 
      "CD", 
      "Cassette", 
      "LP"
    ],
    "gold": true
  }
];


/*
        This is an array which contains one object inside. 
        The object has various pieces of metadata about an album. 
        It also has a nested formats array. 
        If you want to add more album records, you can do this by adding records to the top level array.
        Objects hold data in a property, which has a key-value format. 
        In the example above, "artist": "Daft Punk" is a property that has a key of artist and
        a value of Daft Punk. JavaScript Object Notation or JSON is a related data interchange
        format used to store data.

{
  "artist": "Daft Punk",
  "title": "Homework",
  "release_year": 1997,
  "formats": [ 
    "CD",
    "Cassette",
    "LP"
  ],
  "gold": true
}
Note: You will need to place a comma after every object in the array, unless it is the last object in the array.

Add a new album to the myMusic array. Add artist and title strings, release_year number, and a formats array of strings.
*/

/*.................Accessing Nested Objects....................*/

//The sub-properties of objects can be accessed by chaining together the dot or bracket notation.

//Here is a nested object:

const ourStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": { 
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};

ourStorage.cabinet["top drawer"].folder2;
ourStorage.desk.drawer;
ourStorage.cabinet["top drawer"].folder2 

//would be the string secrets, and ourStorage.desk.drawer would be the string stapler.

/*
    Access the myStorage object and assign the contents of the glove box property to 
    the gloveBoxContents variable. Use dot notation for all properties where possible, 
    otherwise use bracket notation.
*/


/*....................Accessing Nested Arrays........................*/

/*
        As we have seen in earlier examples,
         objects can contain both nested objects and nested arrays. 
         Similar to accessing nested objects, array bracket notation can be chained to access nested arrays.
*/

//Here is an example of how to access a nested array:

const ourPets = [
  {
    animalType: "cat",
    names: [
      "Meowzer",
      "Fluffy",
      "Kit-Cat"
    ]
  },
  {
    animalType: "dog",
    names: [
      "Spot",
      "Bowser",
      "Frankie"
    ]
  }
];

ourPets[0].names[1];
ourPets[1].names[0];
ourPets[0].names[1] 

//would be the string Fluffy, and ourPets[1].names[0] would be the string Spot.

/*
    Using dot and bracket notation, set the variable secondTree to the second 
    item in the trees list from the myPlants object.
*/


/*............................Record Collection...........................*/

/*
    You are given an object literal representing a part of your musical album collection. 
    Each album has a unique id number as its key and several other properties. 
    Not all albums have complete information.

    You start with an updateRecords function that takes an object literal, records, 
    containing the musical album collection, an id, a prop (like artist or tracks), 
    and a value. Complete the function using the rules below to modify the object passed to the function.

    Your function must always return the entire record collection object.
    If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
    If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
    If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
    If value is an empty string, delete the given prop property from the album.
    Note: A copy of the recordCollection object is used for the tests.
*/

// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (prop !== 'tracks' && value !== "") {
    records[id][prop] = value;
  } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
    records[id][prop] = [value];
  } else if (prop === "tracks" && value !== "") {
    records[id][prop].push(value);
  } else if (value === "") {
    delete records[id][prop];
  }
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');


//update value...........................
obj.age = 36;
console.log(obj.age);

//Set...................;