// Description:
// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

// My Solution:
package kata

func ReverseSeq(n int) (res[]int) {
  for idx:= n; idx > 0; idx--{
    res = append(res, idx)
  }
  return res
}