// Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.

// My Solution:
function mergeArrays(a, b) {
    let res = [...a, ...b]
    res.sort((a, b) => a - b)
    res = new Set(res)
    return Array.from(res)
}
