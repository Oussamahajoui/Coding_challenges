// Description:
// You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all printable ASCII characters.

// Examples:

// uniTotal("a") == 97
// uniTotal("aaa") == 291

// My Solution:
function uniTotal(string) {
    const arr = string.split('')
    let res = 0
    arr.forEach((e) => res += e.charCodeAt())
    return res
}