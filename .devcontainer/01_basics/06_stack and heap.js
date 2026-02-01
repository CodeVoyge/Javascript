/*
JavaScript uses two main memory areas
1.Stack - Primitive Values
2. Heap - Non - primitive(reference) values



1.STACK MEMORY(PRIMITIVE TYPES)
-String
-Number
-Boolean
-Null
-undefined
-symbol
-Bigint

RULE : Stack Stores copy of value

EG:    let myYoutubeName = "chaiaurcode.com"

       let anotherName = myYoutubeName
       anotherName = "chitchatwithmahi"



       console.log(myYoutubeName);  // chaiaurcode.com
       console.log(anotherName);  // chitchatwithmahi

       . changing anotherName does NOT affect myYoutubeName
       . Because copy of value was passed.

  

       * Primitive data types use Stack memory and pass value by copy



2.HEAP MEMORY(NON-PRIMITIVE TYPES)
 -What goes in Heap?
 .Objects 
 .Arrays
 .Functions

 Rule:
 Heap stores actual object , stack stores reference(address)

 eg. let userOne = {

     email : "user@google.com",
     upi : "user@ybl"
 }

    let userTwo = userOne


    *what Happens in memory??
    STACK MEMORY              HEAP MEMORY
-----------              -----------------------
userOne  ─────────────▶  { email, upi }
userTwo  ─────────────▶  same object

 *BOTH VARIABLES POINT TO SAME HEAP OBJECT*



 .MODIFYING THROUGH REFERENCE
 eg userTwo.email = "mahi@gmail.com"

  
 console.log(userOne.email);  // mahi@gmail.com

 - Change via userTwo
 - Affects userOne
 - Because both point to same heap memory


 ****IMP***
 Non-primitive data types use Heap memory and pass reference




 ### Stack vs Heap in JavaScript

- Stack memory stores primitive data types and works on value copy.
- Heap memory stores non-primitive data types and works on reference.
- Changes in primitive copies do not affect original values.
- Changes in heap objects affect all variables referencing them.





       




*/