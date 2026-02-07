/*
1. push() - adds elements to array(modifies original array)
eg.  const marvel_heroes = ["thor" , "ironman" , "spiderman"];
     const dc_heroes = ["superman" , "flash" , "batman"];

     marvel_heroes.push(dc_heroes);

     console.log(marvel_heroes);

     output - : ["thor" , "ironman" , "spiderman" ,["superman" , "flash" , "batman"]]

     - push() adds the entire array as ONE element
     - it creates a nested array

     like this ["thor" , "ironman" , "spiderman" ,["superman" , "flash" , "batman"]]


     2. Access nested array elements
     - array[index][nestedIndex]
     -console.log(marvel_heroes[3][1]);
     output =  flash
   
      explanation: marvel_heroes[3] → ["superman", "flash", "batman"]
marvel_heroes[3][1] → "flash"




3. concat() - merges arrays (returns NEW array)
    - const marvel_heroes = ["thor" , "ironman" , "spiderman"];
    - const dc_heroes = ["superman", "flash" , "batman"];
    - const allHeroes = marvel_heroes.concat(dc_heroes);

    console.log(allHeroes);
    output - ["thor", "ironman", "spiderman", "superman", "flash", "batman"]


4. spread Operator(...) - Modern way to merge arrays(most imp)

    eg. const marvel_heroes = ["thor" , "ironman", "spiderman"];
    const dc_heroes = ["superman" , "flash" , "batman"];

    const all_new_heroes = [...marvel_heroes, ...dc_heroes];

    console.log(all_new_heroes);

    output : ["thor", "ironman", "spiderman", "superman", "flash", "batman"]


    Why spread is better:
    Cleaner syntax
    More flexible
    Most used in modern JavaScript
    Used in React and modern projects


    concat vs spread comaprison
    
    const allHeroes = marvel.concat(dc); // concat


    const allHeroes = [...marvel, ...dc]; // spread {preffered}


   5.flat() – Converts nested array into single array
     eg.  const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
          const real_another_array = another_array.flat();
          console.log(real_another_array);

          output:  [1, 2, 3, 4, 5, 6, 7, 6, 7, [4, 5]]
           It removes only ONE level of nesting.


    6.flat(Infinity) – Fully flatten array    
    
    eg const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
       const real_array = another_array.flat(Infinity);
       console.log(real_array);

       output [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

       Best method to flatten deeply nested arrays.



   

       
*/