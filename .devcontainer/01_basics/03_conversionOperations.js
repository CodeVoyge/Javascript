/*
What is Type Conversion?
Type conversion means changing one data type into another

example 
"33"(string) -> 33(number)
1 -> true
0 -> false
Javascript does this in two ways:
1.Explicit(manual) conversion - WE convert
2.Implicit(Automatic) conversion -> JS converts itself


EXPLICIT TYPE CONVERSION (WE CONTROL IT)

a)string -> Number
let score = "33";
let ValueInNumber = Number(score);

console.log(valueInNumber); //33
console.log(typeof valueInNumber); //number

let score = "33abc";
let valueInNumber = Number(score);

console.log(valueInnumber); //Nan

b) Number->Boolean
let isLoggedIn = 1;
let booleanValue = Boolean(isLoggedIn);

console.log(booleanValue); // true


BOOLEAN RULES(VERY IMPORTANT)
Boolean(1)   //TRUE
Boolean(0)   //FALSE
Boolean("")  //FALSE
Boolean("MAHI") // TRUE

c) Number -> String
   let num = 18;
   let stringNum = string(num);
   
   console.log(stringNum); //"18"
   console.log(typeof stringNum); //string



   IMPLICIT TYPE CONVERSION (JS DOES IT AUTOMATICALLY)

   Golden Rules
   1. String + Number 
      console.log("1" + 2);  //"12"
      console.log(1 + "2");  // "12"
      if string comes , JS converts everything to string.

   2. Number + Number + String
      console.log(1 + 2 + "2");  //"32"

      1+2 = 3
      3 + "2" = "32"

    3. String + Number + Number
       console.log("1" + 2 + 2); // "122"
       left to right exceution

    4. Subtraction /Multiplication/ Division
        console.log("2" - 1); //1
        console.log("2" * 2); //4
        console.log("4" / 2); //2
        only + causes string problem
        other operators convert the number automatically

     5. Unary Operator(+)
        Convert string to number(shortcut)
        eg. let value = "33";
        console.log(+value); //33
        
        eg. console.log(+ ""); //0
            console.log(+ "abc"); //Nan

     6 **IMPORTANT**  NULL
        console.log(null > 0); //false
        console.log(null == 0); //false
        console.log(null >= 0); //true     
        
        UNDEFINED
        console.log(undefined > 0); //false
        console.log(undefined == 0); //false
        console.log(undefined >= 0); //  false


        BEST PRACTICE IS TO USE ===(STRICT EQUALITY)
          console.log(null === 0); //false


     7. == vs === 
    a) ==(loose equality)
       console.log("2" == 2); //true
       JS converts types automatically
       
    b) ===(strict equality)
    console.log("2" === 2); // false   
      
      
*/
