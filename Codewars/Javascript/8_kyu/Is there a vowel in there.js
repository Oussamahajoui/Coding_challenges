// Description:
// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

// My Solution:
function isVow(arr) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let vowelsCodes = vowels.map((e) => e.charCodeAt())
    //   console.log(vowelsCodes)
    let res = arr.map((e) => {
        if (vowelsCodes.includes(e)) {
            return String.fromCharCode(e)
        }
        return e
    })
    return res
}

// Other Solution:
const isVow = a => {
    let map = {
        97: 'a',
        101: 'e',
        105: 'i',
        111: 'o',
        117: 'u',
    }
    return a.map(num => map[num] ? map[num] : num);
}