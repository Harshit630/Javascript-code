let score = "33abr" //"" = string , output = string ..............if we write 33abc(null output =0, undefined output= NaN
// true output = 1 ,"harshit" output = NaN
 
//console.log (typeof score);
//console.log(typeof (score)); // as a method

let valueInNumber = Number (score) // change the string into number
//console.log(typeof valueInNumber); // output = number
//console.log(valueInNumber) // 33sbr - output = NaN (not a number)


let isLoggedIn = 1 

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)
/* "" = false
"harsh" = true
"1" = true */


let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber) ;
console.log(typeof stringNumber);

// ************************ Operations *************************

let value = 3
let negValue = -value //convert to negative value
console.log(negValue)

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "Hello "
let str2 = "World"

let str3 = str1 + str2
console.log (str3);

console.log("1"+ 2)//output = 12
console.log(1+"2")// output = 12
console.log("1"+2+2) // output = 122
console.log(1 + 2 + "2") //output = 32

console.log((2 + 4) * 5 % 3); // proper way to write a code especially in corporates

console.log(+true); //output = 1 , true+ = will give error ** not prefered
console.log(+""); //output = 0 ** not prefered

let num1, num2, num3
num1 = num2 = num3 = 2+2

let gameCounter = 100
++gameCounter;
console.log(gameCounter) // output = 101

// go and study prefix and postfix mdn dev
