/*.......................Build JavaScript Objects...........................*/
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