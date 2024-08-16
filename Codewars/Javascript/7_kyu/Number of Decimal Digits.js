// Description:
// Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

// All inputs will be valid.

// My Solution:
function digits(n) {
    let res = 0
    let num = n.toString().split('')
    for (const c of num) {
        res += 1
    }
    return res
}

//Better way:
function digits(n) {
    return n.toString().length;
}