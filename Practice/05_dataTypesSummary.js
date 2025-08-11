//Primitive Data Tyoe
/**These are call by value
 * 7 CATEGORIES:
 * string, number, boolean, null, undefined, symbol, bigint
 */

/**
 * JS is dynamically typed language. 
 * Type checking occurs at runtime.
 * We don't need to declare the datatype at the time of declarations
 */

const score = 100;
const scoreValue = 103.3;

const isScore = true;
const outSideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123')

console.log(id===anotherId);
console.log(id);
console.log(anotherId);

const bigNumber = 23543546776879n;
console.log(typeof(bigNumber))

/**
 * Non Primitice Data Type - Reference Type
 * Array, Objects, Functions 
 */

const heros = ["shaktiman", "naagra", "doga"];
let myObj = {
    name: "Triveni",
    age: 23    
}

const myFunction = function(){
    console.log("Hello");
}

/*
*Undefined - undefined
*Null - object
*Boolean - boolean
*Number - number
*String - string
*Object(native and does not implement[[Call]]) - object
*Object (native and implements[[Call]]) - function
*Object(host and does not implement[[Call]]) - object
*/

/**
 * Mostly non premitive data type ka return type object hi aata hai 
 * 
 */

/**
 * Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object

 */