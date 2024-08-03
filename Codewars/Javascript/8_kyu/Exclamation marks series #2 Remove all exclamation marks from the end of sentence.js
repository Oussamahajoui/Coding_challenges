// Description:
// Description:
// Remove all exclamation marks from the end of sentence.

// Examples
// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"

// My Solution:
function remove(string) {
    let res = string.split('')
    let i = res.length - 1
    while (res[i] === '!') {
        i -= 1
    }
    return res.slice(0, i + 1).join('')
}