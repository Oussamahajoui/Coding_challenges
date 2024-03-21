// DESCRIPTION:
// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway

// My Solution:
function noBoringZeros(n) {
    let number = String(n)
    let arr = number.split('')
    let i = arr.length - 1
    while (i >= 0 && arr[i] === '0') {
        i -= 1
    }
    let new_n = arr.slice(0, i + 1)
    return Number(new_n.join(''))
}

// Other Solution:
function noBoringZeros(n) {
    while (n % 10 === 0 && n !== 0) {
        n = n / 10
    }
    return n
}