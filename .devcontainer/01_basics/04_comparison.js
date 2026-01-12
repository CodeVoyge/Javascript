/* COMPARISON OPERATORS
 Comparison operators are used to compare two values and they always return a boolean (true or false).
 They are heavily used in if-else , loops , authentication checks , API validation ,etc (imp for backend)

 1. EQUALITY OPERATORS

 a) LOOSE EQUALITY(==)
 - compares values only
 - performs type conversion(coercion)
  eg.  5 == "5" // true
       true == 1 // true
       null ==  undefined //true
       **** ADVISED TO AVOID IN BACKEND AS IT CAN CAUSE BUGS***

  b) STRICT EQUALITY (===)
  - Compares value + type
  - No Type conversion
  
  eg. 5 === "5" //false
      5 === 5 // true
      true === 1 // false

      ***** USE this in backend*****



  2. INEQUALITY OPERATORS
  
  a) LOOSE NOT EQUAL(!=)
  - value comparison with type conversion
  eg.  5 != "5" // false

  b) STRICT NOT EQUAL(!==)
   - value + type comparison
    eg.  5 !== "5" // true

  3 RELATIONAL (Comparison) operators
  - used mostly with numbers and strings.
   eg  operator                Meaning
        >                      Greater than
        <                      less than
        >=                     greater than or equal
        <=                     less than or equal

        eg .  10 > 5   //true
               5 <= 5  // true

     D) Strings(Lexicographical / Dictionary Order)
          "apple"  < "banana"  // true
          "Z"  < "a"  // true(ASCII based) 

        *** strings are compared character by character (ASCII/Unicode)** 
        
  4. TYPE CONVERSION IN COMPARISON (IMPORTANT)
    
  a) Numbers vs  Strings
     "10" > 5  // true (string -> number)
     "10" < "2"  // false (10 < 2 )
     *** js converst strings to numbers only when possible**

   b) Booelan Conversion
       true == 1  // true
       false == 0 // true
       
       true === 1 // false

    5. null and undefined (TRICKY ONE)
        1. loose comparison
            null == undefined  //true
            null == 0   // false
            
        2. Strict comparison
            null === undefined // false  
            
        3. Relational Comparision(weired behaviour)
             null > 0 // false
             null >= 0 // true  !!
             null == 0  // false   
             
        Reasons 
        . == treats null specially
        . < , > , >= , <=  convert null -> 0
        
        Avoid comparing null directly in backend logic.


      6. Nan (Not a number)
      
        NaN == Nan // false
        NaN === NaN // false


         number.isNan(Nan)   // true


      7. Object and Array Comparison
      
      objects
      {} === {}  // false
        because they compare memory reference , not content


      Arrays
      [] === []  // false
       even if content is same , reference is different  
     

*/