// Description:
// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

// My Solution:
function isSortedAndHow(array) {
    let ascArray = [...array].sort((a, b) => a - b)
    let descArray = [...array].sort((a, b) => b - a)
    if (array.every((val, index) => val === ascArray[index])) {
        return "yes, ascending"
    } else if (array.every((val, index) => val === descArray[index])) {
        return "yes, descending"
    } else {
        return "no"
    }
}