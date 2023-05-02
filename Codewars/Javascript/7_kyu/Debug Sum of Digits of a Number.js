// Description:
// Debug   function getSumOfDigits that takes positive integer to calculate sum of its digits. Assume that argument is an integer.

// Example
// 123  => 6
// 223  => 7
// 1337 => 14

// My Solution:
function getSumOfDigits(integer) {
    let sum = null;
    let digits = integer.toString().split('');
    for (let ix = 0; ix < digits.length; ix++) {
        sum += parseInt(digits[ix]);
    }
    return sum;
}