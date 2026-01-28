/*In JavaScript, strings are IMMUTABLE.
  Any string method returns a NEW string.
 Original string never changes.



 1.Creating Strings
  - NORMAL STRING(PRIMITIVE)

   const name = "hitesh"
   const repocount = 50


   NOT RECOMMENDED WAY
   eg . const gameName = new String("hiteshhc")
   - This creates a string object , not a primitive string
   JS auto-converts primitive strings to objects when needed


 2. String Concatenation (old way)
   eg.  console.log(name + repocount + " value");
   -Not readable
   -Avoid in modern JS  


 3. String Interpolation(best practice)

 eg. console.log('Hwllo my name is ${name} and my repo count is ${repocount}');


 4. String Indexing & Access

 const gameName = new String("hiteshhhc");

 console.log(game.Name[0]); //h
 console.log(gameName.charAt(2)); //t
 - indexing starts from 0


 5. Length of String

   console.log(gameName.length);
   -returns total number of characters


  6. Uppercase / Lowercase
  
  console.log(gameName.toupperCase());
  - strings are immutable
  -Original strings does not change


  7. Finding position (indexOf)
    console.log(gameName.indexOf('t'));
    - Returns index of first occurrence
    - Returns -1 if character not found


  8. Extracting Strings
      substring(start , end)  

      eg . const newString =gameName.substring(0,4);
           console.log(newString); // hite

           -End index NOT included
           -Does NOTaccept negavtive values

   9. Slice(start, end)
      
      const anotherString = gameName.slice(-8 , 4);
      console.log(anotherString);

      -Supports negavtive indexes
      - More flexible than substring


    10. Trimming Spaces 
      - const newStringOne = "   hitesh   ";
      
      console.log(newStringOne);
      console.log(newStringOne.trim());

      - trim()  removes spaces from:
      -start
      - end
      - useful for forms and user input


    11. Replacing Content
         const url = "https://hitesh.com/hitesh%20choudhary";
         
         console.log(url.replace('%20 , '-'));
         -Replaces first match
         -Returns a new string


    12. checking value(includes)
    
      console.log(url.includes("sundar"));
      - Returns true or false
      - Used for validation & checks


     IMPORTANT CONCEPTS
     - strings atre immutable
      eg 
      let str = "hitesh";
      str[0] = "H";
      
      console.log(str);  //hitesh

      - Cannot change original string
      - Methods always return new string



      Primtive vs Object string

      eg   const a = "hitesh";
        const b = new String("hitesh");

        console.log(typeof a);  //string
        console.log(typeof b);  //object



    
 
 
 
 
 
 
 
 
 
 */
