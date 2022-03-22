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

const myStorage = {
"car": {
    "inside": {
    "glove box": "maps",
    "passenger seat": "crumbs"
    },
    "outside": {
    "trunk": "jack"
    }
}
};

const gloveBoxContents = myStorage.car.inside["glove box"];      
  
  
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

const myPlants = [
{
    type: "flowers",
    list: [
    "rose",
    "tulip",
    "dandelion"
    ]
},
{
    type: "trees",
    list: [
    "fir",
    "pine",
    "birch"
    ]
}
];

const secondTree = myPlants[1].list[1];  
console.log(secondTree);    