// Description:
// Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.

// Examples
// "Hi!"     ---> "Hi!"
// "Hi!!!"   ---> "Hi!"
// "!Hi"     ---> "Hi!"
// "!Hi!"    ---> "Hi!"
// "Hi! Hi!" ---> "Hi Hi!"
// "Hi"      ---> "Hi!"

// My Solution:
function remove(string) {
    const s = string.split('')
    let res = []
    for (let c of s) {
        if (c !== "!") {
            res.push(c)
        }
    }
    res.push('!')
    return res.join('')
}