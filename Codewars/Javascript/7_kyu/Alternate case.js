// Description:
// Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD

// My Solution:
function alternateCase(s) {
    let res = ""
    for (let c of s) {
        if ('a' <= c && c <= 'z') {
            c = c.toUpperCase()
            res += c
        } else if ('A' <= c && c <= 'Z') {
            c = c.toLowerCase()
            res += c
        } else {
            res += c
        }
    }
    return res
}

// Less verbose way:
function alternateCase(s) {
    return s.split('').map(function (el) {
        return el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase();
    }).join('');
}