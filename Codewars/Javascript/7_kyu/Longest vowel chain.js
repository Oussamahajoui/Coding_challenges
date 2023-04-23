// Description:
// The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

// Good luck!

// My Solution:
function solve(s) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let res = 0
    let sofar = 0
    for (const c of s) {
        if (vowels.includes(c)) {
            sofar += 1
            res = Math.max(sofar, res)
        } else {
            sofar = 0
        }
    }
    return res
}