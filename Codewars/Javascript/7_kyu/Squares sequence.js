// Description:
// Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.

// Examples
// 2, 5  -->  [2, 4, 16, 256, 65536]
// 3, 3  -->  [3, 9, 81]

// My Solution:
function squares(x, n) {
    let res = []
    if (n <= 0) {
        return []
    }
    res.push(x)
    for (let i = 2; i <= n; i++) {
        res.push(res[res.length - 1] ** 2)
    }
    return res
}