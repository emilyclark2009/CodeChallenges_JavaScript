/*
SEMI-PRIME NUMBERS
Semi-Prime Numbers
Create a semiPrimeCount() function that takes in an integer, n, and returns the count of semi-prime numbers from 1 to n, non-inclusive. A semi-prime number is a number that is the product of two prime numbers. Note that the numbers don’t have to be distinct, meaning that 4 is a semi-prime number since it is 2 * 2.

For example, semiPrimeCount() called on 10 should return 3 since there are 3 semi-prime numbers from 1-10 (4, 6, 9). Remember, it’s non-inclusive!

Variations of this challenge were reported to have been asked at interviews with Google. If you’ve covered the material in Pass the Technical Interview with JavaScript or an equivalent, you should be able to solve this challenge. If you have trouble, try refreshing your knowledge with there first.
*/
//function that determines whether or not a number is prime
function isPrime(number) {
    //to handle cases where the input is 1 or 0 becasue these special cases are not included in my algorithm
    if (number === 1 || number === 0){
        return false;
    }
        //If there are no factors of the number within the range 2 through the squareroot of the number, then the number is prime.
    let upperLimit = Math.ceil(Math.sqrt(number));
    for (let i=2; i <= upperLimit ; i++) {
        if (number % i === 0) {
            return false
        }
    return true
    }
}

function semiPrimeCount(n) {
    let count = 0;
    const primes = [2];
    //finds all relevevant primes less than n that can potentially make a product with another prime less than n
    const upperLimit = Math.floor(n/2)
    for (let i=3; i <= upperLimit; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    
    let primes2 = [...primes]; 
    for (let k of primes) {
        for (let j of primes2) {
            if (k*j < n) {
                count ++
            }else{
                break;
            }
        }
        primes2.shift();
    }
    return count
}

console.log(semiPrimeCount(13));

// Leave this so we can test your code:
module.exports = semiPrimeCount;




