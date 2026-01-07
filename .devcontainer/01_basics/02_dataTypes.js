"use strict"; // treat all js code as newer version

//alert(3+3) // we are using nodejs, not browser

console.log(3 
    +
    3) // code readability  should be highb
console.log("Mahi")

//Data Types
let name = "Mahi"
let age = 18
let isLoggedIn = true
let state

// types
/*
number => 2 to power 53
bigint 
string =>""
boolean => true/false
null => standalone value
undefined =>
symbol => unique


// object

*/

console.log(typeof age);//
console.log(typeof undefined); // undefined
console.log(typeof null); // object

/*
"use strict"
-Treats all javascript code as newer(modern) version
-helps catch silent error
- recommended in real world project


- alert() works in browsers , not in Node.js
- we use console.log() in Node.js


//PRIMITIVE DATA TYPES
1. NUmber 
- used for integers & decimals
- Range : 2^53 - 1
- example 
let age = 19

2. BigInt
-used for very large numbers
-eg :
let bigNumber = 104857637208987987n

3.String
-text data
-written in "" , '' or ``
eg - let name = "Mahi"

4. Boolean
-true or false
-eg  :
let isLoggedin = true

5. Null
-Intentional empty = true
-means "nothing"
-typeof null -> object (javascript bug)

6.Undefined
-variable declared but value not assigned
-eg 
let state ; //undefined

7.symbol
-used to create unique values
-mostly used in advanced javascript


//NON PRIMITIVE DATA TYPES

8. Object
-used to store key-value pairs
-Arrays & functions are also objects
-eg :
let user = {
name : "Mahi",
age : 18
}

//TYPE CHECKING

-typeof operator is used to check data types
-eg :
typeof age -> number
typeof undefined -> undefined
typeof null  ->  object(known JS bug)

IMPORTANT NOTES
- JavaScript is dynamically typed
- Data type is decided at runtime
- Code readability matters
- Always use semicolons for clarity (good habit)
*/