// DESCRIPTION:
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

// My Solution:
function fakeBin(x) {
    let res = []
    let arr = x.split('')
    arr.forEach((e) => e < 5 ? res.push('0') : res.push('1'))
    return res.join('')
}
// Other solution:
function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}