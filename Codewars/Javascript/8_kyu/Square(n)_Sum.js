// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1² + 2² + 2² = 9

// My Solution
function squareSum(numbers) {
    let res = 0
    numbers.forEach((x) => { res += (x ** 2) })
    return res
}