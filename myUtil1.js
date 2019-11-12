const util = require("./myUtils.js"); 

module.exports ={
    FindPrimes:function(low,up)
    {
        let Primes =[];
        for(let i=low;i<=up;i++)
        {
            if(util.isPrime(i)) Primes.push(i);
        }
        if(Primes.length == 0)
        {
            console.log("No Prime Numbers");
            return;
        }else
        {
            return Primes;
        }
    }
}