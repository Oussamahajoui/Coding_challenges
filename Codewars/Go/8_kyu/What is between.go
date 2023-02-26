// Description:
// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

// My Solution:
package kata


func Between(a, b int) (res []int) {
      for i:=a; i<= b;i++ {
        res = append(res,i)
      }
  return res
}