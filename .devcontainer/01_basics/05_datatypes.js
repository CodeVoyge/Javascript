/*
1.PRIMITIVE DATA TYPES

-Primitive types store values directly (not referenced).
-JAVASCRIPT HAS 7 PRIMITIVE DATA TYPES:

1.String
2.Number
3.Boolean
4.Null
5.Undefined
6.Symbol
7.BigInt



1.STRING

eg const name = "Mahi";
   - text data
   - written inside " " or ' ' 
   - immutable (cannot be changed)


 2. Number
    eg const score = 100;
    eg const scoreValue = 100.3;
    - JS has only one number type
    - No seperate int or float

 3. Boolean
    eg const isLoggedIn = false;
    - Only true or false
    - Mostly used in conditions
    
 4.  Null
     eg const outsideTemp = null;
     -Intentional empty value
     -Means : "value is empty on purpose" 

   ********** typeof null  // "object" (this is a JS bug)*******************


 5. Undefined
 eg let userEmail;
  -Variable declared but no value assigned
  -JS automatically assigns undefined


 6. Symbol(Unique Values)
   - const id = Symbol('123);
   - const anotherId = symbol('123');

   console.log(id === anotherId);  //false


   . even with same descriptions, symbols are always unique
   . used for:
        . unique object keys
        .  Avoiding Key Conflicts
  
 7.BigInt
  - used when numbers are bigger than safe integer limit
   . const bigNumber = 55477996223321145644n;
   . n at the end means BIGINt
   . used in large calculations (crypto , finance , etc)
   
   

  2 Non - primitive (Reference) Data Types
  - these store Reference(memory address), not actual value.
  eg - Array
       Object
       Function    
 




      a) ARRAY
         const heroes =["shaktiman" , "naagraj" , "doga"];
         . collection of values
         . Indexed (0 - based)


      b) Object
       eg let myObj = {
       name : "hitesh" ,
        age : 30
        };
      . key-value pairs
      . Most used data structure in JS


      c) Function
        const myFunction = function(){
        console.log("Hello world");
        };
        .Functions are objects in javascript
        .That's why JS is called dynamically typed


      Key difference : Primitive vs  Non - Primitive
      
      1. Primitive
        . Stored in Stack
        . Copy of Value is passed

        eg . let a = 10;
             let b = a;
             b= 20;

             console.log(a); //10
             console.log(b); // 20


       2. Non-Primitive
            .Stored in heap
            .Reference is passed      

            eg.  let user1 = {
            email:  "user@gmail.com"
            };

               let user2 = user1;
               user2.email = "mahi@gmail.com";

               console.log(user1.email);  // mahi@gmail.com




 
 */