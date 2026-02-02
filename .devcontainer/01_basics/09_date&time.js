/*
DATE & TIME IN JAVASCRIPT

- Date in javascript is an object
- Internally dates are stored as miliseconds
- since jan 1 , 1970(unix epoch)



1. CREATING A DATE OBJECT

- let myDate = new Date();

console.log(myDate.toString());   // wed mar 01 2026 12:05:19 gmt+0000
console.log(myDate.toDateString());  // wed mar 01 2026
console.log(myDate.toLocaleString());  // 3/1/2026 , 12:05:19 pm


// DATE is an object
 console.log(typeof myDate);  // object


2. CREATING CUSTOM DATES

- Using numbers (Month is 0 - based !)

// jan = 0, feb = 1,....
let myCreatedDate1 = new Date(2026 , 0 , 23);
console.log(myCreatedDate1.toDateString());

// with time
let myCreatedDate2 = new Date(2023 , 0 ,23, 5 ,3);
console.log(myCreatedDate2.toLocaleString());

// Using ISO format (YYYY-MM-DD) -> preferred
let myCreatedDate3 = new Date("2023-01-14");
console.log(myCreatedDate3.toLocaleString());

// Using MM-DD-YYYY (can cause confusion in some regions)
  let myCreatedDate4 = new Date("01-14-2026");
  console.log(myCreatedDate4.toLocaleString());



  *************TIMESTAMPS********************

  //current timestamps in miliSeconds
   let myTimeStamp = Date.now();
   console.log(myTimeStamp);

   //TimeStamp of a specific date
    console.log(myCreatedDate3.getTime());

    //convert miliseconds -> seconds (used in DBs)
    console.log(Math.floor(Date.now()  /  1000));



  4. DATE METHODS (GETTERS)  
   
  let newDate = new Date();
console.log(newDate);

// Month (0-based)
console.log(newDate.getMonth() + 1); // +1 for real month

// Day of week
// 0 = Sunday, 1 = Monday, ...
console.log(newDate.getDay());

// Date of month
console.log(newDate.getDate());

// Year
console.log(newDate.getFullYear());

// Hours / Minutes / Seconds
console.log(newDate.getHours());
console.log(newDate.getMinutes());
console.log(newDate.getSeconds());

*/