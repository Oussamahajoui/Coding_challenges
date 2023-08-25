// Description:
// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

// My Solution:
function stray(numbers) {
    let setMap = new Set()
    for (const n of numbers) {
        if (!setMap.has(n)) {
            setMap.add(n)
        } else {
            setMap.delete(n)
        }
    }
    let res = Array.from(setMap)
    return res[0]
}

// Simpler way:
function stray(numbers) {
    for (var i in numbers) {
        if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])) { return numbers[i] }
    }
}