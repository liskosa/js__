// primitive and non-primitive
// Primitive

//7 types: String, Number, Boolean, null+ ek dum khali, undefined kya value hein abhi tk pta nhi h but variable declared hai memory space bhi, Symbol, BigInt-scientific value


// Refrence (non primitive) - memory mai inka refrence asani se allocate kiya ja skta hai
// Array, Objects, Functions 


// browers k web events, Objects master kr lo

const score = 100 
const scorevalue = 100.3

const isLoggedIn = false 
const outsideTemp = null 
let userEmail;  // value undefined = krle bhi likh skte the

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id==anotherId);
//const bigNumber = 234893583429502n


// array 
const heros = ["shakiamn", "naagraj"];
let myobj = {
    name: "riya",
    age: 22,
}
const myfuction = function(){
    console.log("helo");
    
}

console.log(typeof outsideTemp );
// https://262.ecma-international.org/5.1/#sec-11.4.3
