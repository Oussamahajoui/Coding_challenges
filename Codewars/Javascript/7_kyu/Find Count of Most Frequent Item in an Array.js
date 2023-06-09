// Description:
// Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0

// Example
// input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
// ouptut: 5
// The most frequent number in the array is -1 and it occurs 5 times.

// My Solution:
function mostFrequentItemCount(collection) {
    if (collection.length < 1) {
        return 0
    }
    let counter = {}
    for (let i = 0; i < collection.length; i++) {
        if (collection[i] in counter) {
            counter[collection[i]] += 1
        } else {
            counter[collection[i]] = 1
        }
    }
    let res = 0
    for (const [key, value] of Object.entries(counter)) {
        res = Math.max(value, res)
    }
    return res
}

// More JS way:
function mostFrequentItemCount(c) {
    return c.length ? Math.max(...c.map(x => c.filter(y => y == x).length)) : 0;
}