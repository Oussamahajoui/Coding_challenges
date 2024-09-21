// Description:
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// My Solution:
package kata

func Grow(arr []int) (res int){
  res = 1
  for _,num := range arr {
    res *= num
  }
  return res
}