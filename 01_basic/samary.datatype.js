
// ********premitive data type***********


// const score = 100;
// console.log(score);
// console.log(typeof score);

const someNamber = "asif1230";
console.log(typeof someNamber);

let isLoggedIn = null;
console.log(typeof isLoggedIn);


const id = Symbol('123');
const anotherid = Symbol('123');
console.log(id === anotherid);

// const bigNumber = 45678912528515n
// console.log(bigNumber);

//----------non- premitive data type-----------
//  object
// array
// function


const heros= ["sharukh", "ajay", "amir"];   //array define
let myobj = {
    fullName : "asif",
    age      :  24,
    email    : "mohdasif03214@gmail.com",
}                                        // objects define...

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myobj);

// ++++++++stack and heap memory+++++++

// ------stack prectice-------

let myName = "mohd asif ansari";
let  otherName = myName;
 myName = "shaheen bano";
 console.log(otherName);
 console.log(myName);


//  ------heap prectice-------


 let userOne = {
    email: "mohdasif03214@gmail.com",
    upi: "user@ybl",
}
  let userTwo =userOne;
userTwo.email = "something@123gmail.com";
console.log(userOne.email);
console.log(userTwo.email);