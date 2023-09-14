// Description:
// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// My Solution:
function findShort(s) {
    let res = Number.POSITIVE_INFINITY
    for (const c of s.split(' ')) {
        res = Math.min(c.length, res)
    }
    return res
}

// Other way:
function findShort(s) {
    return Math.min(...s.split(" ").map(s => s.length));
}