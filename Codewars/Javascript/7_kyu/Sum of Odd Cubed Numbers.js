// Description:
// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.


// My Solution:
function cubeOdd(arr) {
    let res = arr
        .filter((e) => e % 2 !== 0)
        .map((e) => e ** 3)
        .reduce((a, b) => a + b, 0)

    return isNaN(res) ? undefined : res;
}