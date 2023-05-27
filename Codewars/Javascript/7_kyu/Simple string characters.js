// Description:
// In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

// Solve("*'&ABCDabcde12345") = [4,5,5,3].
// --the order is: uppercase letters, lowercase, numbers and special characters.
// More examples in the test cases.

// Good luck!

// My Solution:
function solve(s) {
    const upper = (s.match(/[A-Z]/g) || []).length
    const lower = (s.match(/[a-z]/g) || []).length
    const nums = (s.match(/[0-9]/g) || []).length
    const special = s.length - upper - lower - nums
    return [upper, lower, nums, special]
}