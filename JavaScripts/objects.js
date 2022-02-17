//create a objects
let obj = {} ; //empty object
//console.log(obj);

//JS objects are always in key value pair.

let person = {
    name:"Vivek",
    age:27,
    phone:99999999,
    gender:"Male",
    height:"150cm"
}

//console.log(person);
//console.log(`Hey ${person.name} thank you for signing Up!`);
//console.log(person["name"]);

//nested of objects

let cap={
    firstName:"Steve",
    lastName:"Rogers",
    friends:["Bucky","Tony Strak","Brus Banner"],
    age:102,
    isAvenger:true,
    address:{
        State:"Manhattan",
        city:"New York",
        country:"USA"
    },
    SayHi: function(){
        console.log(`Hello my name is ${this.firstName}`)
    }
}

//console.log(cap);
console.log(cap.friends);
console.log(cap.friends[0]);
cap.SayHi();
