/*
COMPARATIVE WEIGHTS
Comparative Weights
Suppose you had n basketballs, all of them seemingly identical. You are given a balance scale and told that one of the n balls is slightly heavier than the others. What’s the fewest number of times you have to use the scale to find the outlier? You can assume that the scale is very large and able to fit all n balls on each side. Write a scaleOfTruthN() function that takes in the number of basketballs and determines the minimum number of weighs that you’ll need to find the outlier`.

For example, if you have 3 balls, you can compare 2 of them to see if they are of equal weight. If they are, then you know the ball that you didn’t weigh is the outlier. On the other hand, if they aren’t of equal weight, then the heavier ball is the outlier. Therefore, scaleOfTruthN(3) should return 1.

This challenge was reported to have been asked in interviews at many top companies, including Microsoft. If you’ve covered the material in Pass the Technical Interview with JavaScript or an equivalent, you should be able to solve this challenge. If you have trouble, try refreshing your knowledge with its Algorithmic Complexity content.
*/

// Bisection search?

// console.log(Math.log2(100))

// 6.643856189774724
// console.log(Math.floor(6.643856189774724));


function scaleOfTruthN(n) {
  
    // Is the number odd or even?
  
    // If it's odd, then subtract 1 to round it down?
    //while loop
    let count = 0
    while (n>1) {
        n = n/3
        count++
    }
    
    return count
    // Keep dividing by 2 until you reach 1
    // ** - This is a "log" function - (logbase 2?)
    // let finalResult
    // const initialResult = Math.round(Math.log2(n))

    // return Math.round(Math.log3(n))

    // finalResult = initialResult
    // return finalResult

    // if(initialResult === 0) { return initialResult + 1} else { return initialResult }

    // For loop - to reach this?

    //   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/log2

    // Math.log2(3);    // 1.584962500721156

    // Round down to nearest whole number?

    

}



console.log(scaleOfTruthN(2));

// Leave this so we can test your code:
// module.exports = scaleOfTruthN;

