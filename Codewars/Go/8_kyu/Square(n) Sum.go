// Description:
// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because  1² + 2² + 2² = 9.

// My Solution:
package kata

func SquareSum(numbers []int) int {
    sum := 0
    for i:= 0; i < len(numbers); i++ {
      sum += numbers[i] * numbers[i]
    }
  return sum
}

//using range:
package kata

func SquareSum(nums []int) (res int) {
    for _, val := range nums {
      res += val * val
    }
    return res
}
