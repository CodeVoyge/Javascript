const accountId = 1223456
let accountEmail = "mahi@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed 


accountEmail = "hc@hc.com"
accountPassword = "2121212"
accountCity = "Alwar"



console.log(accountId);
console.table([accountId , accountEmail, accountPassword , accountCity, accountState])

/*
 1. Const 
-used for values that should not change
-cannot be reassigned
eg- const accoundID = 122345
       accountID = 231 // not allowed
 2. let
 -used for value that can change
  -Block scoped(preferred way)
  eg - let accountEmail = "abc@gmail.com"
       accountEmail = "xyz@gmail.com" //allowed

  3. var
  -old way of declaring variables
  -Function scoped
  -Avoid using in modern javascript
  eg- var accountPassword = "12345"
  
  4. Without Keyword(BAD PRACTICE)
   - Variable becomes global automatically
   -Avoid this
   eg - accountCity = "Jaipur"

   5. undefined
   -A variable declared but not assigned any value
   eg- let accountState; // undefined

   6.console.log()
   -used to print output

   7. console.table()
   -used to display multiple values in table format
   -very useful for debugging
*/