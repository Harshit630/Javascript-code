const accountId = 144553
let accountEmail = "harshitpal@gmail.com"
var accountPassword = "1224" // currently we use only let beacause there is problem or confusion b/w var and loop 
accountCity = 'Jaipur' // variable can be declare like this (possibility hai) but dont use this method
let accountState;

// accountId = 3 // not allowed

console.log(accountId);

accountEmail = "hs@hc.com"
accountPassword = "32232"
accountCity = "banglore"


/* prefer not to use var
because of issue in block and functional scope*/

console.table([accountEmail, accountId, accountPassword, accountCity, accountState])