let str1 = "asif";
let str2 = " ansari";
let str3 = str1+str2;
console.log(str3);


console.log(1+2);
console.log("1"+2+ 3+"4");
console.log("1"+2+3);
console.log(2+3+"6");
console.log(123 + "ansari");


const name = "asif";
const score = 60;
// console.log(name + score + "value");
console.log('hallo my name is ${name} and my repo  is ${score}');

// ----create a string----
 
const gameCounter = new String('asif-ansari');
console.log(gameCounter);
console.log(typeof gameCounter);
console.log(gameCounter[0]); // how to keys access
console.log(gameCounter.length); 
console.log(gameCounter.__proto__);
console.log(gameCounter.toUpperCase());
console.log(gameCounter.toLowerCase());
console.log(gameCounter.charAt(3))  ;
console.log(gameCounter.indexOf('n'));


const newString =gameCounter.substring(0,5);   // we can't use nigative value in substring---
console.log(newString);

const anotherString = gameCounter.slice(-8,5);  // we can use nigative value in slice.---  
console.log(anotherString);
console.log(gameCounter.split("-"));


// -------trim() mathod using-------

const newstring = "       asif     ";
console.log(newstring);
console.log(newstring.trim());    // clear the whitespaces using trim() mathod in str.

const url = "https://asif.com/ansari%100khan";
console.log(url.replace('%100', '_'));

console.log(url.includes("rano"));