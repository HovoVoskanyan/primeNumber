const util = require("./myUtils.js");
const util1 = require("./myUtil1.js")
const reader = require("readline-sync");

let num1 = reader.questionInt("Please insert range 1 = ");
let num2= reader.questionInt("Please insert range 2 = ");

if(num1 >num2)
{
    console.log(util1.FindPrimes(num2,num1));
}else
{
    console.log(util1.FindPrimes(num1,num2));
}

//console.log(util.isPrime(2));

