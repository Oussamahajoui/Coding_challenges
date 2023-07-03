// Description:
// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

// My Solution:
function findLongest(array) {
    let res = Number.NEGATIVE_INFINITY
    let longuestSoFar = 0
    for (let a of array) {
        let strNumLen = a.toString().length
        if (strNumLen > longuestSoFar) {
            res = a
            longuestSoFar = strNumLen
        }
    }
    return res
}