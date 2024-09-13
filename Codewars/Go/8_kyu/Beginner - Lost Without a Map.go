// Description:
// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

// My Solution:
package kata

func Maps(x []int) []int {
  res := []int{}
  for _,num := range x{
    res = append(res, num * 2) 
  }
  return res
}