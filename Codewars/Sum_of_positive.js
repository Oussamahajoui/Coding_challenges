// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

// My Solution
function positiveSum(arr) {
    let res = 0
    arr.forEach((a) => {
        if (a >= 0) {
            res += a
        }
    })
    return res
}