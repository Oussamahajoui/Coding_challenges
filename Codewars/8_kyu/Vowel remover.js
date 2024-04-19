// DESCRIPTION:
// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata

// My Solution:
function shortcut(string) {
    let res = []
    let vowels = ["a", "e", "i", "o", "u"]
    for (const c of string) {
        if (!vowels.includes(c.toLowerCase())) {
            res.push(c)
        }
    }
    return res.join('')
}