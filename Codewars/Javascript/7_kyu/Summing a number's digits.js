// Description:
// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.

// My Solution:
function sumDigits(number) {
    return number.toString().split('').filter((e) => 0 <= parseFloat(e) && 9 >= parseFloat(e)).reduce((a, b) => parseFloat(a) + parseFloat(b), 0)
}
