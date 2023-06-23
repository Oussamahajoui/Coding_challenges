// Description:
// Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

// Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

// Examples
//  123 ->  321
// -456 -> -654
// 1000 ->    1

// My Solution:
function reverseNumber(n) {
    let arrN = String(n).split('')
    let res = ""
    if (arrN[0] === '-') {
        res = "-"
    }
    for (let i = arrN.length - 1; i >= 0; i--) {
        if (arrN[i] >= '0' && arrN[i] <= '9') {
            res += arrN[i]
        }
    }
    return parseFloat(res)
}

// Better way:
function reverseNumber(n) {
    let isNegative = n < 0;
    let reverseAsString = Math.abs(n).toString().split('').reverse().join('');
    let result = Number(reverseAsString);

    return isNegative ? -result : result;
}