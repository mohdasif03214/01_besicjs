const score = 400;
console.log(score);
const balance = new Number(100);
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));


const otherNumber = 123.56894;
console.log(otherNumber.toPrecision(5));

const someNumber = 100000000;
console.log(someNumber.toLocaleString('en-IN'));


//+++++++++++++Math++++++++++++++++++++


console.log(Math);
console.log(Math.abs(-4));  //abs() is use the only convert nigative to positive.
console.log(Math.round(4.6));
console.log(Math.ceil(4.9));
console.log(Math.floor(4.9));
console.log(Math.sqrt(25));
console.log(Math.max(5,6,8,2));
console.log(Math.min(8,45,96,85,74,));


console.log(Math.random());
console.log((Math.random()*10)+1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min +1 )) + min);   //importent notes in formula.
