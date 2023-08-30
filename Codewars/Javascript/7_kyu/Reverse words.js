// Description:
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// My Solution:
function reverseWords(str) {
    function reverseWord(s) {
        return s.split('').reverse().join('')
    }
    let words = str.split(' ')
    let res = ''
    for (let w of words) {
        res += ' ' + reverseWord(w)
    }
    return res.slice(1)
}

// Other way:
function reverseWords(str) {
    return str.split(' ').map(function (word) {
        return word.split('').reverse().join('');
    }).join(' ');
}