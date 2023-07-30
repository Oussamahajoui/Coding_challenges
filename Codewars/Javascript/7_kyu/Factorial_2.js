// Description:
// Your task is to write function factorial.

// https://en.wikipedia.org/wiki/Factorial

// My Solution:
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1
    }
    let res = 1
    while (n > 0) {
        res *= n
        n -= 1
    }
    return res
}

//Simpler way:
const factorial = n => n ? factorial(n - 1) * n : 1;
