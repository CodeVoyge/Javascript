/*
1.NUMBERS IN JAVASCRIPT

a.) PRIMITIVE NUMBER
- Const score = 400;
-console.log(score); //400


Number Object(not recommended)
  - const balance = new Number(100);
  - console.log(balance);  // [number : 100]

  **prefer primitive numbers. objects are rarely needed



  2. Number Methods

  a.) toString() -converts number to string
    eg . balance.tostring(); // "100"
         balance.toString().length; // 3


 b.) toFixed(n) - Rounds to n decimal places(returns string).
  eg . balance.toFixed(1); // "100.0"
  
  
  c.) toPrecision(n) - Formats number to nsignificant digits

   eg. const num = 123.8966;
       num.toPrecision(3); // "124"
       num.toprecision(4); // "123.9"


   d) toLocaleString() - Formats number based on locale
      eg  const hundreds = 1000000;
      hundreds.toLocaleString(); "1,000,000"
      hundreds.toLocaleString('en-IN'); //"10,00,000"


   3. Math Object
    - JavaScript provides a built-in Math object;
       eg. console.log(Math);  // Object[math]
       
       
       common Maths Methods
]    
       a.) Math.abs()
          - Returns absolute value
          eg. Math.abs(-4);  //4


       b.) Math.round()   
         - Rounds to nearest integer
            eg . Math.round(4.6); //5
                 Math.round(4.4); //4


        c.) Math.ceil()
           - Always rounds up
           eg. Math.ceil(4.2); // 5
           
           
        d.) Math.floor()
           - Always rounds down
           eg . Math.floor(4.9); // 4 
           
        e.) Math.min()  & Math.max()
          eg Math.min(4,3,6,8); //3
          eg Math.max(4,3,6,8); //8 
          
        f.) Math.random()
           Generates random number between 0 and 1.
           Math.random();  // 0.0 -0.9999...
           
        RANDOM NUMBER IN RANGE
        // Between 1 and 10
          Math.floor(Math.random() * 10) + 1;
          
          
      4. Maths.Random ()
      
       1.) Basic Random
            eg .Math.random();  //0 (inclusive) to 1(exclusive)

       2.) Random decimal between 0 and 10
            eg.  Math.random() * 10;   // 0 - 9.9999..
            
            
       3.) Random integer between 1 and 10
           eg. Math.floor(Math.random()  * 10) + 1;  // 1- 10


       4.) Random integer between min and max
            const min = 10;
            const max = 20;
            
             Math.floor(Math.random() * (max - min + 1)) + min;
             // output : 10 - 20 

             Formula logic:

            1. (max - min + 1) → total count

            2. Math.random() → random base

            3. Math.floor() → integer

            4. + min → shift range


                  
    **********************  IMP ***************************************
            a.)toFixed() and toPrecision() return strings

            b.)Use Number() to convert back if needed

            c.)Avoid new Number() unless required

            d.)Math.random() never returns 1


*/