const accountId = 1978
let accountEmail = "aman@gmail.com"
var accountpassword = "999283"
accountCity = "Jaipur"
let accountState

// accountId = 2   not allowed constant cannot be changed

accountEmail= "cu@gmail.com"
accountpassword = "445"
accountCity = "Hisar"

/*
Two keywords to declare variable are var and let.
Constant can be declraed with const keyword.
Prefer not to use the var keyword because of the block scope and function scope.
Variable can be declared without keyword as mention in accountCity above. 
If variable is not assigned to any value then it will make the variable indefined as mention in accountState.
*/

console.table([accountId, accountEmail, accountpassword, accountCity, accountState])