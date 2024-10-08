// Description:
// Imagine you start on the 5th floor of a building, then travel down to the 2nd floor, then back up to the 8th floor. You have travelled a total of 3 + 6 = 9 floors of distance.

// Given an array representing a series of floors you must reach by elevator, return an integer representing the total distance travelled for visiting each floor in the array in order.

// // simple examples
// elevatorDistance([5,2,8]) = 9
// elevatorDistance([1,2,3]) = 2
// elevatorDistance([7,1,7,1]) = 18

// // if two consecutive floors are the same,
// //distance travelled between them is 0
// elevatorDistance([3,3]) = 0
// Array will always contain at least 2 floors. Random tests will contain 2-20 elements in array, and floor values between 0 and 30.

// My Solution:
function elevatorDistance(array) {
  let res = 0;
  for (let i = 0; i < array.length - 1; i++) {
    let val1 = Math.max(array[i], array[i + 1]);
    let val2 = Math.min(array[i], array[i + 1]);
    res += val1 - val2;
  }
  return res;
}

// Using Absolute Value:
function elevatorDistance(array) {
  let distance = 0;
  for (let i = 0; i < array.length - 1; i++) {
    distance += Math.abs(array[i] - array[i + 1]);
  }
  return distance;
}
