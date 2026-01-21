const accountId = 16453   //for values that dont change
let accountEmail = "alok@gmail.com"  //for values that change or may change
var accountPass = "12345"  //never use var because of scope  issues (used in early days) 
accountCity = "Mumbai"  //possiblity of declaring a variable like this but NEVER do this
let accountState;  //if a var is declared but no value is set then its auto undefined

// accountId = 2 //not allowed  because cannot reassign const

accountEmail = "ab@ab.com"  //allowed
accountPass = "37423"
accountCity = "Bengaluru"

// mentioning all vars inside [] with 'console.table([])' gives a table like structure, with index-values
console.table([accountId, accountEmail, accountPass, accountCity]);
