// Description:
// Strong number is a number with the sum of the factorial of its digits is equal to the number itself.

// For example, 145 is strong, because 1! + 4! + 5! = 1 + 24 + 120 = 145.

// Task
// Given a positive number, find if it is strong or not, and return either "STRONG!!!!" or "Not Strong !!".

// Examples
// 1 is a strong number, because 1! = 1, so return "STRONG!!!!".
// 123 is not a strong number, because 1! + 2! + 3! = 9 is not equal to 123, so return "Not Strong !!".
// 145 is a strong number, because 1! + 4! + 5! = 1 + 24 + 120 = 145, so return "STRONG!!!!".
// 150 is not a strong number, because 1! + 5! + 0! = 122 is not equal to 150, so return "Not Strong !!".

// My Solution:
function strong(n) {
    const cache = {}
    function factorize(x) {
        if (x in cache) {
            return cache[x]
        }

        if (x < 0) {
            return -1
        }
        if (x === 0 || x === 1) {
            return 1
        }

        const res = factorize(x - 1) * x
        cache[x] = res
        return res
    }
    const originalNum = n
    let value = 0
    while (n > 0) {
        let digit = n % 10
        value += factorize(digit)
        n = Math.floor(n / 10)
    }
    return value === originalNum ? "STRONG!!!!" : "Not Strong !!";
}