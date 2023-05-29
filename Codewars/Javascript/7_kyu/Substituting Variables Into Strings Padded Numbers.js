// Description:
// Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.

// Example:

// solution(5) // should return "Value is 00005"

// My Solution:
function solution(value) {
    let res = ''
    let N = String(value).length
    if (N < 5) {
        let zeros = (5 - N)
        for (let i = 0; i < zeros; i++) {
            res += '0'
        }
    }
    res += value
    return `Value is ${res}`
}

//Other way:
const solution = value => 'Value is ' + value.toString().padStart(5, '0');
