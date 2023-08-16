// Description:
// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

// My Solution:
function smallEnough(a, limit) {
    let b = a.filter((e) => e > limit)
    return b.length > 0 ? false : true
}

// Other way:
smallEnough = (a, l) => a.every(e => e <= l)
