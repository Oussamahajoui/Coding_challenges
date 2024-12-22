// Description:
// Write a function that takes a positive integer n, sums all the cubed values from 1 to n (inclusive), and returns that sum.

// Assume that the input n will always be a positive integer.

// Examples: (Input --> output)

// 2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
// 3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)

// My Solution:
package kata

import "math"

func SumCubes(n int) int {
	var res int
  for i:= 1.00; i <= float64(n); i++ {
    res += int(math.Pow(i,3))
  }
  return res
}