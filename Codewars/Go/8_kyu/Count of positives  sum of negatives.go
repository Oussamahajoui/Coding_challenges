// Description:
// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

// My Solution:
package kata

func CountPositivesSumNegatives(numbers []int) []int {
  if len(numbers) == 0 {
    return []int{}
  }
  neg := 0
  pos := 0
  for _,n := range numbers{
    if n < 0 {
      neg += n
    }else if n > 0{
      pos += 1
    }
  }
  return []int{pos,neg}
}
