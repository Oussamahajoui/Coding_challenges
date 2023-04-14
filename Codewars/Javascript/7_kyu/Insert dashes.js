// Description:
// Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3.

// Note that the number will always be non-negative (>= 0).

// My Solution:
function insertDash(num) {
    const numArr = num.toString().split('')
    let res = []
    res.push(numArr[0])
    for (let i = 1; i < numArr.length; i++) {
        if (parseFloat(numArr[i]) % 2 === 1 && parseFloat(numArr[i - 1]) % 2 === 1) {
            res.push('-')
            res.push(numArr[i])
        } else {
            res.push(numArr[i])
        }
    }
    return res.join('')
}
