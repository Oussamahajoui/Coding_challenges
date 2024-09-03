// Description:
// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

// My Solution:
package kata

func SmallestIntegerFinder(numbers []int) int {
  v := numbers[0]
  for i:= 1; i < len(numbers); i++{
    if numbers[i] < v{
      v = numbers[i]
    }
  }
  return v
}

// Should just use slices Min, for some reason it's not available yet in codewars