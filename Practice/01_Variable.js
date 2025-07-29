const accountID = 722374
let accountEmail = "trivenisuresh722@gmail.com"
var accountPassword = '12345'
accountCity = "Jaipur"


//accountID = 2  ------> const can't be changed 

//{} ----> this symbol is scope 

//why not var?
// Bcoz in js var was not compitable with scope, means if someone have define the value in the scope and same is already defined anywhere else so it was not able to handle it, it was changing to it's all value

accountEmail = "somi@mail.com"
accountPassword = "180502"
accountCity = "Pune"
let accountState; 

console.log(accountID);

//console.table gives us info in tabular form
console.table([accountID, accountEmail, accountPassword, accountCity, accountState])

/**
 * Prefered not to use the var
 * bcoz of issue in block scope and functional scope 
 */