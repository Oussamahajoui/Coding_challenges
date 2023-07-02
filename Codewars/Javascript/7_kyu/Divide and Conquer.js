// Description:
// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

// My Solution:
function divCon(x) {
    let stringNums = x.filter((e) => typeof e !== 'number').reduce((a, b) => parseFloat(a) + parseFloat(b), 0)
    let nonStringNums = x.filter((e) => typeof e === 'number').reduce((a, b) => a + b, 0)
    return nonStringNums - stringNums
}