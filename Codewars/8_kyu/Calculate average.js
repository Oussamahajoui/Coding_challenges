// DESCRIPTION:
// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

// My Solution
function findAverage(array) {
    let total = array.reduce((acc, curr) => acc + curr, 0)
    return array.length > 0 ? total / (array.length) : 0
}