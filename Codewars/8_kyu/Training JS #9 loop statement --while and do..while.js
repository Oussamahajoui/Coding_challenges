// Task
// Complete function padIt, which accepts 2 parameters:

// str: a string representing the string to pad. We will pad it with "*" symbols on its left side and on its right side.
// n: a number indicating how many times to pad the string.

// My Solution:
function padIt(str, n) {
    let arr = str.split('')
    let count = 1
    while (count <= n) {
        if (count % 2 === 1) {
            arr.unshift("*")
        }
        else {
            arr.push('*')
        }
        count++
    }
    return arr.join('')
}