/*
Javascript Arrays - Introduction

#What is an array?
-Arrays in js are objects not primitives.
-They are resizeable.
-They can store mixed data types.
-Arrays are zero-indexed.


JS
const arr = [1, "hello" , true , {a : 1}];

******************* IMP. POINTS *************************************
1. Arrays are not associative arrays.
2. Only non- negative integers are valid indexes.
3. Copying arrays creates shallow copies.


#valid index 
- only numbers like '0,1,2.....'
- "2" works but 02 doesnt count as array index.

# js
- const arr = [];
arr[2] = "A";
arr["02"] = "B";

console.log(arr.length);  // 3

#Length Property
- Length updates automatically
- Setting Length smaller deletes elements
- Setting Length larger creates empty slots

js
const colors = ["red" , "blue"];
colors[5] = "purple";
- Missing indexes create empty slots.
- Empty slots is nt equal to undefined.


### Mutating vs non-mutating 

# Mutating Methods
-PUSH
-POP
-SPLICE
-SORT
-REVERSE


#Non Mutating Methods
-CONCAT
-SLICE
-toSorted
-toReversed


Js
const arr = [3,1,2];
const sorted = arr.toSorted();

console.log(arr);  //[3,1,2]
console.log(sorted);  //[1,2,3]



####ITERATIVE METHODS####
- Map
- Filter
- Reduce
- ForEach
- Some
- Every

## CallBack Signature
(element , index , array) => {}

    #Importent Rules
    - Iteration length is fixed at start.
    - Avoid modifying array during iteration.



    ## Array like objects
    #what are they?
     objects with:
    -numeric keys
    -Length property

    eg. Const obj = {0: "a", 1: "b", length: 2};
    Array.prototype.join.call(obj, "-"); // a-b

    examples:
    -arguments
    -Nodelist
    -HTMLcollection
    





    ##WHAT IS SHALLOW COPY?
    - creates a new array
    - But objects inside are shared(same reference)

    #ways to make shallow copy??
    - slice()
    - Spread(...)
    - Array.from()
    - Concat()



    eg  const arr1 = [{name : "Mahi"} , {age : 21}];

    const arr2 = arr1.slice();

    arr2[0].name = "changed";

    console.log(arr1[0].name);  // changed
    console.log(arr2[0]. name);  // changed

    why?
    - Bith arrays point to the same object in memory
    -primiitve values are copied and objects are referenced




    ##WHAT IS DEEP COPY
    -creates a complete independent copy
    -Nested objects are not shared


    eg.   const arr1 = [{name: "Mahi"}, {age: 21}];

          const arr2 = JSON.parse(JSON.stringify(arr1));

          arr2[0].name = "changed";

          console.log(arr1[0].name); //Mahi
          console.log(arr2[0].name);  //changed



          ######SLICE()
          -extracts parts of array
          -Does NOT modify original arrray
          -Returns new Array


          eg  array.slice(start,end)

          const arr = [1,2,3,4,5];

          const part = arr.slice(1,4);

          console.log(part);  // [2,3,4]
          console.log(arr);  // [1,2,3,4,5]  unchanged



          #####SPILICE()
          -Adds/removes/replaces
          -MODIFIES original array
          -Returns removed elements


          eg.  array.splice(start, deleteCount , item1, item2)



          #REMOVE ELEMENT
          const arr = [1, 2, 3, 4, 5];
          const removed = arr.splice(1, 2);
          console.log(arr);     // [1, 4, 5]
          console.log(removed); // [2, 3]


          #ADD ELEMENT
             const arr = [1, 2, 5];
             arr.splice(2, 0, 3, 4);
             console.log(arr); // [1, 2, 3, 4, 5]



             #REPLACE elements
             const arr = [1, 2, 3];
             arr.splice(1, 1, 99);
             console.log(arr); // [1, 99, 3]








*/