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
