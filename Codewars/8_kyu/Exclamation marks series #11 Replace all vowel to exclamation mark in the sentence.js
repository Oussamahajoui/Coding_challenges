// DESCRIPTION:
// Description:
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// Examples
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"

// My Solution:
function replace(s) {
    vowels = 'aeiouAEIOU'
    let res = []
    for (let c of s) {
        if (vowels.split('').includes(c)) {
            res.push('!')
        } else {
            res.push(c)
        }
    }
    return res.join('')
}