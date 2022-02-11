//Object - Object is group of a key value pair...........

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

//update.............................
obj.age = 36;
console.log(obj.age);


