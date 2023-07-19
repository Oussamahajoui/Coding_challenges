// Description:
// I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

// Example
// n = 3, so I expect a 3x3 square back just like below as a string:

// +++
// +++
// +++

// My Solution:
function generateShape(integer) {
    const ROWS = integer
    const COLS = integer
    let res = ''
    for (let r = 0; r < ROWS; r++) {
        res += '\n'
        for (let c = 0; c < COLS; c++) {
            res += '+'
        }
    }
    return res.slice(1)
}

// More JS way:
function generateShape(n) {
    return ("+".repeat(n) + "\n").repeat(n).trim()
}